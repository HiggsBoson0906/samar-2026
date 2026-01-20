import { useEffect, useRef, useState } from "react";
import staticShip from "../assets/cursor/static.png";
import thrusterShip from "../assets/cursor/moving.gif";

const STATIC_SIZE = 65;
const MOVING_SIZE = 47;

export default function Spaceship({ enabled = true }) {
    const cursorRef = useRef(null);

    const [moving, setMoving] = useState(false);
    const [hovering, setHovering] = useState(false);

    const stopTimeout = useRef(null);
    useEffect(() => {
        if (enabled) {
            document.body.classList.add("cursor-hidden");
        } else {
            document.body.classList.remove("cursor-hidden");
        }

        return () => {
            document.body.classList.add("cursor-hidden");
        };
    }, [enabled]);
    if (!enabled) {
        return null;
    }

    useEffect(() => {
        const handleMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }

            setMoving(true);
            clearTimeout(stopTimeout.current);

            stopTimeout.current = setTimeout(() => {
                setMoving(false);
            }, 120);
        };

        const handleOver = (e) => {
            const el = e.target;
            if (
                el.closest("a, button, [role='button'], [data-cursor]")
            ) {
                setHovering(true);
            }
        };

        const handleOut = (e) => {
            const el = e.target;
            if (
                el.closest("a, button, [role='button'], [data-cursor]")
            ) {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseover", handleOver);
        window.addEventListener("mouseout", handleOut);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mouseout", handleOut);
        };
    }, []);

    const active = moving || hovering;

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: Math.max(STATIC_SIZE, MOVING_SIZE),
                height: Math.max(STATIC_SIZE, MOVING_SIZE),
                transform: "translate(-35%, -29%)",
                pointerEvents: "none",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                src={active ? thrusterShip : staticShip}
                alt="spaceship cursor"
                style={{
                    width: active ? MOVING_SIZE : STATIC_SIZE - 15,
                    height: active ? MOVING_SIZE : STATIC_SIZE,
                }}
            />
        </div>
    );
}