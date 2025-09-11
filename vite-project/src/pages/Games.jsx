import { useEffect, useState } from "react"
import { deleteGame, getGames } from "../api/api"
import { Loader2, Pencil, Trash } from "lucide-react"
import { toast } from "sonner"
import { redirect, useNavigate } from "react-router-dom"

const Games = () => {
    const navigate = useNavigate()
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const res = await getGames()
            if (res.status === 200) {
                setGames(res.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (id) => {
        // console.log("Edit clicked:", id)
        navigate(`/editgame/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            const res = await deleteGame(id)
            if (res.status === 200) {
                toast.success("Game Deleted !")
            }
        } catch (error) {
            console.log(error)
        } finally {
            fetchData()
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="h-[90vh] w-full flex justify-center items-center">
                <Loader2 className="animate-spin" />
            </div>
        )
    }

    return (
        <div className="h-[90vh] w-full flex justify-center items-start p-6">
            {games.length === 0 ? (
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <p>No Games Available!</p>
                </div>
            ) : (
                <div className="w-full max-w-5xl overflow-x-auto">
                    <table className="w-full border border-purple-500 shadow-2xl text-left">
                        <thead className="bg-purple-600 text-white">
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-purple-100/30 transition-colors"
                                >
                                    <td className="px-4 py-2">{game.name}</td>
                                    <td className="px-4 py-2">{game.price}</td>
                                    <td className="px-4 py-2">{game.description}</td>
                                    <td className="px-4 py-2 space-x-2">
                                        <button
                                            onClick={() => handleEdit(game.id)}
                                            className=" bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2"
                                        >
                                            <Pencil />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(game.id)}
                                            className="bg-red-500 text-white rounded-md hover:bg-red-600  p-2"
                                        >
                                            <Trash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Games