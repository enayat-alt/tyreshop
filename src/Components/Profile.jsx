import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  if (!user) {
    return <h2 className="text-center mt-10">You are not logged in</h2>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
