import { useState, useRef } from 'react';
import { RazorpayButton, RazorpayButton3, RazorpayButton4 } from './payment.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';

import HoverAudio from '../../assets/audio/buttonHoverGTA.mp3';
import MerchStage from './MerchStage';

// Images
import ocImage from '../../assets/merchandise/oc_remove.png';
import hcImage from '../../assets/merchandise/hc_remove.png';
import ccImage from '../../assets/merchandise/cc_remove.png';
import exeImage from '../../assets/merchandise/exe_remove.png';
import SizeChart from '../../assets/sizeChart.jpg';
import CricketBackground from '../../assets/customIllustration/cricketBackground.png';

import '../../../globalStyles.css';

function Merchandise() {
    const [count, setCount] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const hoverAudioRef = useRef(new Audio(HoverAudio));
    
    const playHover = () => {
        if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0;
            hoverAudioRef.current.play().catch(e => console.log(e));
        }
    };

    const increment = () => {
        playHover();
        setCount(count < 4 ? count + 1 : 4);
    };

    const decrement = () => {
        playHover();
        setCount(count > 1 ? count - 1 : 1);
    };

    const buttonMap = {
        1: <RazorpayButton />,
        2: <RazorpayButton />,
        3: <RazorpayButton3 />,
        4: <RazorpayButton4 />,
    };

    const imgarray = {
        1: ocImage,
        2: hcImage,
        3: ccImage,
        4: exeImage,
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            {/* BACKGROUND LAYERS */}
            <img src={CricketBackground} alt="Background" className="fixed top-0 left-0 w-full h-full object-cover z-[-50]" />
            <div className="fixed top-0 left-0 w-full h-full bg-black/10 z-[-40]" />
            <div className="fixed top-0 left-0 w-full h-full z-[-30]" style={{
                background: 'linear-gradient(45deg, rgba(88, 28, 135, 0.4), rgba(0, 0, 0, 0.8))',
                mixBlendMode: 'color-burn',
                pointerEvents: 'none'
            }} />

            {/* MAIN CONTENT - FORCED TO FIT SCREEN (No Scroll) */}
            <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-0">

                <div className="w-full max-w-7xl flex flex-col items-center relative z-10">

                    {/* STAGE */}
                    <MerchStage 
                        image={imgarray[count]} 
                        imageType="triple" 
                        onNext={increment}
                        onPrev={decrement}
                    />

                    {/* DETAILS & PAYMENT SECTION */}
                    {/* Compact layout to fit on screen */}
                    <div className="flex flex-col items-center mt-[-20px] md:mt-[-50px] z-20 w-full px-4" style={{ pointerEvents: 'auto' }}>
                        
                        {/* Size Button */}
                        <button 
                            onMouseEnter={playHover} 
                            className='holo-size-btn flex items-center gap-2 mt-2 z-[100]' 
                            style={{
                                background: 'rgba(0,0,0,0.6)',
                                border: '2px solid #D3EE98',
                                color: '#D3EE98',
                                padding: '8px 25px',
                                borderRadius: '30px',
                                fontFamily: 'speedPixel, sans-serif',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                pointerEvents: 'auto',
                                fontSize: '0.9rem'
                            }}
                            onClick={toggleModal} 
                        >
                            <FontAwesomeIcon icon={faRulerCombined} />
                            GET YOUR RIGHT SIZE
                        </button>

                        {/* Position Name */}
                        <h2 className="text-xl md:text-3xl font-bold font-vermin tracking-widest mt-4 text-[#D3EE98] text-center drop-shadow-[0_0_10px_rgba(211,238,152,0.8)]">
                            {count === 1 ? "OVERALL COORDINATOR" : count === 2 ? "HEAD COORDINATOR" : count === 3 ? "CORE COORDINATOR" : "EXECUTIVES"}
                        </h2>

                        {/* Price */}
                        <div className="total text-lg font-bold mt-2 text-center">
                            <span className="font-speedPixel text-white mr-2">Total Amount: </span>
                            <span className="text-[#D3EE98] font-speedPixel italic text-xl">499/-</span>
                        </div>

                        {/* PAYMENT BUTTON - Ensure visibility */}
                        <div className="merch-btn mt-3 transform scale-100 hover:scale-105 transition-transform duration-300 z-[100] relative">
                            {buttonMap[count]}
                        </div>
                    </div>
                </div>

                {/* MODAL */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex justify-center items-center z-[9999] p-4">
                        <div className="relative flex flex-col items-center animate-fadeIn" style={{ pointerEvents: 'auto' }}>
                            <span 
                                className="absolute top-[-40px] right-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white cursor-pointer border-2 border-white hover:bg-red-700 transition-colors" 
                                onClick={toggleModal}
                            >
                                &times;
                            </span>
                            <img 
                                src={SizeChart} 
                                alt="Size Chart" 
                                className="max-w-full max-h-[80vh] border-2 border-[#D3EE98] rounded-xl shadow-[0_0_40px_rgba(211,238,152,0.3)]" 
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Merchandise;