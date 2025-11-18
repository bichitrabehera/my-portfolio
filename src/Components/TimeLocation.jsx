import React, { useEffect, useState } from "react";

export default function TimeLocation() {
    const [time, setTime] = useState("");
    const location = "Bangalore, India";

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(formatted);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center gap-3 py-5 text-gray-400 font-mono text-lg md:text-xl sm:text-base">
            <span>{time}</span>
            <span className="opacity-40">•</span>
            <span>{location}</span>
        </div>
    );
}
