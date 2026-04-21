import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function formatNumber(value, options = {}) {
  const { style, currency = 'MXN' } = options;
  const number = Number(value);

  if (isNaN(number)) {
    return style === 'currency' ? '$0' : '0';
  }

  const formatter = new Intl.NumberFormat('es-MX', {
    style: style,
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(number);
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}