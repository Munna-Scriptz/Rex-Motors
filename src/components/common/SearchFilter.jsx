import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { GoSearch } from 'react-icons/go'
import { BsSliders } from 'react-icons/bs'

const SearchFilter = () => {
    return (
        <>
            <section className='absolute bottom-0 left-0 w-full py-3'>
                <div className="container">
                    <div id="SearchFilter-row" className='bg-transparent px-5 py-3 rounded-[12px] shadow-md'>
                        <div className='flex items-center gap-6'>
                            <button className='text-white text-sm font-medium border-b border-white pb-3 cursor-pointer'>All</button>
                            <button className='text-white text-sm font-medium pb-3 cursor-pointer'>New</button>
                            <button className='text-white text-sm font-medium pb-3 cursor-pointer'>Used</button>
                        </div>

                        {/* ----------------- Search Box --------------------- */}
                        <div className='flex lg:flex-nowrap flex-wrap items-center justify-between bg-white mt-4 rounded-[8px]'>
                            <div className='md:w-[210px] w-full p-4 flex flex-col gap-1 cursor-pointer rounded-[12px] hover:bg-gray-200 duration-300'>
                                <p className='text-brand font-semibold '>Select Makes</p>
                                <p className='flex items-center justify-between'>Audi <IoIosArrowDown /></p>
                                
                            </div>
                            <div className='md:w-[210px] w-full p-4 flex flex-col gap-1 cursor-pointer rounded-[12px] hover:bg-gray-200 duration-300'>
                                <p className='text-brand font-semibold '>Select Models</p>
                                <p className='flex items-center justify-between'>Q7 <IoIosArrowDown /></p>
                                
                            </div>
                            <div className='md:w-[210px] w-full p-4 flex flex-col gap-1 cursor-pointer rounded-[12px] hover:bg-gray-200 duration-300'>
                                <p className='text-brand font-semibold '>Year</p>
                                <p className='flex items-center justify-between'>2 - 2025 <IoIosArrowDown /></p>
                                
                            </div>
                            <div className='md:w-[210px] w-full p-4 flex flex-col gap-1 cursor-pointer rounded-[12px] hover:bg-gray-200 duration-300'>
                                <p className='text-brand font-semibold '>Select Price</p>
                                <p className='flex items-center justify-between'>All Prices <IoIosArrowDown /></p>
                                
                            </div>
                            <div className='md:w-[270px] w-full p-4 flex items-center justify-between rounded-[12px] hover:bg-gray-200 duration-300'>
                                <button className='cursor-pointer'>
                                    <BsSliders className='text-2xl' />
                                </button>
                                <button className='bg-brand hover:bg-[#2f74ff] duration-300 rounded-[12px] py-[15px] px-[40px] flex items-center gap-3 text-white cursor-pointer font-medium'>
                                    <div className='w-[34px] h-[34px] bg-white rounded-full text-brand flex items-center justify-center'>
                                        <GoSearch className='text-xl' />
                                    </div>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchFilter