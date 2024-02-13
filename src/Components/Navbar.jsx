import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    console.log(nav);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* first part */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30} onClick={()=> setNav(!nav)} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Food <span className='font-bold'>Bazar</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* search input  */}
        <div className='flex items-center bg-gray-200 rounded-full px-2 sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input type="text" placeholder='Search foods' className='bg-transparent p-2 w-full focus:outline-none' />
        </div>
        {/* Cart button  */}
        <button className='bg-black px-6  text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill className='mr-2' size={20} /> Cart
        </button>

    {
        nav ? <div className='bg-black/80 z-10 text-white fixed top-0 left-0 w-full h-screen'></div>:""
    }

    {/* nav sidebar  */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'hidden top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-300'}>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>Food <span className='font-bold'>Bazar</span></h2>
        <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
                <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
                <MdFavorite size={25} className='mr-4' /> Favorites
            </li>
            <li className='text-xl py-4 flex'>
                <FaWallet size={25} className='mr-4' /> Wallet
            </li>
            <li className='text-xl py-4 flex'>
                <MdHelp size={25} className='mr-4' /> Help
            </li>
            <li className='text-xl py-4 flex'>
                <AiFillTag size={25} className='mr-4' /> Promotions
            </li>
            <li className='text-xl py-4 flex'>
                <BsFillSaveFill size={25} className='mr-4' /> Best Ones
            </li>
            <li className='text-xl py-4 flex'>
                <FaUserFriends size={25} className='mr-4' /> Invite Friends
            </li>
        </ul>
    </div>

    </div>
  )
}

export default Navbar