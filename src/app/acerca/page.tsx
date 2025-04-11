export default function Acerca() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-700 items-center text-white">
        <a
            href="/"
            className="absolute top-0 left-0 m-4 inline-block bg-grey-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Volver
          </a>
      <div className="p-6 w-full max-w-5xl mx-auto text-center">
        <img
          src="https://www.tresxics.com/wp-content/uploads/2020/03/memory-game-to-print-tresxics.jpg"
          alt=""
          className="w-full h-auto rounded-xl shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Acerca de Memory</h1>
        <p className="text-lg mb-4">
          <strong>Memory</strong> es un juego clásico de cartas donde el objetivo es encontrar todas las parejas
          de cartas iguales en el menor número de intentos posibles. Es ideal para mejorar la concentración,
          la memoria visual y la agilidad mental.
        </p>
        <p className="text-lg mb-4">
          Este proyecto ha sido desarrollado como parte de una práctica de Next, y está diseñado para ser
          sencillo, interactivo y divertido. 
        </p>
        <p className="text-lg">
          ¡Ponte a prueba, mejora tus tiempos y diviértete jugando a Memory!
        </p>
        <div className="flex justify-center items-center mt-6">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHVibmdqOGlzNnE1N3Jhejh1djdncnd1bmFoejl6YTB6Nzlhdmt6diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d6UbuwWVKJHXO/giphy.gif"
            alt="Imagen del juego Memory"
            className="rounded-xl shadow-lg"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}
