import React, { useState, useRef, useEffect } from 'react';

const MuteButton = () => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    // Start audio on FIRST mouse movement
    useEffect(() => {
        const startAudioOnMove = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.muted = false;

                audioRef.current.play()
                    .then(() => {
                        window.removeEventListener('mousemove', startAudioOnMove);
                    })
                    .catch(() => {
                        // Browser still waiting for a stronger gesture
                    });
            }
        };

        window.addEventListener('mousemove', startAudioOnMove, { once: true });

        return () => {
            window.removeEventListener('mousemove', startAudioOnMove);
        };
    }, []);

    const toggleMute = () => {
        if (!audioRef.current) return;

        const nextMutedState = !isMuted;
        audioRef.current.muted = nextMutedState;
        setIsMuted(nextMutedState);
    };

    const neonCyan = '#00f3ff';

    return (
        <>
            <audio
                ref={audioRef}
                src="/theme.mp3"
                loop
                preload="auto"
                muted
            />

            <button
                onClick={toggleMute}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(11, 13, 23, 0.85)',
                    color: isMuted ? 'rgba(0,243,255,0.4)' : neonCyan,
                    border: `1.5px solid ${neonCyan}`,
                    cursor: 'pointer',
                    fontSize: '24px',
                    boxShadow: isMuted
                        ? '0 0 5px rgba(0,243,255,0.1)'
                        : '0 0 20px rgba(0,243,255,0.5)',
                    zIndex: 1000,
                    transition: 'all 0.3s ease'
                }}
            >
                {isMuted ? '🔇' : '🔊'}

                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: isMuted ? 'rgba(0,243,255,0.4)' : neonCyan,
                    boxShadow: isMuted ? 'none' : `0 0 8px ${neonCyan}`,
                }} />
            </button>
        </>
    );
};

export default MuteButton;
