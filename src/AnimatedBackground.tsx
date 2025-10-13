import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function AnimatedBackground() {
    const linesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        gsap.fromTo(
            linesRef.current,
            { opacity: 0, scaleY: 0 },
            {
                opacity: 1,
                scaleY: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );
    });

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Garis Vertikal */}
            {[...Array(4)].map((_, i) => (
                <div
                    key={`v-${i}`}
                    ref={(el) => {
                        if (el) linesRef.current[i] = el;
                    }}
                    className="absolute top-0 bottom-0 w-[1px] bg-[#C0C0C0]/50"
                    style={{
                        left: `${20 + i * 20}%`,
                        transformOrigin: "top",
                    }}
                ></div>
            ))}

            {/* Garis Horizontal */}
            {[...Array(2)].map((_, i) => (
                <div
                    key={`h-${i}`}
                    ref={(el) => {
                        if (el) linesRef.current[4 + i] = el;
                    }}
                    className="absolute left-0 right-0 h-[1px] bg-[#C0C0C0]/50"
                    style={{
                        top: `${30 + i * 30}%`,
                        transformOrigin: "left",
                    }}
                ></div>
            ))}
        </div>
    );
}