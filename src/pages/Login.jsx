import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  const [inpVal, seTInpVAL] = useState({
    Email: "",

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
    const getUserArr = localStorage.getItem("userYoutube");
    const { Email, Password } = inpVal;
    if (Email === "") {
      alert("Email feild is required");
    } else if (!Email.includes("@gmail.com")) {
      alert("please enter vaild email address");
    } else if (Password === "") {
      alert("Password feild is required");
    } else if (Password.length <= 7) {
      alert(" Atleast 8 character Password ");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((ele, k) => {
          return ele.Email === Email && ele.Password === Password;
        });
        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          history("/details");
          alert("Account created successfully");
        }
      }
    }
  };
  return (
    <div className=" md:flex">
      <div className="  md:mt-28 md:ml-16 ">
        <h1 className=" text-xl font-sans  md:translate-x-3  ml-44  translate-y-10  md:-translate-y-2">
          Sign In
        </h1>
        <form className=" md:w-96 m-14 md:mt-3  translate-x-12">
          <div>
            <input
              type="text"
              placeholder="Your Email"
              name="Email"
              onChange={getData}
              className=" p-1 w-2/3 mb-3 border h-8 border-blue-800 rounded "
            />
          </div>

          <div>
            <input
              type="Password"
              placeholder="Your Password"
              name="Password"
              onChange={getData}
              className=" p-1 w-2/3 mb-3 border h-8 border-blue-800 rounded "
            />
          </div>

          <button
            className=" w-2/3 bg-green-600  hover:bg-green-700 h-9 mb-3 border border-green-700 rounded "
            onClick={addData}
          >
            Submit
          </button>
        </form>
      </div>
      <div className=" md:mt-20 md:mr-24  hidden md:block md:w-screen">
        <img src="/images/login.webp" alt="" />
      </div>
    </div>
  );
};
export default Login;
