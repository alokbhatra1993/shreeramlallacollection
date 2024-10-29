import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"; // Your custom styles

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu
  const [submenuOpen, setSubmenuOpen] = useState({}); // Track open submenus
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false); // Close the menu when the route changes
  }, [path]);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle specific submenu
  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <header className="header-area header-three">
        <div id="header-sticky" className="menu-area">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                  <div className="main-menu text-center">

                    {/* Hamburger Button for Mobile */}
                    <button 
                      className={`hamburger-btn ${menuOpen ? 'is-active' : ''}`}
                      onClick={toggleMenu}
                    >
                      <span className="hamburger-icon"></span>
                    </button>

                    {/* Desktop Menu */}
                    <nav id="desktop-menu" className="d-none d-lg-block">
                      <ul>
                        {/* Men Category */}
                        <li className="has-sub mega-menu">
                          <Link to="/men">Men</Link>
                          <ul className="mega-menu-content">
                            <div className="mega-menu-row">
                              {/* Clothing */}
                              <div className="mega-menu-column">
                                <h4>Clothing</h4>
                                <li><Link to="/men/tshirts">T-Shirts</Link></li>
                                <li><Link to="/men/shirts">Shirts</Link></li>
                                <li><Link to="/men/jeans">Jeans</Link></li>
                                <li><Link to="/men/jackets">Jackets</Link></li>
                                <li><Link to="/men/suits">Suits</Link></li>
                              </div>

                              {/* Footwear */}
                              <div className="mega-menu-column">
                                <h4>Footwear</h4>
                                <li><Link to="/men/sneakers">Sneakers</Link></li>
                                <li><Link to="/men/boots">Boots</Link></li>
                                <li><Link to="/men/formal-shoes">Formal Shoes</Link></li>
                                <li><Link to="/men/sandals">Sandals</Link></li>
                              </div>

                              {/* Accessories */}
                              <div className="mega-menu-column">
                                <h4>Accessories</h4>
                                <li><Link to="/men/watches">Watches</Link></li>
                                <li><Link to="/men/bags">Bags</Link></li>
                                <li><Link to="/men/sunglasses">Sunglasses</Link></li>
                                <li><Link to="/men/belts">Belts</Link></li>
                              </div>
                            </div>
                          </ul>
                        </li>

                        {/* Women Category */}
                        <li className="has-sub mega-menu">
                          <Link to="/women">Women</Link>
                          <ul className="mega-menu-content">
                            <div className="mega-menu-row">
                              {/* Clothing */}
                              <div className="mega-menu-column">
                                <h4>Clothing</h4>
                                <li><Link to="/women/dresses">Dresses</Link></li>
                                <li><Link to="/women/tops">Tops</Link></li>
                                <li><Link to="/women/jeans">Jeans</Link></li>
                                <li><Link to="/women/jackets">Jackets</Link></li>
                                <li><Link to="/women/skirts">Skirts</Link></li>
                              </div>

                              {/* Footwear */}
                              <div className="mega-menu-column">
                                <h4>Footwear</h4>
                                <li><Link to="/women/sneakers">Sneakers</Link></li>
                                <li><Link to="/women/heels">Heels</Link></li>
                                <li><Link to="/women/boots">Boots</Link></li>
                                <li><Link to="/women/sandals">Sandals</Link></li>
                              </div>

                              {/* Accessories */}
                              <div className="mega-menu-column">
                                <h4>Accessories</h4>
                                <li><Link to="/women/watches">Watches</Link></li>
                                <li><Link to="/women/bags">Bags</Link></li>
                                <li><Link to="/women/jewelry">Jewelry</Link></li>
                                <li><Link to="/women/sunglasses">Sunglasses</Link></li>
                              </div>
                            </div>
                          </ul>
                        </li>

                        {/* Kids Category */}
                        <li className="has-sub mega-menu">
                          <Link to="/kids">Kids</Link>
                          <ul className="mega-menu-content">
                            <div className="mega-menu-row">
                              {/* Boys */}
                              <div className="mega-menu-column">
                                <h4>Boys</h4>
                                <li><Link to="/kids/boys/tshirts">T-Shirts</Link></li>
                                <li><Link to="/kids/boys/shorts">Shorts</Link></li>
                                <li><Link to="/kids/boys/jeans">Jeans</Link></li>
                              </div>

                              {/* Girls */}
                              <div className="mega-menu-column">
                                <h4>Girls</h4>
                                <li><Link to="/kids/girls/dresses">Dresses</Link></li>
                                <li><Link to="/kids/girls/tops">Tops</Link></li>
                                <li><Link to="/kids/girls/skirts">Skirts</Link></li>
                              </div>

                              {/* Kids Accessories */}
                              <div className="mega-menu-column">
                                <h4>Accessories</h4>
                                <li><Link to="/kids/accessories">Bags</Link></li>
                                <li><Link to="/kids/shoes">Shoes</Link></li>
                                <li><Link to="/kids/hats">Hats</Link></li>
                              </div>
                            </div>
                          </ul>
                        </li>
                      </ul>
                    </nav>

                    {/* Mobile Menu */}
                    <nav id="mobile-menu" className={`${menuOpen ? 'menu-open' : ''} d-lg-none`}>
                      <ul className="text-left">
                        {/* Men */}
                        <li className={`has-sub ${submenuOpen['men'] ? 'open-submenu' : ''}`}>
                          <Link to="#" onClick={() => toggleSubmenu('men')}>Men</Link>
                          <ul className="submenu">
                            <li><Link to="/men/tshirts">T-Shirts</Link></li>
                            <li><Link to="/men/jeans">Jeans</Link></li>
                            <li><Link to="/men/jackets">Jackets</Link></li>
                          </ul>
                        </li>

                        {/* Women */}
                        <li className={`has-sub ${submenuOpen['women'] ? 'open-submenu' : ''}`}>
                          <Link to="#" onClick={() => toggleSubmenu('women')}>Women</Link>
                          <ul className="submenu">
                            <li><Link to="/women/dresses">Dresses</Link></li>
                            <li><Link to="/women/tops">Tops</Link></li>
                            <li><Link to="/women/skirts">Skirts</Link></li>
                          </ul>
                        </li>

                        {/* Kids */}
                        <li className={`has-sub ${submenuOpen['kids'] ? 'open-submenu' : ''}`}>
                          <Link to="#" onClick={() => toggleSubmenu('kids')}>Kids</Link>
                          <ul className="submenu">
                            <li><Link to="/kids/boys/tshirts">T-Shirts</Link></li>
                            <li><Link to="/kids/girls/dresses">Dresses</Link></li>
                            <li><Link to="/kids/accessories">Accessories</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Main;
