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
            const value = noise.perlin2(x / 1.3, y / 1.3); // Ajusta la frecuencia
            const color = Math.floor((value + 1) * 128); // Escala a 0-255
            const index = (x + y * width) * 4;
            data[index] = color; // Red
            data[index + 1] = color; // Green
            data[index + 2] = color; // Blue
            data[index + 3] = 7; // Alpha (opaco)
          }
        }

        ctx.putImageData(imageData, 0, 0); // Dibuja el ruido en el canvas
      };

      generateNoise();

      // Convertir el canvas a una imagen base64 y aplicarlo al body
      const noiseImage = canvas.toDataURL();
      document.body.style.backgroundImage = `url(${noiseImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
    };

    document.body.appendChild(script);

    return () => {
      // Limpiar el fondo al desmontar el componente
      document.body.style.backgroundImage = "";
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "none" }} />;
};

export default NoiseBackground;
