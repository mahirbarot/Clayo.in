import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserById from '../utils/api/UserById';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user);

  const [userData,setUserData] = useState({})

  const loadUserDetails = async () => {
    const result = await UserById(user.id);
    if(result){
        setUserData(result);
    }
  }

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(()=>{
    loadUserDetails();
  },[])

  if (!user) return null;

  return (
    <div className="w-screen min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full flex flex-col sm:flex-row items-center sm:items-start gap-8 border border-gray-100">
        <img
          src={userData.profile_picture || user.profileImage} 
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-md"
        />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
          <h2 className="text-3xl font-bold text-amber-700">{userData.name}</h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Mobile No:</span> {userData.mobile_no}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Address:</span> {userData.address}
          </p>
          
          <button
            className="mt-4 bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition font-medium"
            onClick={() => alert("Edit Profile coming soon...")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
