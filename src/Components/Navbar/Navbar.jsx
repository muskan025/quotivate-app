import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx"

export const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isHamburger, setIsHamburger] = useState(false)
  return (
    <nav className="navbar">
      <p className="n-name">Quotivate</p>
        
          <ul className={!isHamburger ?'close':'open'}>
            <li>
              <NavLink exact to="/"  >
                Home
              </NavLink>
            </li>
            <li
              className="n-quotes"
              onMouseEnter={() => setIsDropdown(true)}
              onMouseLeave={() => setIsDropdown(false)}
            >
              <NavLink to="/quotes"  >
                Quotes
              </NavLink>
              {isDropdown && (
                <ul className="dropdown">
                  <li>
                    <NavLink to="friendship-quotes" >
                      Friendship Quotes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="insanity-quotes" >
                      Insanity Quotes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="humorous-quotes" >
                      Humorous Quotes
                    </NavLink>
                  </li>
                 </ul>
              )}
            </li>

            <li>
              <NavLink to="/collection"  >
                Collection
              </NavLink>
            </li>
            <li className="my-quotes">
            <NavLink to="/my-quotes" >
              My Quotes
            </NavLink>
          </li>
          </ul>

          <RxHamburgerMenu className="hamburger"  onClick={()=>(setIsHamburger(!isHamburger))}/>
    </nav>
  );
};
