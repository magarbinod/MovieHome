import React from 'react'

const Footer = () => {

// Add Current Year Funtion 
 const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-neutral py-5">
        <div className="container mx-auto w-screen text-center text-white">
          <p>Copyright © {currentYear} - All right reserved by MovieHome</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
