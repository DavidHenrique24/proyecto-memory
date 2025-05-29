'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContadorGlobal } from "@/componentes/Contador";
import { useState } from "react";
import { usePuntajeGlobal } from "@/componentes/Puntaje";

// Variables globales
let cartasGiradas: { nombre: string; setGirada: (valor: boolean) => void }[] = []; 
let totalEmparejadas = 0;
let bloqueo = false; // Bloqueo global

export function Tarjeta({ nombre, imagen }: { nombre: string; imagen: string }) {
  const [contadorLocal, setContadorLocal] = useState(0);
  const [girada, setGirada] = useState(false);
  const [emparejada] = useState(false);
  const { incrementarPuntaje, puntaje } = usePuntajeGlobal();
  const { incrementarGlobal } = useContadorGlobal();

  const tocarCarta = () => {
    if (girada || emparejada || bloqueo) return; // Si está girada, emparejada o bloqueada, no hacer nada

    setContadorLocal(contadorLocal + 1);
    incrementarGlobal();
    setGirada(true);
    cartasGiradas.push({ nombre, setGirada });

    if (cartasGiradas.length === 2) {
      bloqueo = true; // Activamos el bloqueo

      const [carta1, carta2] = cartasGiradas;

      if (carta1.nombre === carta2.nombre) {
        carta1.setGirada(true);
        carta2.setGirada(true);
        totalEmparejadas++;
        incrementarPuntaje();
        cartasGiradas = [];
        bloqueo = false; // Desbloqueamos inmediatamente si hay coincidencia

        if (totalEmparejadas === 6) {
          alert(`¡Ganaste! Tu puntaje es: ${puntaje + 10}`);
          window.location.reload();
        }
      } else {
        setTimeout(() => {
          carta1.setGirada(false);
          carta2.setGirada(false);
          cartasGiradas = [];
          bloqueo = false; // Desbloqueamos después de ocultarlas
        }, 1000);
      }
    }
  };

  return (
    <Card
      className="w-40 shadow-lg hover:scale-105 transition-transform cursor-pointer"
      onClick={tocarCarta}
    >
      <CardHeader>
        {(() => {
          if (girada || emparejada) {
            return <img src={imagen} className="w-full h-30 rounded" />;
          } else {
            return (
              <div className="w-full h-30 rounded flex items-center justify-center text-2xl font-bold text-white">
                <img src="https://m.media-amazon.com/images/I/51P8Uyw+6UL.jpg" alt="" />
              </div>
            );
          }
        })()}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">
          {(() => (girada || emparejada ? nombre : "???"))()}
        </CardTitle>
        <p className="text-xs text-center">Clicks: {contadorLocal}</p>
      </CardContent>
    </Card>
  );
}
