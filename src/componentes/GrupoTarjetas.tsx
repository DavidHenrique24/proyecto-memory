import { useEffect, useState } from "react"; 
import { Tarjeta } from "./Tarjeta"; 

// Definimos la interfaz TarjetaTipo que describe la estructura de cada tarjeta
interface TarjetaTipo {
  nombre: string;  
  imagen: string;  
}

// Función para mezclar aleatoriamente un array de tarjetas
function mezclarArray(array: TarjetaTipo[]): TarjetaTipo[] {
  return array
    // Creamos un array temporal que añade un número aleatorio 
    .map((valor) => ({ valor, orden: Math.random() })) 
    // Ordenamos el array según el número aleatorio para mezclarlo
    .sort((a, b) => a.orden - b.orden)
    // Finalmente devolvemos solo los valores originales ya mezclados
    .map((obj) => obj.valor);
}

// Interfaz para las props del componente Tablero
interface TableroProps {
  desactivado?: boolean; 
}

// Componente principal Tablero
export function Tablero({ desactivado = false }: TableroProps) {
  // Estado para almacenar las tarjetas que se mostrarán
  const [tarjetas, setTarjetas] = useState<TarjetaTipo[]>([]);

  // useEffect para ejecutar una función cuando el componente se monta (solo una vez [])
  useEffect(() => {
    // Función async para obtener las tarjetas desde una API
    const obtenerTarjetas = async () => {
      try {
        // Hacemos fetch a la API que devuelve las tarjetas
        const response = await fetch("https://cuddly-space-cod-pjpjp9prp5qg3rxxr-8000.app.github.dev/api/tarjetas");
        const data = await response.json();
        // Tomamos las primeras 6 tarjetas del resultado (o un array vacío si no hay)
        const seleccionadas: TarjetaTipo[] = data.tarjetas?.slice(0, 6) || [];
        // Duplicamos las tarjetas para hacer parejas 
        const duplicados = [...seleccionadas, ...seleccionadas];
        // Mezclamos el array duplicado para que el orden sea aleatorio
        const mezclados = mezclarArray(duplicados);
        setTarjetas(mezclados);
      } catch (error) {
        // Si ocurre un error, lo mostramos en consola
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
