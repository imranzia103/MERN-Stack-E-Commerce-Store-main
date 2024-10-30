import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`${
          isMenuOpen ? "top-0 right-2" : " top-5 right-7"
        } bg-[#151515] p-2 fixed rounded-lg `}
      >
        {isMenuOpen ? (
          <FaTimes color="white" />
        ) : (
          <>
            <div className=" w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className=" w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className=" w-6 h-0.5 bg-gray-200 my-1"></div>
          </>
        )}
      </button>

      {isMenuOpen && (
        <section className=" bg-[#151515] p-4 fixed right-7 top-5">
          <ul className=" list-none mt-2">
            <li>
              <NavLink
                className=" list-item py-2 block mb-5 hover:bg-[#2E2d2D] rounded-sm"
                to="/admin/dashboard"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" list-item py-2 block mb-5 hover:bg-[#2E2d2D] rounded-sm"
                to="/admin/categorylist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Create Category
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" list-item py-2 block mb-5 hover:bg-[#2E2d2D] rounded-sm"
                to="/admin/productlist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Create Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" list-item py-2 block mb-5 hover:bg-[#2E2d2D] rounded-sm"
                to="/admin/allproducts"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" list-item py-2 block mb-5 hover:bg-[#2E2d2D] rounded-sm"
                to="/admin/userlist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Mangae Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" list-item py-2 block mb-5 hover:bg-[#2E2d2D] rounded-sm"
                to="/admin/orderlist"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Manage Orders
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default AdminMenu;
