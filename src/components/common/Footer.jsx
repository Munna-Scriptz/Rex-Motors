import React from 'react'
import { Link } from 'react-router'
import Logo from '../../assets/logoWhite2.png'
import paymentIcon from '../../assets/paymenFooter.svg'
import qrCode from '../../assets/qrCode.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FiPhoneCall } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go'

const Footer = () => {
    return (
        <footer className='mt-20 lg:mt-[120px] bg-brand z-10 relative overflow-hidden'>
            <div className='container relative'>
                {/* ----------------Footer Header---------------- */}
                <div className='pt-15 flex flex-wrap items-center md:justify-between justify-center gap-y-5 md:mb-0 mb-10'>
                    <Link to={'/'} data-aos="fade-up">
                        <img className='w-[220px]' src={Logo} alt="Logo" />
                    </Link>

                    <div className='bg-white h-[62px] rounded-[6px] md:w-[400px] w-full relative' data-aos="fade-up">
                        <GoMail className='absolute top-1/2 -translate-y-1/2 left-4 text-[#9CA3AF] text-xl pointer-events-none' />
                        <input className='w-full h-full pl-12 outline-none' type="email" placeholder='Enter your email'/>
                        <button className='bg-brand py-2.5 px-5 absolute right-3 cursor-pointer top-2.5 text-white font-bold rounded-[8px]'>SEND</button>
                        <p className='text-white opacity-75 text-xs mt-2' data-aos="fade-up">By subscribing you agree to our Terms & Conditions and Privacy Policy.</p>
                    </div>
                </div>

                <div id="FooterRow" className='flex items-start flex-wrap justify-between gap-4 py-12 lg:py-[65px] md:mb-0'>
                    {/* ----------------Column 1---------------- */}
                    <div className='md:mb-0 mb-7 md:w-[200px] w-full'>
                        <h2 className='text-white text-lg font-semibold' data-aos="fade-up">Do You Need Help ?</h2>
                        <p className='text-sm md:text-base lg:text-sm max-w-xs md:mt-4 mt-2 text-[#ffffffc0]' data-aos="fade-up">
                            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.
                        </p>
                        {/* --------------- Buttons  */}
                        <div className='md:w-[200px] w-full flex items-center gap-3 bg-white px-2 py-2 rounded-[10px] mt-10' data-aos="fade-up">
                            <div className='text-lg bg-brand w-[32px] h-[32px] text-white rounded-full flex items-center justify-center' >
                                <FiPhoneCall />
                            </div>
                            <h2 className='flex flex-col text-[#0120698c] text-xs leading-[13px]'>Monday-Friday <span className='text-brand font-bold text-lg'>0 800 300-353</span></h2>
                        </div>
                        <div className='md:w-[200px] w-full flex items-center gap-3 bg-white px-2 py-2 rounded-[10px] mt-5' data-aos="fade-up">
                            <div className='text-lg bg-brand w-[32px] h-[32px] text-white rounded-full flex items-center justify-center'>
                                <IoMailOutline />
                            </div>
                            <h2 className='flex flex-col text-[#0120698c] text-xs leading-[13px]'>Need help ?<span className='text-brand font-bold text-lg'>munnascriptz</span></h2>
                        </div>
                    </div>

                    {/* ----------------Column 2---------------- */}
                    <div>
                        <h2 className='font-bold text-lg lg:text-[21px] text-white mb-5 lg:mb-[26px]' data-aos="fade-up">Help</h2>
                        <div className='flex flex-col gap-3 lg:gap-[16px]'>
                            {["Buying Guides", "Selling Guides", "Shipping", "Get an estimate"].map((item, i) => (
                                <div key={i} className='text-white text-sm lg:text-base flex items-center gap-3' data-aos="fade-up">
                                    <FaArrowRight className='shrink-0' />
                                    <Link to={'/'}>{item}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ----------------Column 3---------------- */}
                    <div>
                        <h2 className='font-bold text-lg lg:text-[21px] text-white mb-5 lg:mb-[26px]' data-aos="fade-up">Account</h2>
                        <div className='flex flex-col gap-3 lg:gap-[12px]'>
                            {["My Account", "Login / Register", "Cart", "Wishlist", "Private Sales"].map((item, i) => (
                                <div key={i} className='text-white text-sm md:text-base lg:text-[17px] flex items-center gap-3' data-aos="fade-up">
                                    <FaArrowRight className='shrink-0' />
                                    <Link to={'/'}>{item}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ----------------Column 4---------------- */}
                    <div>
                        <h2 className='font-bold text-lg lg:text-[21px] text-white mb-5 lg:mb-[26px]' data-aos="fade-up">Quick Link</h2>
                        <div className='flex flex-col gap-3 lg:gap-[12px]'>
                            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item, i) => (
                                <div key={i} className='text-white text-sm md:text-base lg:text-[17px] flex items-center gap-3' data-aos="fade-up">
                                    <FaArrowRight className='shrink-0' />
                                    <Link to={'/'}>{item}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ----------------Column 5---------------- */}
                    <div>
                        <h2 className='font-bold text-lg lg:text-[21px] text-white' data-aos="fade-up">Download our app</h2>
                        <p className='text-[#ffffff98] md:mt-2 mt-1 lg:mb-[26px] text-sm' data-aos="fade-up">Save $3 with App New User Only</p>
                        <div className='flex items-center gap-2 md:mt-0 mt-7'>
                            <div className='flex flex-col gap-3 w-full' data-aos="fade-up">
                                <Link to={'/'} className="bg-gray-100 flex py-3 px-5 rounded-lg items-center cursor-pointer hover:bg-gray-200 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                    </svg>
                                    <span className="ml-2 flex items-start flex-col leading-none">
                                        <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                        <span className="font-medium">Google Play</span>
                                    </span>
                                </Link>
                                <Link to={'/'} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                    </svg>
                                    <span className="ml-4 flex items-start flex-col leading-none">
                                        <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                        <span className="title-font font-medium">App Store</span>
                                    </span>
                                </Link>
                            </div>
                            <div className='flex items-center flex-col gap-3' data-aos="fade-up">
                                <img className='w-[80px]' src={qrCode} alt="Qr code" />
                                <img className='w-[80px]' src={qrCode} alt="Qr code" />

                            </div>
                        </div>
                        <p className='text-[#ffffffbb] mt-6 md::mb-[20px] mb-3 text-sm' data-aos="fade-up">Follow us on social media:</p>
                        <div className='flex items-center gap-3 lg:gap-[10px] flex-wrap'>
                            <Link to={'/'} className='w-13 h-13 text-2xl text-[#1877F2] rounded-[4px] bg-white flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer' data-aos="fade-up">
                                <FaFacebookF />
                            </Link>
                            <Link to={'/'} className='w-13 h-13 text-2xl text-[#fd3636] rounded-[4px] bg-white flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer' data-aos="fade-up">
                                <IoLogoInstagram />
                            </Link>
                            <Link to={'/'} className='w-13 h-13 text-2xl text-[#1877F2] rounded-[4px] bg-white flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer' data-aos="fade-up">
                                <FaTwitter/>
                            </Link>
                            <Link to={'/'} className='w-13 h-13 text-2xl text-[#db2929] rounded-[4px] bg-white flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer' data-aos="fade-up">
                                <FaPinterestP />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ---------Bottom Section--------- */}
                <div className='border-t border-[#FFFFFF33]'>
                    <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-0 px-0 py-6 lg:py-[30px]">
                        <div>
                            <h2 className='text-white text-sm md:text-base' data-aos="fade-up" data-aos-offset="0">© Copyright 2023 | Developed By <Link className='underline underline-offset-4' to={'https://munna-scriptz.vercel.app/'}>Munna-Scriptz</Link></h2>
                            <h2 className='text-white text-sm md:text-base mt-1 md:mb-0 mb-4' data-aos="fade-up">Figma made By <Link className='underline underline-offset-4' to={''}>Username</Link></h2>
                            <img className='mt-2.5' src={paymentIcon} alt="Payments" data-aos="fade-up" data-aos-offset="0"/>
                        </div>
                        <h2 className='text-white text-[40px] font-bold uppercase tracking-wider' data-aos="fade-up" data-aos-offset="0">REX MOTORS</h2>
                        <div className='text-white text-sm md:text-base flex flex-wrap items-center gap-4 lg:gap-[23px]' data-aos="fade-up" data-aos-offset="0">
                            <Link className='underline underline-offset-4' to={'/'}>Terms & Condition</Link>
                            <Link className='underline underline-offset-4' to={'/'}>Privacy Policy</Link>
                            <Link className='underline underline-offset-4' to={'/'}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                
            {/* ----------------------------- Aura Decorations -------------------------- */}
            <div className='w-[450px] h-[500px] bg-[#935EFF80] rounded-full blur-[130px] absolute top-20 -left-4 -z-10 pointer-events-none'></div>
            <div className='w-[450px] h-[500px] bg-[#935EFF80] rounded-full blur-[140px] absolute top-60 -right-12 -z-10 pointer-events-none'></div>
            </div>


        </footer>
    )
}

export default Footer