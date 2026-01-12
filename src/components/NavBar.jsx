import { useState } from "react"

export default function NavBar() {
    return (
        <nav className="flex h-12 px-20 py-2 bg-blue-500">
            <div className="flex grow items-center text-white">
                <div className=" p-1 mx-1 font-[cursive] text-2xl">StudyRoadmap</div>
                <div className=" p-1 mx-1 rounded-xl hover:bg-white hover:text-black hover:cursor-default">Explore</div>
                <div className=" p-1 mx-1 hover:bg-white hover:text-black rounded-xl hover:cursor-pointer">My Learning</div>
            </div>
            <div className="flex grow items-center justify-center text-white">
                <input className='p-1 mx-1 rounded-xl w-6/10 bg-white text-black' type="text" name="" id="" placeholder="Search for course"/>
                <button className="border p-1 mx-1 rounded-xl hover:bg-white hover:text-black hover:cursor-pointer" type="button">Search</button>
            </div>
            <div className="flex grow items-center justify-end text-white">
                <div className=" p-1 mx-1 rounded-xl hover:bg-white hover:text-black hover:cursor-pointer">Apperance</div>
                <div className="border mx-1 rounded-full w-8 h-8 p-1 text-center ">J</div>
            </div>
        </nav>
    )
}