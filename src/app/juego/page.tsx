export default function Juego() {
    return (
      <main className="bg-gradient-to-br from-black via-gray-900 to-gray-800 ,max-w-screen min-h-screen flex items-center justify-center text-white">
        <div className="flex w-full max-w-6xl mx-auto p-6">
          {/* Columna izquierda */}
          <div className="flex flex-col justify-start items-start w-1/2 p-4">
            <a
              href="/"
              className="absolute top-0 left-0 m-4 inline-block bg-grey-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
            >
              Volver
            </a>
            <h1 className="text-5xl font-bold mb-6">Memory</h1>
            
            <div className="mb-4 text-center">
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 "
            >
             Jugar
            </a>
            <br />
            <br />
    
              <p className="text-lg"><strong>Tiempo:</strong></p>
              <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
                0
              </div>
                <br />
              <p className="text-lg"><strong>Puntaje:</strong> </p>
              <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
                0
              </div>
                <br />
              <p className="text-lg"><strong>Clicks:</strong></p>
              <div className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
                0
              </div>
            </div>
            
           
          </div>
          <div className="w-800 flex justify-center items-center p-4">
            <img
              src="https://play-lh.googleusercontent.com/sPHdC6J5W49zfcrKvFNK5PONi-ZW-8vw0z9-GFnn9aegxqoBd4LPJEMp7O5KpRN0oQ"
              alt="Imagen de juego"
              className="w-full h-auto "
            />
          </div>
        </div>
      </main>
    );
  }
  