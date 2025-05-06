import { useEffect, useState } from "react";
import { Tarjeta } from "./Tarjeta";

interface PokemonApiResponse {
  name: string;
  sprites: {
    front_default: string;
  };
}

function mezclarArray(array: { nombre: string; imagen: string }[]) {
  return array.sort(() => Math.random() - 0.5); // Forma más simple de mezclar
}

export function Tablero({ desactivado = false }: { desactivado?: boolean }) {
  const [pokemons, setPokemons] = useState<{ nombre: string; imagen: string }[]>([]);

  useEffect(() => {
    const obtenerPokemones = async () => {
      const start = Date.now();
      try {
        const cantidad = 6; // Solo 6 pokemones distintos, porque luego los duplicamos
        const promesas: Promise<PokemonApiResponse>[] = [];

        for (let i = 1; i <= cantidad; i++) {
          promesas.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
              .then((res) => res.json() as Promise<PokemonApiResponse>) // Definir tipo de respuesta
          );
        }

        const resultados = await Promise.all(promesas);

        const pokemonsFormateados = resultados.map((pokemon) => ({
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
    <section
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center ${
        desactivado ? "pointer-events-none opacity-50" : ""
      }`}
    >
      {pokemons.map((pokemon, index) => (
        <Tarjeta key={index} nombre={pokemon.nombre} imagen={pokemon.imagen} />
      ))}
    </section>
  );
}
