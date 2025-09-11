import { useRef } from "react"
import { addGame } from "../api/api"
import { redirect, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const AddGame = () => {
    const nameRef = useRef('')
    const priceRef = useRef(0)
    const descriptionRef = useRef('')
    const navigate = useNavigate()

    const handleAdd = async (e) => {
        e.preventDefault()
        const game = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value
        }
        try {
            const response = await addGame(game)
            if (response.status === 200) {
                navigate('/')
                toast.success('Game Added !')
            }

        } catch (error) {
            toast.error("Error while Adding")
            console.error(error)
        }

    }
    return (
        <>
            <div className="h-[90vh] w-full flex justify-center items-center">

                <div className="h-[35vh] w-[30vw] flex flex-col justify-center items-center  shadow-2xl rounded rouded-sm bg-[#f5f5f7]">
                    <div className="h-[20%] flex justify-center items-center text-2xl font-bold text-purple-500">
                        Add Game
                    </div>
                    <form className="h-[80%] w-[90%] flex flex-col gap-3" onSubmit={handleAdd}>
                        <input ref={nameRef} type="text" name="gamename" id="gamename" placeholder="Game Name" className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500" autoComplete="off" />
                        <input ref={priceRef} type="number" name="price" id="price" placeholder="Price" className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500" autoComplete="off" />
                        <input ref={descriptionRef} type="text" name="description" id="description" placeholder="Description" className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500" autoComplete="off" />
                        <button type="submit" className="w-full h-12 bg-purple-600 text-white font-semibold rounded cursor-pointer hover:bg-purple-600/90">Add Game</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddGame