import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className=" bg-black text-white  w-full ">
      <div className="p-8 md:px-[5%] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h1 className="text-lg mb-2">Harinagar Sugar Mills Ltd.</h1>
          <p>
            P.O- HARINGAR, DIST. WEST CHAMPARAN, Bettiah - 845103, Bihar, India.
          </p>
          <p className="mt-2">Phone: +91 6256224223</p>
          <p>Email: harinagarsugar@gmail.com</p>
          <div className="flex gap-1">
<a href="#"><FacebookIcon/></a>
<a href="#"><LinkedInIcon/></a>
<a href="#"> <TwitterIcon/></a>
          </div>
          
          
         
        </div>
        <div>
          <h1 className="text-lg mb-2">Useful Links</h1>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Sugar</li>
            <li>Compliance</li>
            <li>Distillery</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg mb-2">Useful Links</h1>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Sugar</li>
            <li>Compliance</li>
            <li>Distillery</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg mb-2">Useful Links</h1>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Sugar</li>
            <li>Compliance</li>
            <li>Distillery</li>
          </ul>
        </div>


      </div>
      <div className="py-2">
      <p className="text-center">© 2024 Copyright Harinagar Sugar Mills Ltd. All Rights Reserved</p>
      <p className="text-center">Designed by <a href="https://www.intenext.in/" target="_blank">Intenext Solutions Pvt. Ltd.</a></p>
      </div> </div>
  );
}

export default Footer;
