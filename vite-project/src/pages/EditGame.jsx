import { useEffect, useState } from "react"
import { getGamebyID, editGame } from "../api/api"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

const EditGame = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [gameData, setGameData] = useState({
    name: "",
    price: "",
    description: ""
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getGamebyID(id)
        if (response.status === 200) {
          setGameData(response.data)
        }
      } catch (error) {
        console.error("Error fetching game:", error)
        toast.error("Failed to fetch game data")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setGameData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await editGame(gameData, id) 
      if (response.status === 200) {
        toast.success("Game updated successfully!")
        navigate("/")
      }
    } catch (error) {
      toast.error("Error while updating game")
      console.error(error)
    }
  }

  if (loading) {
    return (
      <div className="h-[90vh] w-full flex justify-center items-center">
        <p className="text-purple-500 font-semibold">Loading...</p>
      </div>
    )
  }

  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="h-[40vh] w-[30vw] flex flex-col justify-center items-center shadow-2xl rounded bg-[#f5f5f7]">
        <div className="h-[20%] flex justify-center items-center text-2xl font-bold text-purple-500">
          Edit Game
        </div>
        <form
          className="h-[80%] w-[90%] flex flex-col gap-3"
          onSubmit={handleEdit}
        >
          <input
            value={gameData.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter game name"
            className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500"
            autoComplete="off"
          />
          <input
            value={gameData.price}
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Enter price"
            className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500"
            autoComplete="off"
          />
          <input
            value={gameData.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Enter description"
            className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500"
            autoComplete="off"
          />
          <button
            type="submit"
            className="w-full h-12 bg-purple-600 text-white font-semibold rounded cursor-pointer hover:bg-purple-600/90"
          >
            Update Game
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditGame