// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get existing users
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if email already exists
//     const userExists = users.find((user) => user.email === email);
//     if (userExists) {
//       alert("User already exists! Please login.");
//       return;
//     }

//     // Save new user
//     const newUser = { name, email, password };
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Signup successful! Please login.");
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded-lg"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border rounded-lg"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
//           >
//             Signup
//           </button>
//         </form>
//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600 font-medium">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";  // ✅ adjust path if needed
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ for dispatching Redux actions

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert("User already exists! Please login.");
      return;
    }

    // Create and save new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Update Redux store (login immediately after signup)
    dispatch(login(newUser));

    alert("Signup successful! You are now logged in.");
    navigate("/"); // redirect to home
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

