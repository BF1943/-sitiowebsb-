import React from 'react';

const GoogleMapEmbed = () => {
  // Coordinates for Seminuevos Baja: 31.851438, -116.602394
  // Using the specific Place ID for Seminuevos Baja to ensure the business marker is shown
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-white/20 h-[400px] w-full relative z-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.801883818214!2d-116.60239362431118!3d31.85143802859725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d89fcfba5e78ed%3A0xa94d47e6a1a1b0c9!2sSeminuevos%20Baja!5e0!3m2!1ses-419!2smx!4v1721578550000!5m2!1ses-419!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Seminuevos Baja en Google Maps"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;