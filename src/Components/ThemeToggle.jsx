import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(theme === "light" ? "dark" : "light");

    return (
        <button
            onClick={toggleTheme}
            className="
        relative w-10 h-10 rounded-full
        bg-background/70 dark:bg-background/60
        backdrop-blur-md
        border
        flex items-center justify-center
        transition-all duration-300
        hover:border-foreground/40
        active:scale-95
      "
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Moon className="w-6 h-6 text-foreground" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: 45, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -45, scale: 0.6 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Sun className="w-6 h-6 text-foreground" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
