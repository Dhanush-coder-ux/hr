import React, { useState, useEffect } from 'react';

const LazyMap = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowMap(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showMap ? (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62970.01160346825!2d77.75142300346339!3d9.454179599895825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43d812d0d%3A0x8ce12e9dcdaa2a2c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1743050805671!5m2!1sen!2sin"
    width="100%"
      height="300"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    />
  ) : (
    <p>Scroll down to load map...</p>
  );
};

export default LazyMap;
