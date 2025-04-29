import { useEffect, useState } from "react";
import { Tarjeta } from "./Tarjeta";

function mezclarArray(array: any[]) {
  return array
    .map((valor) => ({ valor, orden: Math.random() }))
    .sort((a, b) => a.orden - b.orden)
    .map((obj) => obj.valor);
}

export function Tablero({ desactivado = false }) {
  const [pokemons, setPokemons] = useState<{ nombre: string; imagen: string }[]>([]);

  useEffect(() => {
    const obtenerPokemones = async () => {
      const start = Date.now();
      try {
        const cantidad = 6; // Solo 10 distintos, porque luego los duplicamos
        const promesas = [];

        for (let i = 1; i <= cantidad; i++) {
          promesas.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
          );
        }

        const resultados = await Promise.all(promesas);

        const pokemonsFormateados = resultados.map(pokemon => ({
          nombre: pokemon.name,
          imagen: pokemon.sprites.front_default,
        }));

        const duplicados = [...pokemonsFormateados, ...pokemonsFormateados]; // duplicar
        const mezclados = mezclarArray(duplicados); // mezclar

        setPokemons(mezclados);
      } catch (error) {
        console.error("Error al obtener los pokemones:", error);
      } finally {
        console.log(`Carga terminada en ${(Date.now() - start) / 1000}s`);
      }
    };

    obtenerPokemones();
  }, []);

  return (
    <section className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center ${desactivado ? 'pointer-events-none opacity-50' : ''}`}>
      {pokemons.map((pokemon, index) => (
        <Tarjeta key={index} nombre={pokemon.nombre} imagen={pokemon.imagen} />
      ))}
    </section>
  );
}
