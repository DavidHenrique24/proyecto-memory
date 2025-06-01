'use client'

import { useEffect, useState } from 'react'

interface Game {
  id: number
  clicks: number
  points: number
  duration: number | null
  created_at: string
}

export default function GamesPage() {
  const [propiosGames, setpropiosGames] = useState<Game[]>([])
  const [todosGames, settodosGames] = useState<Game[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        return <div> No hay token</div>
      }

      try {
        const [ownRes, allRes] = await Promise.all([
          fetch('https://cuddly-space-cod-pjpjp9prp5qg3rxxr-8000.app.github.dev/api/games', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          fetch('https://cuddly-space-cod-pjpjp9prp5qg3rxxr-8000.app.github.dev/api/games/all', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ])

        if (!ownRes.ok || !allRes.ok) return

        const ownData = await ownRes.json()
        const allData = await allRes.json()

        setpropiosGames(ownData.data)
        settodosGames(allData.data)
      } catch {}
    }

    fetchData()
  }, [])

  const deleteGame = async (gameId: number) => {
    const token = localStorage.getItem('token')
    if (!token) return

    const confirmDelete = confirm('¿Seguro que quieres eliminar esta partida?')
    if (!confirmDelete) return

    try {
      const res = await fetch(`https://cuddly-space-cod-pjpjp9prp5qg3rxxr-8000.app.github.dev/api/games/${gameId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })

      if (res.ok) {
        setpropiosGames(prev => prev.filter(game => game.id !== gameId))
      } else {
        alert('No se pudo eliminar la partida.')
      }
    } catch {
      alert('Error al eliminar la partida.')
    }
  }

  const renderTablaPropia = () => (
    <div className="overflow-x-auto mb-10">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-100 dark:bg-blue-800 text-gray-700 dark:text-white">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Clicks</th>
            <th className="px-4 py-2 text-left">Puntos</th>
            <th className="px-4 py-2 text-left">Duración (s)</th>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {propiosGames.map((game, index) => (
            <tr
              key={`own-${game.id}`}
              className={`${
                index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-600'
              } text-gray-800 dark:text-white`}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{game.clicks}</td>
              <td className="px-4 py-2">{game.points}</td>
              <td className="px-4 py-2">{game.duration ?? 'N/D'}</td>
              <td className="px-4 py-2">{new Date(game.created_at).toLocaleDateString()}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => deleteGame(game.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderTabla = (games: Game[], tableKey = '') => (
    <div className="overflow-x-auto mb-10">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-100 dark:bg-blue-800 text-gray-700 dark:text-white">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Clicks</th>
            <th className="px-4 py-2 text-left">Puntos</th>
            <th className="px-4 py-2 text-left">Duración (s)</th>
            <th className="px-4 py-2 text-left">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr
              key={`${tableKey}-${game.id}`}
              className={`${
                index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-600'
              } text-gray-800 dark:text-white`}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{game.clicks}</td>
              <td className="px-4 py-2">{game.points}</td>
              <td className="px-4 py-2">{game.duration ?? 'N/D'}</td>
              <td className="px-4 py-2">{new Date(game.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <main className="relative min-h-screen p-6">
      <img
        src="https://cdn-s-www.bienpublic.com/images/5c8da221-a31c-425d-9f52-b92c52f46fbb/BES_06/illustration-tournoi-super-smash-bros-ultimate_1-1724330005.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover brightness-50 -z-10"
      />

      <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-600">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md">
          Panel de Partidas
        </h1>

        <h2 className="text-2xl font-bold text-gray-100 mb-2">Tus Partidas</h2>
        {propiosGames.length === 0 ? (
          <p className="text-gray-300 mb-6">No tienes partidas propias aún.</p>
        ) : (
          renderTablaPropia()
        )}

        <h2 className="text-2xl font-bold text-gray-100 mb-2">Todas las partidas</h2>
        {todosGames.length === 0 ? (
          <p className="text-gray-300 mb-6">No hay partidas registradas.</p>
        ) : (
          renderTabla(todosGames, 'all')
        )}
      </div>
    </main>
  )
}
