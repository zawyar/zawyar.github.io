import React from 'react'
import { Link } from 'react-router-dom'


const Hero = ({ ...props }) => {


    return (
        <div className=" p-10 relative min-h-full bg-base-100 rounded md:grid-cols-2 md:grid-rows-2 md:grid" {...props}>
            <div className="flex justify-around md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-3xl font-josefin font-bold italic">Hi! Zawyar here.</div>

            <Link to="/about" className="p-8 rounded-full me-1 mb-1 text-primary bg-base-100 flex justify-around hover:bg-red-600 transition-colors" >
            <div className='flex justify-around'>
                    <h1 className='text-4xl font-josefin font-bold italic'>ABOUT</h1>
                </div>
            </Link>
            <Link to="/contact" className="p-8 rounded-full me-1 mb-1 text-primary bg-base-100 flex justify-around hover:bg-blue-600 transition-colors" >
            <div className='flex justify-around'>
                    <h1 className='text-4xl font-josefin font-bold italic'>CONTACT</h1>
                </div>
            </Link>
            <Link to="/work" className="p-8 rounded-full me-1 mb-1 text-primary bg-base-100 flex justify-around hover:bg-purple-600 transition-colors" >
                <div className='flex justify-around mt-auto'>
                    <h1 className='text-4xl font-josefin font-bold italic'>WORK</h1>
                </div>
            </Link>
            <Link to="blog" className="p-8 rounded-full me-1 mb-1 text-primary bg-base-100 flex justify-around hover:bg-yellow-400 transition-colors" >
                <div className='flex justify-around mt-auto'>
                    <h1 className='text-4xl font-josefin font-bold italic'>BLOG</h1>
                </div>
            </Link>
            
        </div>
    )
}

export default Hero