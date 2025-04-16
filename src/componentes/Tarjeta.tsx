"use client"; //Esto lo pongo por que me lo pide next 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" //cosos de la tarjetas 
import { useContadorGlobal } from "@/componentes/Contador";
import { useState } from "react";


export function Tarjeta({ nombre, imagen }: { nombre: string; imagen: string }) { ////props de la tarjeta
  const [ContadorGlobal, setContadorGlobal] = useState(0); //Contador 
  const { incrementarGlobal } = useContadorGlobal(); //Importamos la funcion del contador global

  const handleClick = () => { 
    setContadorGlobal(ContadorGlobal + 1); //Aumentamos el contador local
    incrementarGlobal(); //Aumentamos el contador global
  } 

  return (
    //Tarjeta con su imagen y nombre
    <Card className="w-40 shadow-lg hover:scale-105 transition-transform cursor-pointer" onClick={handleClick}>
      <CardHeader>
        <img src={imagen} className="w-full h-30 rounded" /> 
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">{nombre}</CardTitle>
        <p className="text-xs">Clicks: {ContadorGlobal} </p> 
      </CardContent>
    </Card>
  )
}
