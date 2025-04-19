import { Tarjeta } from "./Tarjeta"
import { tarjetaPrueba } from "@/bd/pruebaBD"

// Recibe una prop desactivado para controlar si el tablero está activo o no
export function Tablero({ desactivado = false }) {
  return (
    //Foreach que muestra topdas las tarjetas 
    <section className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center ${desactivado ? 'pointer-events-none opacity-50' : ''}`}>
      {tarjetaPrueba.map((t, i) => (
        <Tarjeta key={i} nombre={t.nombre} imagen={t.imagen} />
      ))}
    </section>
  );
}

