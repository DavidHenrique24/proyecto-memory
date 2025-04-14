import { Tarjeta } from "./Tarjeta"
import { tarjetaPrueba } from "@/bd/pruebaBD"

export function Tablero() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center">
      {tarjetaPrueba.map((t, i) => ( //hacemos un map y le pasamos las props a la tarjeta
        <Tarjeta key={i} nombre={t.nombre} imagen={t.imagen} /> //Le agrego key pa que no salte error

      ))}
    </section>
  )
}
