"use client";
import React, { useEffect, useState } from "react";


type GameRecord = {
    id: number;
    user_id: number;
    user_name: string; // You may need to join with users table in your API
    created_at: string;
    points: number;
    clicks: number;
    duration: number | null;
};

async function fetchGames(): Promise<GameRecord[]> {
    const token = localStorage.getItem("token");
    const res = await fetch("https://cuddly-space-cod-pjpjp9prp5q3rxxr-8000.app.github.dev/api/games", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
}

async function deleteGame(id: number) {
    const token = localStorage.getItem("token");
    await fetch(`https://cuddly-space-cod-pjpjp9prp5q3rxxr-8000.app.github.dev/api/games/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export default function GamesPage() {
    const [games, setGames] = useState<GameRecord[]>([]);
    const [user, setUser] = useState<{ id: number; name: string } | null>(null);

    useEffect(() => {
        // Replace with real auth logic
        setUser({ id: 4, name: "Joan" });
    }, []);

    useEffect(() => {
        fetchGames().then((data) => {
            if (Array.isArray(data)) {
                setGames(data);
            } else {
                setGames([]);
            }
        });
    }, []);

    const handleDelete = async (id: number) => {
        await deleteGame(id);
        setGames(await fetchGames());
    };

    const myGames = games.filter((g) => g.user_id === user?.id);
    const generalGames = [...games].sort((a, b) => b.points - a.points);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Les meves partides</h1>
            <table className="w-full mb-8 border">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Puntuació</th>
                        <th>Clics</th>
                        <th>Durada</th>
                        <th>Accions</th>
                    </tr>
                </thead>
                <tbody>
                    {myGames.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center">
                                No tens cap partida guardada.
                            </td>
                        </tr>
                    )}
                    {myGames.map((g) => {
                        const d = new Date(g.created_at);
                        return (
                            <tr key={g.id}>
                                <td>{d.toLocaleString()}</td>
                                <td>{g.points}</td>
                                <td>{g.clicks}</td>
                                <td>{g.duration ?? "-"}</td>
                                <td>
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleDelete(g.id)}
                                    >
                                        Elimina
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <h2 className="text-xl font-bold mb-2">Rànquing general</h2>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th>Usuari</th>
                        <th>Data</th>
                        <th>Puntuació</th>
                        <th>Clics</th>
                        <th>Durada</th>
                    </tr>
                </thead>
                <tbody>
                    {generalGames.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center">
                                Encara no hi ha partides.
                            </td>
                        </tr>
                    )}
                    {generalGames.map((g) => {
                        const d = new Date(g.created_at);
                        return (
                            <tr key={g.id}>
                                <td>{g.user_name ?? g.user_id}</td>
                                <td>{d.toLocaleString()}</td>
                                <td>{g.points}</td>
                                <td>{g.clicks}</td>
                                <td>{g.duration ?? "-"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
