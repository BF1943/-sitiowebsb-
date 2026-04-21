export const shareToWhatsApp = (carDetails, carId) => {
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(carDetails.precio || 0);

  const mileageText = carDetails.kilometraje 
    ? `${new Intl.NumberFormat('es-MX').format(carDetails.kilometraje)} km` 
    : 'N/D';
    
  const transmissionText = carDetails.transmisión || 'N/D';

  const text = `Hola, me interesa este auto: ${carDetails.marca} ${carDetails.modelo} ${carDetails.año} - Precio: ${formattedPrice}, Kilometraje: ${mileageText}, Transmisión: ${transmissionText}. ¿Puedes darme más información?`;
  
  const phoneNumber = '526461616696';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  
  window.open(whatsappUrl, '_blank');
  
  return whatsappUrl;
};