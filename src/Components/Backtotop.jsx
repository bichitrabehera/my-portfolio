import React from "react";
import { ArrowUp } from "lucide-react";

const Backtotop = () => {
  return (
    <div>
      <a
        href="#home"
        className="fixed right-4 bottom-4 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        <ArrowUp size={20} />
      </a>
    </div>
  );
};

export default Backtotop;
