import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" //cosos de la tarjetas 

export function Tarjeta({ nombre, imagen }: { nombre: string; imagen: string }) { ////props de la tarjeta
  return (
    //Tarjeta con su imagen y nombre
    <Card className="w-40 shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <CardHeader>
        <img src={imagen}  className="w-full h-24 object-cover rounded" /> 
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">{nombre}</CardTitle>
      </CardContent>
    </Card>
  )
}
