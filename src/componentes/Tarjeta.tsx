'use client'; // Esto lo pide Next.js cuando usamos hooks

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContadorGlobal } from "@/componentes/Contador";
import { useState } from "react";
import { usePuntajeGlobal } from "@/componentes/Puntaje";

// Variable global para registrar cartas giradas
let cartasGiradas: { nombre: string; setGirada: (valor: boolean) => void }[] = [];
// Contar parejas emparejadas
let totalEmparejadas = 0;

export function Tarjeta({ nombre, imagen }: { nombre: string; imagen: string }) {
  const [contadorLocal, setContadorLocal] = useState(0); // Contador de esta tarjeta
  const { incrementarGlobal } = useContadorGlobal(); // Contador total
  const [girada, setGirada] = useState(false); // Estado de giro
  const [emparejada, setEmparejada] = useState(false); // Estado de emparejamiento
  const { incrementarPuntaje, puntaje } = usePuntajeGlobal(); // Acceso al contexto del puntaje

  const handleClick = () => {
    if (girada || emparejada) return; // Si ya está girada, no hacer nada

    setContadorLocal(contadorLocal + 1); // Aumentamos contador local
    incrementarGlobal(); // Aumentamos contador global
    setGirada(true); // Giramos la carta

    cartasGiradas.push({ nombre, setGirada }); // Añadimos la carta a la lista de giradas

    if (cartasGiradas.length === 2) {
      const [carta1, carta2] = cartasGiradas;
      if (carta1.nombre === carta2.nombre) {
        setEmparejada(true);
        carta1.setGirada(true);
        carta2.setGirada(true);
        cartasGiradas = [];
        totalEmparejadas++;

        incrementarPuntaje(); // ✅ Aumentamos el puntaje usando el contexto

        if (totalEmparejadas === 6) {
          alert(`¡Ganaste! Tu puntaje es: ${puntaje + 10}`); // Mostramos el puntaje correcto sumando el siguiente incremento
        }
      } else {
        setTimeout(() => {
          carta1.setGirada(false);
          carta2.setGirada(false);
          cartasGiradas = [];
        }, 500);
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
