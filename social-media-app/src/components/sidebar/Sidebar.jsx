import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./SideBar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";

const Sidebar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const navigationItems = [
    { name: "Dashboard", icon: <IoHomeOutline />, link: '/' },
    { name: "Scheduler", icon: <AiOutlineSchedule />,  link: '/scheduler' },
    { name: "Accounts", icon: <MdOutlineManageAccounts />,  link: '/accounts' },
  ];
  return (
    <div className="sidebar">
      <div className="desktop-sidebar">
        <div>
            {navigationItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <Link to={item.link} className="links">{item.icon} {item.name}</Link>
            </div>
            ))}
        </div>
        <Link to="/login" className="logout-button">Log Out</Link>
      </div>
      {/* Mobile menu icon */}
      <CiMenuFries onClick={() => setMenu(true)} className="menu-icon" />
      {/* Mobile Sidebar */}
      <div className={`overlay ${isSideMenuOpen ? "overlay-open" : ""}`}>
        <section className="mobile-sidebar">
          {/* Close button & nav links */}
          <div className="sidebar-content">
            <IoClose onClick={() => setMenu(false)} className="close-icon" />
            {navigationItems.map((item, index) => (
              <div key={index} className="sidebar-item">
                <Link to={item.link} className="links" >{item.icon} {item.name}</Link>
              </div>
            ))}
          </div>
          <Link to="/login" className="logout-button">Log Out</Link>

        </section>
      </div>
    </div>
  );
};

export default Sidebar;
