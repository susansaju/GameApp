import { useNavigate } from "react-router-dom"
import { addMembers } from "../api/api"
import { useRef } from "react"
import { toast } from "sonner"

const Membership = () => {
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const feeRef = useRef(0)
    const navigate = useNavigate()

    const handleAdd = async (e) => {
        e.preventDefault()
        const member = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            fee: parseInt (feeRef.current.value,10)
        }
        console.log(member)
        try {
            const response = await addMembers(member)
            if (response.status === 200) {
                navigate('/members')
                toast.success('Member Added !')
            }

        } catch (error) {
            toast.error("Error while Adding")
            console.error(error)
        }

    }

    //name
    //phone
    //fee
    return (
        <>
            <div className="h-[90vh] w-full flex justify-center items-center">

                <div className="h-[35vh] w-[30vw] flex flex-col justify-center items-center  shadow-2xl rounded rouded-sm bg-[#f5f5f7]">
                    <div className="h-[20%] flex justify-center items-center text-2xl font-bold text-purple-500">
                        Create Membership
                    </div>
                    <form className="h-[80%] w-[90%] flex flex-col gap-3" onSubmit={handleAdd}>
                        <input type="text" ref={nameRef} name="name" id="name" placeholder="Name" className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500" autoComplete="off" />
                        <input type="text" ref={phoneRef} name="phone" id="phone" placeholder="Phone" className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500" autoComplete="off" />
                        <input type="number" ref={feeRef} name="fee" id="fee" placeholder="Membership Fee" className="w-full h-12 bg-[#fff] border-b-2 border-transparent px-2 rounded focus:outline-0 focus:border-purple-500" autoComplete="off" />
                        <button type="submit" className="w-full h-12 bg-purple-600 text-white font-semibold rounded cursor-pointer hover:bg-purple-600/90">Create Membership</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Membership