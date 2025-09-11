import { useEffect, useState } from "react"
import { getMembers } from "../api/api"
import { Loader2 } from "lucide-react"

const Member = () => {
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const res = await getMembers()
            if (res.status === 200) {
                setMembers(res.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
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
            {members.length === 0 ? (
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <p>No Members Available!</p>
                </div>
            ) : (
                <div className="w-full max-w-5xl overflow-x-auto">
                    <table className="w-full border border-purple-500 shadow-2xl text-left">
                        <thead className="bg-purple-600 text-white">
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-purple-100/30 transition-colors"
                                >
                                    <td className="px-4 py-2">{member.name}</td>
                                    <td className="px-4 py-2">{member.phone}</td>
                                    <td className="px-4 py-2">{member.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Member