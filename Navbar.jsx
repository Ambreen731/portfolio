import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex gap-5 items-center  bg-green-200 px-11 py-5 w-full">
     
      <div className="text-black text-4xl font-bold">
        <h1>
          Web<span className="text-green-700">Dev</span>
        </h1>
      </div>

      
      <div className="flex gap-4 pt-4 pl-5 tracking-wider items-center justify-start">
        <Link to="/" className="text-black hover:text-green-700 transition">Home</Link>
        <Link to="/Imagehero" className="text-black hover:text-green-700 transition">Skills</Link>
        <Link to="/Codecofeehero" className="text-black hover:text-green-700 transition">About</Link>
        <Link to="/Webcreationhero" className="text-black hover:text-green-700 transition"> Projects
          
        </Link>
      </div>
    </div>
  );
};

export default Navbar;