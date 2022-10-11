import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from 'react-icons/ri'

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = () => (
  <div className="mt-10">
    {links.map((link, index) => {
      return (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      )
    })}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="md:flex hidden flex-col py-10 bg-[#191624] w-[240px] px-4">
        <img className="h-14 w-full object-contain" src={logo} alt="Img_Logo" />

        <NavLinks />
      </div>

      {/* mobile hambuger */}
      <div className="md:hidden block absolute right-3 top-6">
        {mobileMenuOpen ? (<RiCloseLine onClick={() => setMobileMenuOpen(false)} className="w-6 h-6 text-white" />) : (<HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className="w-6 h-6 text-white" />)}
      </div>

      <div className={`absolute h-screen top-0 w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img className="h-14 w-full object-contain" src={logo} alt="Img_Logo" />
        <NavLinks handleClickOpen={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar;
