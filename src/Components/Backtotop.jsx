import React from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll"; // <-- import Link from react-scroll

const Backtotop = () => {
  return (
    <div>
      <Link
        key="home"
        to="home"
        smooth={true}
        duration={600}
        offset={-80} // Adjust offset to match navbar height
        className="btn"
      >

        <ArrowUp size={20} />
      </Link>

    </div >
  );
};

export default Backtotop;
