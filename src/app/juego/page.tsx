'use client';  // Esto lo pide Next.js cuando usamos hooks

import { useEffect, useState } from 'react';
import { Tablero } from '@/componentes/GrupoTarjetas'; 
import { TotalClicks } from '@/componentes/Contador'; 
import { PuntajeTotal } from '@/componentes/Puntaje'; 

export default function Juego() {
  // Estado para el tiempo
  const [tiempo, setTiempo] = useState(20);

  // Estado que indica si el temporizador está activo
  const [activo, setActivo] = useState(false);

  // Estado para saber si el jugador ya ha iniciado el juego
  const [juegoIniciado, setJuegoIniciado] = useState(false);

  // Hook que se ejecuta cada vez que cambian los estados de tiempo o activo
  useEffect(() => {
    if (!activo) return; // Si el juego no está activo, no hace nada

    if (tiempo > 0) {
      // Si hay tiempo restante, inicia un intervalo que reduce el tiempo cada segundo
      const intervalo = setInterval(() => {
        setTiempo((t) => t - 1);
      }, 1000);
      return () => clearInterval(intervalo); // Limpiar el intervalo por cada que se cambia el estado
    } else {
      // Si el tiempo llega a 0, se detiene el juego
      setActivo(false); 
    }
  }, [tiempo, activo]); 

  // Función que se ejecuta al pulsar el boton juego 
  const iniciarJuego = () => {
    setJuegoIniciado(true); // Marca que el juego ha comenzado
    setActivo(true); // Activa el temporizador 
  };

  // Funcion que reinicia el juego
  const reiniciarJuego = () => {
    window.location.reload(); // Recarga la página para reiniciar el juego
  };

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-gray-800 max-w-screen min-h-screen flex items-center justify-center text-white">
      <div className="flex w-full max-w-6xl mx-auto p-6">
        <div className="flex flex-col justify-start items-start w-1/2 p-4 mt-10">
          <h1 className="text-5xl font-bold mb-6">Memory Smash</h1>

          {/* Si el juego no ha comenzado muestra el boton para iniciar */}
          {!juegoIniciado ? (
            <button
              onClick={iniciarJuego}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-xl text-center transition duration-300" 
            >
              Comenzar Juego
            </button>
          ) : (
            // muestra la informacion del juego
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

              {/* Si el tiempo se agota, muestra el botón para reiniciar */}
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
          )}
        </div>

        <div className="w-800 flex justify-center items-center p-4">
          {/* Solo muestra el tablero si el juego ha sido iniciado */}
          {juegoIniciado && <Tablero desactivado={!activo} />}
        </div>
      </div>
    </main>
  );
}
