import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo a la izquierda */}
          <h1 className="text-white text-2xl font-bold">Memory Game</h1>
     

        {/* Links en el centro */}
        <nav className="flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="/acerca" className="text-white hover:text-blue-400 transition duration-300">Acerca</Link>
          <Link href="/juego" className="text-white hover:text-blue-400 transition duration-300">Jugar</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
