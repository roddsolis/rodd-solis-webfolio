import React, { useEffect, useRef } from "react";

const NoiseBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Cargar Noise.js desde el CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/josephg/noisejs/perlin.js";
    script.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Ajustar el tamaño del canvas
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Generar ruido Perlin
      noise.seed(Math.random());

      const generateNoise = () => {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;

        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const value = noise.perlin2(x / 1.5, y / 1.5); // Ajusta la frecuencia
            const color = Math.floor((value + 0.1) * 128); // Escala a 0-255
            const index = (x + y * width) * 4;
            data[index] = color; // Red
            data[index + 1] = color; // Green
            data[index + 2] = color; // Blue
            data[index + 3] = 15; // Alpha (opaco)
          }
        }

        ctx.putImageData(imageData, 0, 0); // Dibuja el ruido en el canvas
      };

      generateNoise();

      // Redimensionar el canvas si la ventana cambia de tamaño
      window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;
        generateNoise();
      });
    };

    document.body.appendChild(script);

    return () => {
      // Limpiar el fondo al desmontar el componente
      document.body.removeChild(script);
      canvasRef.current.width = 0;
      canvasRef.current.height = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Permitir interacciones con elementos debajo
        zIndex: 10, // Asegúrate de que esté encima de otros elementos
      }}
    />
  );
};

export default NoiseBackground;
