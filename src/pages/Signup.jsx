import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState([]);
  const [inpVal, seTInpVAL] = useState({
    Name: "",
    Email: "",
    Date: "",
    Password: "",
  });
  console.log(inpVal);
  const getData = (e) => {
    const { value, name } = e.target;
    seTInpVAL(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const { Name, Email, Date, Password } = inpVal;
    if (Name === "") {
      alert("Name feild is required");
    } else if (Email === "") {
      alert("Email feild is required");
    } else if (!Email.includes("@gmail.com")) {
      alert("please enter vaild email address");
    } else if (Password === "") {
      alert("Password feild is required");
    } else if (Password.length <= 7) {
      alert(" Atleast 8 character Password ");
    } else if (Date === "") {
      alert("Date feild is required");
    } else {
      localStorage.setItem("userYoutube", JSON.stringify([...data, inpVal]));
      alert("Registration Successful");
    }
  };
  return (
    <div className=" md:flex   ">
      <div className="   md:mt-28 md:ml-16     ">
        <h1 className=" text-xl font-sans  md:translate-x-3  ml-44  translate-y-10  md:-translate-y-2 ">
          Sign Up
        </h1>
        <form className="  md:w-96 m-14 md:mt-3  translate-x-12 ">
          <div className=" ">
            <input
              type="text"
              placeholder=" Your Name"
              name="Name"
              onChange={getData}
              className=" w-2/3 mb-3  p-1 border h-8 border-blue-800 rounded "
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              name="Email"
              onChange={getData}
              className=" w-2/3 mb-3 border p-1 h-8 border-blue-800 rounded "
            />
          </div>
          <div>
            <input
              type="date"
              className=" w-2/3 mb-3 h-8 p-1 border border-blue-800 rounded "
              placeholder=""
              name="Date"
              onChange={getData}
            />
          </div>
          <div>
            <input
              type="Password"
              placeholder="Your Password"
              name="Password"
              onChange={getData}
              className=" w-2/3 mb-3 border p-1 h-8 border-blue-800 rounded "
            />
          </div>

          <button
            className=" w-2/3 bg-green-600  hover:bg-green-700 h-9 mb-3 border border-green-700 rounded "
            onClick={addData}
          >
            Submit
          </button>
        </form>
        <h1 className=" md:w-4/5  -translate-y-14  ml-28 -translate-x-2  md:-translate-y-12 ">
          Already have account
          <span>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                ` underline  ${
                  isActive ? " text-red-700" : " text-blue-600"
                }pl-1 text-blue-600`
              }
            >
              SignIn
            </NavLink>
          </span>
        </h1>
      </div>
      <div className=" md:mt-20 md:mr-24  hidden md:block md:w-screen">
        <img src="../public/images/login.webp" alt="" />
      </div>
    </div>
  );
};
export default Signup;
