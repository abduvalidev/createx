import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const bgColor = location.pathname === '/' ? 'bg-white' : 'bg-red-50';

  return (
    <header className={`w-full sticky top-0 z-40 ${bgColor} shadow py-5`}>
      <nav className='max-w-7xl mx-auto flex items-center justify-between gap-x-8 px-4 lg:px-6'>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className='hidden lg:flex items-center gap-x-10 font-bold'>
          <Link className='text-gray-800 transition duration-300 hover:text-primary' to="/about">About</Link>
          <Link className='text-gray-800 transition duration-300 hover:text-primary' to="/services">Services</Link>
          <Link className='text-gray-800 transition duration-300 hover:text-primary' to="/Work">Work</Link>
          <Link className='text-gray-800 transition duration-300 hover:text-primary' to="/News">News</Link>
          <Link className='text-gray-800 transition duration-300 hover:text-primary' to="/contact">Contact</Link>
        </div>
        <div className='flex items-center gap-x-5 lg:gap-x-9'>
          <a href='tel:+14055550128' className='flex items-center gap-x-3'>
            <svg className='w-6 h-7 md:h-9' viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M6.16634 3.86947C4.78563 3.86947 3.66634 4.98875 3.66634 6.36947V31.6299C3.66634 33.0106 4.78563 34.1299 6.16634 34.1299H17.833C19.2137 34.1299 20.333 33.0106 20.333 31.6299V6.36947C20.333 4.98875 19.2137 3.86947 17.833 3.86947H17.694L17.2881 4.84355C17.0293 5.46458 16.4225 5.86909 15.7497 5.86909H8.24968C7.57688 5.86909 6.97006 5.46458 6.71126 4.84355L6.30531 3.86947H6.16634ZM0.333008 6.36947C0.333008 3.1478 2.94468 0.536133 6.16634 0.536133H17.833C21.0547 0.536133 23.6663 3.1478 23.6663 6.36947V31.6299C23.6663 34.8515 21.0547 37.4632 17.833 37.4632H6.16634C2.94468 37.4632 0.333008 34.8515 0.333008 31.6299V6.36947Z" 
                fill="#FF5A30"
              />
            </svg>

            <div className='hidden md:block'>
              <p className='font-bold text-gray-800 text-sm'>Call us</p>
              <p className='text-gray-900'>(405) 555-0128</p>
            </div>
          </a>
          <a href='https://mail.google.com/' className='flex items-center gap-x-3'>
          <svg className='w-7 h-7 md:w-10 md:h-10' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M36.5387 17.6113C36.3013 19.2559 35.7387 20.8189 34.905 22.2563C34.9675 22.6121 34.9996 22.9719 34.9996 23.3331C34.9996 24.5878 34.636 25.7886 33.9626 26.8796C33.6264 27.4242 33.5399 28.0623 33.5067 28.4839C33.4685 28.9671 33.4814 29.4958 33.5159 30.0037C33.5546 30.5735 33.6246 31.1717 33.7048 31.736C33.0543 31.5463 32.3492 31.3558 31.6763 31.204C31.1166 31.0777 30.5439 30.9701 30.0252 30.9165C29.5727 30.8698 28.9188 30.8336 28.3341 31.0226C27.0556 31.4359 25.6488 31.6665 24.1662 31.6665C22.403 31.6665 20.7837 31.3535 19.3643 30.8098C19.0229 30.8253 18.679 30.8331 18.3328 30.8331C16.3252 30.8331 14.3929 30.5691 12.585 30.0811C15.2132 33.1209 19.546 34.9998 24.1662 34.9998C25.9711 34.9998 27.7034 34.7227 29.2999 34.2135C29.3027 34.2136 29.3078 34.2135 29.3153 34.2133C29.3563 34.2125 29.4701 34.2103 29.6827 34.2322C30.017 34.2667 30.4469 34.3438 30.9428 34.4556C31.9301 34.6783 33.0395 35.007 33.9041 35.2814C35.7377 35.8635 37.5143 34.2634 37.1866 32.4027C37.0456 31.6019 36.899 30.6245 36.8415 29.7778C36.8126 29.3521 36.8094 29.0026 36.8297 28.7462C36.8381 28.6399 36.8488 28.5733 36.8556 28.5379C37.7933 26.9846 38.3329 25.216 38.3329 23.3331C38.3329 21.2105 37.6736 19.2723 36.5387 17.6113Z" 
              fill="#FF5A30"
            />
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M9.32773 9.49661C7.08113 11.2146 5.83266 13.4698 5.83266 15.833C5.83266 17.0114 6.13943 18.1463 6.71496 19.2017C6.93417 19.6037 6.99636 20.0183 7.0186 20.299C7.04285 20.6051 7.03076 20.9197 7.00414 21.2139C6.95085 21.8028 6.82372 22.4701 6.67124 23.1274C6.49287 23.8962 6.26431 24.7162 6.03239 25.486C6.91281 25.166 7.87508 24.8381 8.78733 24.5719C9.52461 24.3568 10.2692 24.1702 10.9318 24.0654C11.5027 23.9751 12.3311 23.8864 13.0443 24.1332C14.6448 24.6869 16.4353 24.9997 18.3327 24.9997C21.9113 24.9997 25.0895 23.8886 27.3376 22.1694C29.5842 20.4514 30.8327 18.1962 30.8327 15.833C30.8327 13.4698 29.5842 11.2146 27.3376 9.49661C25.0895 7.77745 21.9113 6.66634 18.3327 6.66634C14.754 6.66634 11.5759 7.77745 9.32773 9.49661ZM7.30289 6.84875C10.1821 4.64702 14.0872 3.33301 18.3327 3.33301C22.5781 3.33301 26.4832 4.64702 29.3624 6.84875C32.2431 9.05167 34.166 12.2131 34.166 15.833C34.166 19.4529 32.2431 22.6143 29.3624 24.8173C26.4832 27.019 22.5781 28.333 18.3327 28.333C16.0942 28.333 13.9561 27.9681 12.0148 27.3041C12.0128 27.3095 11.8554 27.2941 11.4524 27.3578C10.988 27.4313 10.3952 27.5751 9.72089 27.7719C8.37845 28.1635 6.87087 28.7176 5.72255 29.1645C3.73317 29.9387 1.70658 28.0281 2.37685 25.9929C2.7321 24.9142 3.15108 23.5511 3.42414 22.3741C3.5617 21.7812 3.65096 21.2827 3.68437 20.9135C3.69596 20.7853 3.69896 20.6919 3.69829 20.6288C2.93115 19.1629 2.49932 17.5417 2.49932 15.833C2.49932 12.2131 4.42216 9.05167 7.30289 6.84875ZM3.6928 20.5379C3.69296 20.5377 3.69377 20.5422 3.69475 20.5518C3.69313 20.5429 3.69264 20.5381 3.6928 20.5379Z" 
              fill="#FF5A30"
            />
          </svg>

            <div className='hidden md:block'>
              <p className='font-bold text-gray-800 text-sm'>Call us</p>
              <p className='text-gray-900'>(405) 555-0128</p>
            </div>
          </a>
          <button onClick={toggleMenu} className="block lg:hidden text-gray-800 focus:outline-none">
          <svg className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>

          <svg className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18l12-12M6 6l12 12" />
          </svg>

          </button>
        </div>
      </nav>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-4 pt-4 pb-3 space-y-1 sm:px-3">
          <Link className='block text-gray-800 transition duration-300 hover:text-primary' to="/about">About</Link>
          <Link className='block text-gray-800 transition duration-300 hover:text-primary' to="/services">Services</Link>
          <Link className='block text-gray-800 transition duration-300 hover:text-primary' to="/work">Work</Link>
          <Link className='block text-gray-800 transition duration-300 hover:text-primary' to="/news">News</Link>
          <Link className='block text-gray-800 transition duration-300 hover:text-primary' to="/contact">Contact</Link>
        </div>
        </div>
    </header>
  );
}
