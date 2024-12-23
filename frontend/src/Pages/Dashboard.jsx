import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-200 p-6 shadow-md transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static md:inset-0`}
      >
        <div className="text-center mb-6">
          <img
            src=""
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-orange-500 bg-slate-600"
          />
          <h2 className="text-xl font-semibold mt-4">Jatin Mehra</h2>
        </div>
        <nav>
          <ul className="flex flex-col">
            <li className="mb-4">
              <button
                className="flex items-center text-orange-500 hover:text-red-600 font-medium"
                onClick={() =>{ navigate("/profile")
                            handleSideBar()
                }}
              >
                <span className="mr-3">📋</span> Personal Information
              </button>
            </li>
            <li className="mb-4">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 font-medium"
                onClick={() => navigate("/update")}
              >
                <span className="mr-3">🔒</span> Security
              </button>
            </li>
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-red-600 font-medium "
                onClick={() => navigate("/")}
              >
                <span className="mr-3">🚪</span> Log Out
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6 pt-16 md:pt-20">
        <div className="bg-white p-6 rounded-lg shadow ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <button className=" h-1/2 md:hidden" onClick={handleSideBar}>
              <HiOutlineMenuAlt3 className="text-2xl" />
            </button>
          </div>
          <form className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="col-span-2 flex items-center mb-4 ">
              <label className="mr-6 font-medium ">Male</label>
              <input
                type="radio"
                name="gender"
                className="mr-2"
                defaultChecked
              />
              <label className="mr-6 font-medium">Female</label>
              <input type="radio" name="gender" className="mr-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="Jatin"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="Mehra"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-auto md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="2004-01-22"
              />
            </div>

            <div className="">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <div className="flex items-center">
                <p>jatin@gmail.com</p>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <p>+91 9876543210</p>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="xyz street, abc city"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="Uttrakhand, India"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Postal Code
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="202022"
              />
            </div>

            <div className="col-span-2 flex  justify-between mt-6">
              <button
                type="button"
                className=" px-2 md:px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300"
                onClick={() => window.location.reload()}
              >
                Discard Changes
              </button>
              <button
                type="submit"
                className="px-2 md:px-6 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
