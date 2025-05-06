import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <main className="text-center p-6">
        <h1 className="text-5xl font-bold mb-6">Bienvenido a Memory Smash</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Pon a prueba tu memoria con este divertido juego basado en los personajes de smash emparejando cartas. Creado como parte de una práctica de Next.js, Hecho por David Henrique.
        </p>
        <div className="flex justify-center items-center mb-6">
          <img
            src="https://nintheorist.com/wp-content/uploads/2018/11/super-smash-bros_ultimate_tema-principal_lifelight.jpg"
            alt=""
            className="w-100 shadow-md mb-6"
          />
        </div>
        <Link
          href="/juego" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Empezar a jugar
        </Link>
      </main>
    </div>
  );
}
