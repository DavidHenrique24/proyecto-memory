"use client"; // Esto lo pide Next.js cuando usamos hooks
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContadorGlobal } from "@/componentes/Contador";
import { useState } from "react";


// Variable global para registrar cartas giradas
let cartasGiradas: { nombre: string; setGirada: (valor: boolean) => void }[] = [];
// contar parejas
let totalEmparejadas = 0;

// Función para esperar un tiempo determinado
// Se usa para hacer una pausa antes de girar las cartas de nuevo
const esperar = (ms: number) => new Promise((res) => setTimeout(res, ms));


export function Tarjeta({ nombre, imagen }: { nombre: string; imagen: string }) {
  const [contadorLocal, setContadorLocal] = useState(0); // Contador de esta tarjeta
  const { incrementarGlobal } = useContadorGlobal(); // Contador total
  const [girada, setGirada] = useState(false); // Estado de giro
  const [emparejada, setEmparejada] = useState(false); //  emparejamiento

  const handleClick = async () => {
    if (girada || emparejada) return; // Si ya está girada, no hacer nada

    setContadorLocal(contadorLocal + 1); // Aumentamos contador local
    incrementarGlobal(); // Aumentamos contador global
    setGirada(true); // Giramos la carta

    cartasGiradas.push({ nombre, setGirada }); // Añadimos el nombre a la lista de cartas giradas

    if (cartasGiradas.length === 2) {
      const [carta1, carta2] = cartasGiradas; // Obtenemos las dos cartas
      if (carta1.nombre === carta2.nombre) {
        setEmparejada(true); // Si son iguales, marcamos como emparejadas
        carta1.setGirada(true);
        carta2.setGirada(true); 
        cartasGiradas = []; // Reinicia el array 
        totalEmparejadas++; // Aumentamos el contador de parejas

        if (totalEmparejadas === 6) {
          await esperar(1000); // Pausa para que se vean todas las cartas 
          alert("¡Ganaste! Felicidades!");
        }
      } else {
        await esperar(500); // Espera antes de girar de nuevo
        carta1.setGirada(false); // Giramos de nuevo lacarta
        carta2.setGirada(false);
        cartasGiradas = []; 
      }
    }
  };

  return (
    <Card
      className="w-40 shadow-lg hover:scale-105 transition-transform cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader>
        {girada || emparejada ? (
          <img src={imagen} className="w-full h-30 rounded" />
        ) : (
          <div className="w-full h-30 rounded flex items-center justify-center text-2xl font-bold text-white">
            <img src="https://m.media-amazon.com/images/I/51P8Uyw+6UL.jpg" alt="" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">{girada || emparejada ? nombre : "???"}</CardTitle>
        <p className="text-xs text-center">Clicks: {contadorLocal}</p>
      </CardContent>
    </Card>
  );
}
