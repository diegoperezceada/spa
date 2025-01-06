'use client'

import { useEffect, useState } from 'react'
import { Heart, SpadeIcon as Spa, Calendar, Hotel, Bed, Utensils, Wifi, Dumbbell } from 'lucide-react'

export default function GiftPage() {
  const [timeLeft, setTimeLeft] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const tripDate = new Date('2025-01-16T00:00:00') // Assuming the trip is in 2025
      const difference = tripDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-purple-800">
            ¡Sorpresa, mi amor! <Heart className="inline-block text-red-500 ml-2" />
          </h1>
          <p className="text-center text-lg text-gray-600 mt-2">
            Nos vamos de viaje romántico
          </p>
        </div>
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Cuenta atrás para nuestra aventura</h2>
            <p className="text-4xl font-bold text-purple-600">{timeLeft}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Fecha" description="Del 16 al 18 de Enero" />
            <InfoCard icon={<Hotel className="w-6 h-6" />} title="Alojamiento" description="Hotel con spa en Aranjuez" />
            <InfoCard icon={<Spa className="w-6 h-6" />} title="Actividades" description="Relax y romance en el spa" />
          </div>
          <div className="text-center">
            <p className="mb-4">Prepárate para unos días de relax, amor y diversión juntos.</p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsOpen(true)}
            >
              Ver más detalles
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Detalles del Hotel</h2>
            <p className="text-gray-600 mb-4">Información sobre nuestro alojamiento romántico</p>
            <div className="space-y-4">
              <HotelDetail icon={<Bed />} title="Habitación Deluxe" description="Cama king-size con vistas al jardín" />
              <HotelDetail icon={<Spa />} title="Spa Completo" description="Acceso ilimitado a las instalaciones del spa" />
              <HotelDetail icon={<Utensils />} title="Restaurante Gourmet" description="Cena romántica incluida" />
              <HotelDetail icon={<Wifi />} title="Wi-Fi Gratuito" description="Conexión de alta velocidad en todo el hotel" />
              <HotelDetail icon={<Dumbbell />} title="Gimnasio" description="Abierto 24/7 para mantenernos en forma" />
            </div>
            <button
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setIsOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <div className="text-purple-600 mb-2">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </div>
  )
}

function HotelDetail({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

