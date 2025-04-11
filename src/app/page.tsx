export default function Home() {

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen flex items-center justify-center text-white">
      <main className="text-center p-6">
        <h1 className="text-5xl font-bold mb-6">Bienvenido a Memory</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Pon a prueba tu memoria con este divertido juego de emparejar cartas. Creado como parte de una práctica de Next.js, Hecho por David Henrique.
        </p>
        <div className="flex justify-center items-center mb-6">
        <img src="https://play-lh.googleusercontent.com/sPHdC6J5W49zfcrKvFNK5PONi-ZW-8vw0z9-GFnn9aegxqoBd4LPJEMp7O5KpRN0oQ" alt=""
          className="w-100 shadow-md mb-6"
        />
        </div>
        <a
         
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Empezar a jugar
        </a>
      </main>
    </div>
  );
}