'use client';  // Esto lo pide Next.js 13 para que el componente sea un cliente y no un servidor

import { useEffect, useState } from 'react';
import { Tablero } from '@/componentes/GrupoTarjetas';
import { TotalClicks } from '@/componentes/Contador';
import { PuntajeTotal } from '@/componentes/Puntaje';

export default function Juego() {
  const [tiempo, setTiempo] = useState(20);
  const [activo, setActivo] = useState(false);
  const [juegoIniciado, setJuegoIniciado] = useState(false);


  useEffect(() => {
    if (!activo) return; // Si el juego no está activo
    if (tiempo > 0) {
      const intervalo = setInterval(() => {
        setTiempo((t) => t - 1); 
      }, 1000);
      return () => clearInterval(intervalo);  // Limpiamos el intervalo al desmontar el componente 
    } else {
      setActivo(false); // Cuando el tiempo llega a 0, desactivamos el juego
    }
  }, [tiempo, activo]);


  const iniciarJuego = () => {
    setJuegoIniciado(true);
    setActivo(true);
  };

  const reiniciarJuego = () => {
    window.location.reload();
  };

  let contenidoIzquierda;

  if (!juegoIniciado) {
    contenidoIzquierda = (
      <button
        onClick={iniciarJuego}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-xl text-center transition duration-300"
      >
        Jugar
      </button>
    );
  } else {
    contenidoIzquierda = (
      <div className="mb-4 text-center w-full">
        <p className="text-lg"><strong>Tiempo:</strong></p>
        <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
          {tiempo}
        </div>

        <br />
        <p className="text-lg"><strong>Puntaje:</strong></p>
        <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
          <PuntajeTotal />
        </div>

        <br />
        <p className="text-lg"><strong>Clicks:</strong></p>
        <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
          <TotalClicks />
        </div>

        {!activo && tiempo === 0 && (
          <div className="mt-6">
            <p className="text-red-400 font-semibold mb-2">¡Tiempo agotado!</p>
            <button
              onClick={reiniciarJuego}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Volver a Jugar
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <main className="fondo-juego max-w-screen min-h-screen flex items-center justify-center text-white relative">
    <div className="relative z-10 flex w-full max-w-6xl mx-auto p-6">
      <div className="flex flex-col justify-start items-start w-1/2 p-4 mt-10">
        <h1 className="text-5xl font-bold mb-6">Memory Smash</h1>
        {contenidoIzquierda}
      </div>
  
      <div className="w-800 flex justify-center items-center p-4">
        {juegoIniciado && <Tablero desactivado={!activo} />}
      </div>
    </div>
  </main>
  
  );
}

