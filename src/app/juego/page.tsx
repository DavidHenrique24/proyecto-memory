'use client';
import { useEffect, useState } from 'react';
import { Tablero } from '@/componentes/GrupoTarjetas';
import { TotalClicks } from '@/componentes/Contador';
import { PuntajeTotal } from '@/componentes/Puntaje';

export default function Juego() {
  const [tiempo, setTiempo] = useState(20);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    if (!activo) return;

    if (tiempo > 0) {
      const intervalo = setInterval(() => {
        setTiempo((t) => t - 1);
      }, 1000);

      return () => clearInterval(intervalo);
    } else {
      setActivo(false); // Cuando llega a 0, se desactiva
    }
  }, [tiempo, activo]);

  const reiniciarJuego = () => {
    window.location.reload();
  };

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-gray-800 max-w-screen min-h-screen flex items-center justify-center text-white">
      <div className="flex w-full max-w-6xl mx-auto p-6">
        <div className="flex flex-col justify-start items-start w-1/2 p-4 mt-10">
          <h1 className="text-5xl font-bold mb-6">Memory Smash</h1>

          <div className="mb-4 text-center">
            <p className="text-lg">
              <strong>Tiempo:</strong>
            </p>
            <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
              {tiempo}
            </div>

            <br />
            <p className="text-lg">
              <strong>Puntaje:</strong>
            </p>
            <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
            <PuntajeTotal />
            </div>

            <br />
            <p className="text-lg">
              <strong>Clicks:</strong>
            </p>
            <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
              <TotalClicks />
            </div>

            {!activo && (
              <div className="mt-6">
                <p className="text-red-400 font-semibold mb-2">¡Tiempo agotado!</p>
                <button
                  onClick={reiniciarJuego}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Volver a intentarlo
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-800 flex justify-center items-center p-4">
          <Tablero desactivado={!activo} />
        </div>
      </div>
    </main>
  );
}
