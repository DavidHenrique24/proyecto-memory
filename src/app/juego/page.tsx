import Link from 'next/link';
import { Tablero } from '@/componentes/GrupoTarjetas';
import { TotalClicks } from "@/componentes/Contador";

export default function Juego() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-gray-800 ,max-w-screen min-h-screen flex items-center justify-center text-white">
      <div className="flex w-full max-w-6xl mx-auto p-6">
      
        <div className="flex flex-col justify-start items-start w-1/2 p-4 mt-10">
      
          <h1 className="text-5xl font-bold mb-6">Memory Smash</h1>

          <div className="mb-4 text-center">
            <Link
              href="/juego" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 "
            >
              Jugar
            </Link>
            <br />
            <br />

            <p className="text-lg">
              <strong>Tiempo:</strong>
            </p>
            <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
              0
            </div>
            <br />
            <p className="text-lg">
              <strong>Puntaje:</strong>{' '}
            </p>
            <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
              0
            </div>
            <br />
            <p className="text-lg">
              <strong>Clicks:</strong>
            </p>
            <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
            <TotalClicks />
            </div>
          </div>
        </div>
        <div className="w-800 flex justify-center items-center p-4">
          <Tablero />
        </div>
      </div>
    </main>
  );
}
