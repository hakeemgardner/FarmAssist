import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { supabase } from "../../client";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    async function getIsLoggedIn() {
      const currentUser = await supabase.auth.getUser();
      if (currentUser === null) return alert("User doesnt exisit")
      const { data, error } = await supabase.from("farmer_profile").select("*").eq("email", currentUser.data.user.email); 
      if (error) {
        alert(error.message);
        return;
      }
      const user = data[0];
      console.log(user);
      if (user.isFarmer === true) { 
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }

      if (user.isAdmin === true) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
    getIsLoggedIn();
  
  }, []);
  
  return (
    <header className="sticky top-0 z-1000 bg-white shadow-sm">
      <nav className="mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg
            className="h-8 w-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <NavLink to="/" className="text-xl font-bold text-earth-dark">
            FarmWise AI
          </NavLink>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isLoggedIn && (
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
            }
            to="/profile"
            end
          >
            Profile
          </NavLink>
          )}
          {isLoggedIn ?
          
            <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            
            <button className="text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:cursor-pointer hover:text-primary focus:outline-none">
              AI Tools
            </button>
            {isDropdownOpen && (
              <div className="dark:bg-background-dark ring-opacity-5 absolute left-0 mt-0 w-56 rounded-md bg-background-light shadow-lg ring-1 ring-black">
                <div className="py-2">
                  <NavLink
                    to="/fertilizer-advice"
                    className={({ isActive }) =>
                      isActive
                        ? "text-content-light dark:text-content-dark block bg-primary px-4 py-2 text-white"
                        : "text-content-light dark:text-content-dark block px-4 py-2 hover:bg-primary/10 hover:text-primary"
                    }
                  >
                    Fertilizer Advisor
                  </NavLink>
                  <NavLink
                    to="/crop-disease-detection"
                    className={({ isActive }) =>
                      isActive
                        ? "text-content-light dark:text-content-dark block bg-primary px-4 py-2 text-white"
                        : "text-content-light dark:text-content-dark block px-4 py-2 hover:bg-primary/10 hover:text-primary"
                    }
                  >
                    AI Crop Disease Detector
                  </NavLink>
                  <NavLink
                    to="/weatherdashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "text-content-light dark:text-content-dark block bg-primary px-4 py-2 text-white"
                        : "text-content-light dark:text-content-dark block px-4 py-2 hover:bg-primary/10 hover:text-primary"
                    }
                  >
                    Weather AI
                  </NavLink>
                </div>
              </div>
            )}
            
          </div> : ""}

          
          
          {isAdmin ?<NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
            }
          >
            Dashboard
          </NavLink>:""}
          
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/sign-up">
            <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-md cursor-pointer">
              Get Started
            </button>
          </NavLink>
          <NavLink to="/login">
            <button className="px-4 py-2 text-sm font-bold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
              Sign In
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary/30">
          <div className="px-6 py-4 flex flex-col gap-4">
            {isLoggedIn? <><NavLink
              to="/fertilizer-advice"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                  : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
              }
            >
              Fertilizer Advisor
            </NavLink>
            <NavLink
              to="/crop-disease-detection"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                  : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
              }
            >
              AI Crop Disease Detector
            </NavLink>
            <NavLink
              to="/weatherdashboard"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                  : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
              }
            >
              Weather AI
              </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                  : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
              }
            >
              Profile
              </NavLink>
            
            
            </> : ""}
            
            {isAdmin?<NavLink
              className={({ isActive }) =>
                isActive
                  ? "dark:text-content-dark text-lg font-medium text-primary transition-colors hover:text-primary"
                  : "text-content-light dark:text-content-dark text-lg font-medium transition-colors hover:text-primary"
              }
              to="/admin"
            >
            Dashboard
            </NavLink> :""}
            
            
            
            
            <div className="flex flex-col gap-3 pt-4 border-t border-secondary/30">
              <NavLink to="/sign-up">
                <button className="w-full px-4 py-2 text-sm font-bold bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-md cursor-pointer">
                  Get Started
                </button>
              </NavLink>
              <NavLink to="/login">
                <button className="w-full px-4 py-2 text-sm font-bold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Sign In
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
