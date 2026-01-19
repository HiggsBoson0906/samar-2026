import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../../globalStyles.css';
import samarLogo from '/favicon.png';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const smoothScrollTo = (element, duration = 500) => {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth acceleration/deceleration
            const ease = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;
            
            window.scrollTo(0, startPosition + distance * ease);

            if (elapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const handleAboutScroll = () => {
        setIsMenuOpen(false); // Close mobile menu if open
        
        if (location.pathname !== '/') {
            // If not on home page, navigate first then scroll
            navigate('/');
            // Use setTimeout to allow navigation to complete
            setTimeout(() => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    smoothScrollTo(aboutSection, 500);
                }
            }, 100);
        } else {
            // Already on home page, just scroll
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                smoothScrollTo(aboutSection, 500);
            }
        }
    };

    return (
        <header className='fixed top-0 w-screen h-[80px] px-6 md:px-28 bg-slate-800 bg-opacity-30 backdrop-blur-xl transition-all duration-300 flex flex-row justify-between items-center border-b border-white border-opacity-50 z-50'>
            {/* Logo and Title */}
            <div className='flex flex-row justify-start items-center gap-6'>
                <img src={samarLogo} alt="Samar Logo" width="60px" height="60px" />
                <h1 className='text-lg text-white'>|</h1>
                <NavLink className='font-vermin text-3xl text-white cursor-pointer' to="/">SAMAR</NavLink>
            </div>

            {/* Hamburger Button */}
            <button
                className='xl:hidden flex flex-col justify-center items-center gap-1 focus:outline-none'
                onClick={toggleMenu}
            >
                <div className='w-6 h-0.5 bg-white'></div>
                <div className='w-6 h-0.5 bg-white'></div>
                <div className='w-6 h-0.5 bg-white'></div>
            </button>

            {/* Navigation Menu */}
            <div
                className={`absolute top-[80px] left-0 w-full bg-slate-800 bg-opacity-90 xl:bg-transparent xl:static xl:flex xl:items-center xl:w-auto transition-transform duration-300 ${
                    isMenuOpen ? 'flex flex-col items-center' : 'hidden xl:flex'
                }`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-audiowide text-sm tracking-widest ${
                            isActive ? 'text-[#8CCCFF]' : 'text-white'
                        }`
                    }
                >
                    HOME
                </NavLink>

                <button
                    onClick={handleAboutScroll}
                    className="px-8 py-3 hover:text-rose-400 font-audiowide text-sm tracking-widest text-white cursor-pointer"
                >
                    ABOUT
                </button>

                <NavLink
                    to="/merchandise"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-audiowide text-sm tracking-widest ${
                            isActive ? 'text-[#8CCCFF]' : 'text-white'
                        }`
                    }
                >
                    MERCHANDISE
                </NavLink>
                <NavLink
                    to="/team"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-audiowide text-sm tracking-widest ${
                            isActive ? 'text-[#8CCCFF]' : 'text-white'
                        }`
                    }

                >
                    TEAM
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-audiowide text-sm tracking-widest ${
                            isActive ? 'text-[#8CCCFF]' : 'text-white'
                        }`
                    }

                >
                    CONTACT US
                </NavLink>
            </div>

<a
  href="/samar_brochure.pdf"
  download
  className="hidden md:block border-2 px-8 py-3 
             border-[#8CCCFF] text-[#8CCCFF] 
             italic font-audiowide 
             rounded-tl-3xl rounded-br-3xl
             backdrop-blur-lg
             hover:bg-[#8CCCFF] hover:text-black
             hover:rounded-lg hover:scale-[.97]
             transition-all ease-in-out duration-75"

>
  BROCHURE
</a>

        </header>
    );
}

export default Header;
