import { useEffect, useState } from "react"; 
import { Tarjeta } from "./Tarjeta"; 

// Definimos la interfaz TarjetaTipo por TypeScript 
interface TarjetaTipo {
  nombre: string;  
  imagen: string;  
}

// Función para mezclar aleatoriamente un array de tarjetas
function mezclarArray(array: TarjetaTipo[]): TarjetaTipo[] {
  return array
    // Creamos un array temporal 
    .map((valor) => ({ valor, orden: Math.random() })) 
    // Ordenamos el array temporal por el número aleatorio
    .sort((a, b) => a.orden - b.orden)
    // Finalmente devolvemos solo los valores originales ya mezclados
    .map((obj) => obj.valor);
}

interface TableroProps {
  desactivado?: boolean; // Propiedad opcional para desactivar el tablero 
}

export function Tablero({ desactivado = false }: TableroProps) {
  // Estado para almacenar las tarjetas que se mostrarán
  const [tarjetas, setTarjetas] = useState<TarjetaTipo[]>([]);

 
  useEffect(() => {
    // Función async para obtener las tarjetas desde una API
    const obtenerTarjetas = async () => {
      try {
        // Hacemos fetch a la API que devuelve las tarjetas
        const response = await fetch("https://cuddly-space-cod-pjpjp9prp5qg3rxxr-8000.app.github.dev/api/tarjetas");
        const data = await response.json();
        // Tomamos las primeras 6 tarjetas del resultado
        const seleccionadas: TarjetaTipo[] = data.tarjetas?.slice(0, 6) ;
        // Duplicamos las tarjetas para hacer parejas 
        const duplicados = [...seleccionadas, ...seleccionadas];
        // Mezclamos el array duplicado para que el orden sea aleatorio
        const mezclados = mezclarArray(duplicados);
        setTarjetas(mezclados);
      } catch (error) {
       //Por si ocurre un errro 
        console.error("Error al obtener las tarjetas:", error);
      }
    };
    obtenerTarjetas(); 
  }, []); 


  return (
    <section
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center ${
        desactivado ? "pointer-events-none opacity-50" : "" // Si está desactivado, no se puede interactuar
      }`}
    >
      {/* Recorremos el array de tarjetas para mostrar un componente Tarjeta por cada una */}
      {tarjetas.map((tarjeta, index) => (
        <Tarjeta key={index} nombre={tarjeta.nombre} imagen={tarjeta.imagen} />
      ))}
    </section>
  );
}
