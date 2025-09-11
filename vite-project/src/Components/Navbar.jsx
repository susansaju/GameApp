import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <div className="w-screen h-16 flex justify-center items-center shadow-md shadow-purple-500/30">
                <div className="w-[75%] h-[100%] flex flex-row justify-center items-center">
                    <div className="w-[50%] text-xl text-purple-500 font-bold flex justify-start"> Game Club </div>
                    <div className="w-[50%] h-full flex flex-row justify-end items-center gap-4">
                        <NavLink to='/' className='h-full border-b-4 border-transparent flex justify-center items-center font-semibold'> Games </NavLink>
                        <NavLink to='/membership' className='h-full border-b-4 border-transparent flex justify-center items-center font-semibold'> Membership </NavLink>
                        <NavLink to='/members' className='h-full border-b-4 border-transparent flex justify-center items-center font-semibold'> Members</NavLink>
                        <NavLink to='/addgame' className='h-full border-b-4 border-transparent flex justify-center items-center font-semibold'> Add Game</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar