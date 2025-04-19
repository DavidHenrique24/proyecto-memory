"use client"; //Esto lo pongo por que me lo pide next 
import { createContext, useContext, useState, ReactNode } from "react"
//Se usa reactNode para que el children pueda ser cualquier tipo de componente

// Contexto para el contador global
const ContadorContext = createContext({
  contadorGlobal: 0,          
  incrementarGlobal: () => {}, // Funcion Vacia
})

// Para acceder facil al contexto
export function useContadorGlobal() {
  return useContext(ContadorContext)
}

// Componente proveedor que envuelve los componentes que se pone en layaou
export function ContadorProvider({ children }: { children: ReactNode }) {
  const [contadorGlobal, setContadorGlobal] = useState(0) // Creamos estado para el contador global

  // Función que incrementa el contador
  const incrementarGlobal = () => {
    setContadorGlobal((prev) => prev + 1)
  }

  return (
    // Se devuelve el proveedor del contexto con el valor del contador y la función para incrementarlo
    // El children es el contenido que se pasa al proveedor
    <ContadorContext.Provider value={{ contadorGlobal, incrementarGlobal }}>
      {children} 
    </ContadorContext.Provider>
  )
}

// Componente que muestra el total ya bonito apartir
export function TotalClicks() {
  const { contadorGlobal } = useContadorGlobal(); 

  return (
    <p className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">{contadorGlobal}</p>
  );
}
