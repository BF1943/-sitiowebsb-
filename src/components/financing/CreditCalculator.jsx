import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, Percent, Shield, Zap, Lock } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { formatNumber } from '@/lib/utils';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

export default function CreditCalculator({ initialPrice, carName, isPriceLocked = false }) {
  const { trackEvent, trackWhatsAppClick } = useGoogleAnalytics();
  
  // Ensure initial values are valid numbers
  const safeInitialPrice = Number(initialPrice) || 200000;
  // Default name if not provided
  const displayCarName = carName || "tu próximo auto";
  
  const [loanAmount, setLoanAmount] = useState(safeInitialPrice);
  const [downPayment, setDownPayment] = useState(safeInitialPrice * 0.1);
  
  // State for the display value of the input (handles formatting vs editing)
  const [downPaymentInputValue, setDownPaymentInputValue] = useState(formatNumber(safeInitialPrice * 0.1));
  
  const [term, setTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(14.99);
  const [openingFeeRate, setOpeningFeeRate] = useState(2.5);
  const [insuranceCost, setInsuranceCost] = useState(10000);
  const [includeInsuranceInLoan, setIncludeInsuranceInLoan] = useState(true);

  const minDownPayment = loanAmount * 0.1;
  const maxDownPayment = loanAmount * 0.5;

  // Track calculator initialization
  useEffect(() => {
    trackEvent('lead_credit_simulation', { 
      simulation_type: 'calculator', 
      car_name: displayCarName,
      initial_price: safeInitialPrice
    });
    // Run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset defaults when initialPrice changes
  useEffect(() => {
    setLoanAmount(safeInitialPrice);
    const initialDown = safeInitialPrice * 0.1;
    setDownPayment(initialDown);
    setDownPaymentInputValue(formatNumber(initialDown));
  }, [safeInitialPrice]);

  // Sync down payment when loan amount changes bounds
  useEffect(() => {
    const currentMin = loanAmount * 0.1;
    const currentMax = loanAmount * 0.5;
    
    let newDown = downPayment;
    if (downPayment < currentMin) {
      newDown = currentMin;
    } else if (downPayment > currentMax) {
      newDown = currentMax;
    }

    if (newDown !== downPayment) {
      setDownPayment(newDown);
      setDownPaymentInputValue(formatNumber(newDown));
    }
    // We only want to run this when loanAmount changes to keep bounds correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanAmount]); 

  const handleLoanSliderChange = (e) => {
    // Prevent change if locked
    if (isPriceLocked) return;
    setLoanAmount(Number(e.target.value));
  };

  const handleDownPaymentSliderChange = (e) => {
    const val = Number(e.target.value);
    setDownPayment(val);
    setDownPaymentInputValue(formatNumber(val));
  };

  const handleTermSliderChange = (e) => {
    setTerm(Number(e.target.value));
  };

  // --- TEXT INPUT HANDLERS ---
  
  const handleDownPaymentFocus = () => {
    setDownPaymentInputValue(downPayment.toString());
  };

  const handleDownPaymentChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    setDownPaymentInputValue(rawValue);

    const val = parseFloat(rawValue);
    if (!isNaN(val) && val >= minDownPayment && val <= maxDownPayment) {
      setDownPayment(val);
    }
  };

  const handleDownPaymentKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleDownPaymentBlur = () => {
    let val = parseFloat(downPaymentInputValue);
    
    if (isNaN(val)) {
      val = minDownPayment;
    } else {
      if (val < minDownPayment) val = minDownPayment;
      if (val > maxDownPayment) val = maxDownPayment;
    }

    setDownPayment(val);
    setDownPaymentInputValue(formatNumber(val));
  };

  // --- CALCULATIONS ---

  const calculateCreditDetails = () => {
    const principalToCalculateFee = loanAmount - downPayment;
    if (principalToCalculateFee <= 0) {
      return { monthlyPayment: 0, openingFee: 0, totalFinanced: 0, dueToday: 0 };
    }
  
    const openingFee = principalToCalculateFee * (openingFeeRate / 100);
  
    let principal = loanAmount - downPayment;
    if (includeInsuranceInLoan) {
      principal += insuranceCost;
    }
  
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = term;
    let monthlyPayment = 0;
  
    if (monthlyRate === 0) {
      monthlyPayment = principal / numPayments;
    } else {
      monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    }
  
    let dueToday = downPayment + openingFee;
    if (!includeInsuranceInLoan) {
      dueToday += insuranceCost;
    }
  
    return {
      monthlyPayment: Math.round(monthlyPayment),
      openingFee: Math.round(openingFee),
      totalFinanced: Math.round(principal),
      dueToday: Math.round(dueToday),
    };
  };

  const { monthlyPayment, openingFee, totalFinanced, dueToday } = calculateCreditDetails();

  const handleApply = () => {
    // Track specific application attempt
    trackEvent('lead_credit_application_click', {
      car_name: displayCarName,
      loan_amount: loanAmount,
      down_payment: downPayment,
      term: term,
      monthly_payment: monthlyPayment
    });

    // Track WhatsApp click
    trackWhatsAppClick('WhatsApp', 'Credit Calculator Apply');

    const phoneNumber = '526461616696';
    const message = `
Hola, quiero solicitar mi crédito para ${displayCarName}.

*Resumen de simulación:*
Valor del auto: ${formatNumber(loanAmount, { style: 'currency' })}
Enganche: ${formatNumber(downPayment, { style: 'currency' })}
Plazo: ${term} meses
Monto total a financiar: ${formatNumber(totalFinanced, { style: 'currency' })}
Pago mensual aprox: ${formatNumber(monthlyPayment, { style: 'currency' })}
Pago inicial total: ${formatNumber(dueToday, { style: 'currency' })}
${!includeInsuranceInLoan ? `Seguro pagado de contado: ${formatNumber(insuranceCost, { style: 'currency' })}` : `Seguro incluido en financiamiento.`}

Mi nombre es: 
    `.trim().replace(/\n\s*\n/g, '\n');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Shared classes
  const rangeInputClass = "w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500 touch-none focus:outline-none focus:ring-2 focus:ring-amber-500/50";
  const disabledRangeInputClass = "w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-not-allowed accent-gray-400 touch-none";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calculator Controls */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Calculator className="h-6 w-6 mr-2 text-amber-500" />
          Simula tu crédito para: <span className="text-amber-600 ml-1">{displayCarName}</span>
        </h2>
        
        <div className="space-y-8">
          {/* Loan Amount Slider */}
          <div className={`p-4 rounded-lg border shadow-sm transition-colors ${isPriceLocked ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-100'}`}>
            <label className="block text-sm font-medium text-gray-900 mb-4 flex justify-between items-end">
              <div className="flex items-center">
                <span className={`${isPriceLocked ? 'text-gray-400' : 'text-gray-500'}`}>Valor del auto</span>
                {isPriceLocked && (
                  <span className="ml-2 flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                    <Lock className="h-3 w-3 mr-1" /> Precio Fijo
                  </span>
                )}
              </div>
              <span className={`font-bold text-xl ${isPriceLocked ? 'text-gray-500' : 'text-gray-900'}`}>
                {formatNumber(loanAmount, { style: 'currency' })}
              </span>
            </label>
            <input
              type="range"
              min="100000"
              max="800000"
              step="10000"
              value={loanAmount}
              onChange={handleLoanSliderChange}
              disabled={isPriceLocked}
              className={isPriceLocked ? disabledRangeInputClass : rangeInputClass}
            />
            <div className={`flex justify-between text-xs font-medium mt-2 ${isPriceLocked ? 'text-gray-300' : 'text-gray-400'}`}>
              <span>$100k</span>
              <span>$800k</span>
            </div>
          </div>

          {/* Down Payment Slider & Input */}
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
             <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <label className="block text-sm font-medium text-gray-900">
                Enganche <span className="text-amber-600 font-bold">({loanAmount > 0 ? ((downPayment/loanAmount)*100).toFixed(0) : 0}%)</span>
              </label>
              <div className="relative w-32">
                <input
                  type="text"
                  inputMode="numeric"
                  value={downPaymentInputValue}
                  onFocus={handleDownPaymentFocus}
                  onChange={handleDownPaymentChange}
                  onBlur={handleDownPaymentBlur}
                  onKeyDown={handleDownPaymentKeyDown}
                  className="w-full px-3 py-1 text-right border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-gray-900"
                />
              </div>
            </div>
            
            <input
              type="range"
              min={minDownPayment}
              max={maxDownPayment}
              step="1000"
              value={downPayment}
              onChange={handleDownPaymentSliderChange}
              className={rangeInputClass}
            />
            <div className="flex justify-between text-xs text-gray-400 font-medium mt-2">
              <span>10% (Mínimo)</span>
              <span>50% (Máximo)</span>
            </div>
          </div>
          
          {/* Term Slider */}
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
            <label className="block text-sm font-medium text-gray-900 mb-4 flex justify-between items-center">
              <span className="text-gray-500">Plazo del crédito</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold text-sm">
                {term} meses
              </span>
            </label>
            <input
              type="range"
              min="12"
              max="60"
              step="12"
              value={term}
              onChange={handleTermSliderChange}
              className={rangeInputClass}
            />
            <div className="flex justify-between text-xs text-gray-400 font-medium mt-2">
              <span>12 meses</span>
              <span>36 meses</span>
              <span>60 meses</span>
            </div>
          </div>

          {/* Advanced Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div>
              <label className="block text-xs uppercase tracking-wide font-semibold text-gray-500 mb-2">
                Tasa Anual (%)
              </label>
              <div className="relative">
                  <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                  className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-900 font-medium"
                />
                <Percent className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
             
            <div>
              <label className="block text-xs uppercase tracking-wide font-semibold text-gray-500 mb-2">
                Seguro Anual Est.
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  step="100"
                  value={insuranceCost}
                  onChange={(e) => setInsuranceCost(parseFloat(e.target.value) || 0)}
                  className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-900 font-medium"
                />
              </div>
            </div>

            <div className="sm:col-span-2 flex items-center pt-2">
              <Switch
                id="insuranceSwitch"
                checked={includeInsuranceInLoan}
                onCheckedChange={setIncludeInsuranceInLoan}
                className="data-[state=checked]:bg-amber-500"
              />
              <label htmlFor="insuranceSwitch" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer select-none flex items-center">
                <Shield className={`h-4 w-4 mr-1 ${includeInsuranceInLoan ? 'text-amber-500' : 'text-gray-400'}`} />
                Incluir seguro en financiamiento
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Results Panel */}
      <div className="bg-white p-1 rounded-xl shadow-2xl shadow-amber-500/10 overflow-hidden h-fit">
        <div className="bg-gradient-to-b from-white to-gray-50 h-full p-6 rounded-lg border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-b pb-4">
              <Zap className="h-5 w-5 text-amber-500 mr-2 fill-amber-500" />
              Resumen
            </h3>
            
            <div className="space-y-4 flex-grow">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Valor del auto</span>
                  <span className="font-semibold text-gray-900">{formatNumber(loanAmount, { style: 'currency' })}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Enganche</span>
                  <span className="font-semibold text-green-600">-{formatNumber(downPayment, { style: 'currency' })}</span>
                </div>
                <div className="w-full h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Comisión apertura</span>
                  <span className="font-semibold text-gray-900">{formatNumber(openingFee, { style: 'currency' })}</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-gray-600">Seguro ({includeInsuranceInLoan ? 'financiado' : 'de contado'})</span>
                   <span className={`font-semibold ${includeInsuranceInLoan ? 'text-amber-600' : 'text-gray-900'}`}>
                     {formatNumber(insuranceCost, { style: 'currency' })}
                   </span>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 p-4 rounded-xl border border-amber-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-amber-800 font-medium">Monto a Financiar</span>
                  <span className="text-lg font-bold text-amber-900">{formatNumber(totalFinanced, { style: 'currency' })}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-amber-700/80">
                    <span>Plazo:</span>
                    <span className="font-bold">{term} meses</span>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                  <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                    <span className="font-bold text-gray-700">Pago Inicial Total</span>
                    <span className="text-xl font-extrabold text-gray-900">
                        {formatNumber(dueToday, { style: 'currency' })}
                    </span>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center py-6 bg-brand-blue rounded-xl shadow-lg shadow-blue-900/20 relative overflow-hidden transform transition-transform hover:scale-[1.01]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400"></div>
                    <span className="text-blue-100 font-medium mb-1 text-sm uppercase tracking-wider">Mensualidad Estimada</span>
                    <span className="text-4xl font-black text-white tracking-tight">
                      {formatNumber(monthlyPayment, { style: 'currency' })}
                    </span>
                  </div>
              </div>
            </div>
            
            <Button 
              onClick={handleApply}
              size="lg"
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Solicitar Este Crédito
            </Button>
        </div>
      </div>
    </div>
  );
}