import React, { useState } from 'react';
import './MerchStage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MerchStage = ({ image, imageType = 'triple', onNext, onPrev }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
        if (e) e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    const cropClass = imageType === 'triple' ? 'triple-view' : 'double-view';

    return (
        <div className="flex flex-row items-center justify-center w-full relative">
            
            {/* LEFT ARROW (Desktop) */}
            <div className="hidden md:flex mr-4 z-[999]" style={{ pointerEvents: 'auto' }}>
                <button className="holo-arrow-box arrow-left-box" onClick={onPrev}>
                    <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
                </button>
            </div>

            {/* MAIN STAGE */}
            <div className={`stage-wrapper ${cropClass}`}>
                <div className="neon-sign">SAMAR 2026 MERCH</div>
                <div className="holo-grid"></div>
                <div className="spotlight spotlight-left"></div>
                <div className="spotlight spotlight-right"></div>

                {/* Floating Shirt */}
                <div className="shirt-card-container" onClick={handleFlip}>
                    <div className="shirt-floater">
                        <div className={`shirt-card ${isFlipped ? 'flipped' : ''}`}>
                            <div className="shirt-face shirt-front">
                                <img src={image} alt="Front" className="merch-img" />
                            </div>
                            <div className="shirt-face shirt-back">
                                <img src={image} alt="Back" className="merch-img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="pedestal-container">
                    <div className="pedestal-base"></div>
                    <div className="pedestal-top"></div>
                </div> */}

                <div className="flip-btn-container">
                     <button className="flip-btn" onClick={handleFlip}>
                        <FontAwesomeIcon icon={faRotate} className={isFlipped ? 'animate-spin' : ''} />
                        <span>{isFlipped ? "FLIP TO FRONT" : "FLIP TO BACK"}</span>
                    </button>
                </div>
            </div>

            {/* RIGHT ARROW (Desktop) */}
            <div className="hidden md:flex ml-4 z-[999]" style={{ pointerEvents: 'auto' }}>
                <button className="holo-arrow-box arrow-right-box" onClick={onNext}>
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                </button>
            </div>

            {/* Mobile Arrows */}
            <button className="md:hidden absolute left-2 z-[999] p-4 text-white text-3xl opacity-80" onClick={onPrev} style={{ pointerEvents: 'auto' }}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="md:hidden absolute right-2 z-[999] p-4 text-white text-3xl opacity-80" onClick={onNext} style={{ pointerEvents: 'auto' }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default MerchStage;