import React, { useState } from "react";
import UserCard from "./UserCard";

const UserCardApi = () => {
  let [userData, setUserData] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      profession: "Frontend Developer",
      address: "Delhi",
      salary: 55000,
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Priya Verma",
      profession: "UI/UX Designer",
      address: "Mumbai",
      salary: 60000,
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Rohan Singh",
      profession: "Backend Developer",
      address: "Lucknow",
      salary: 70000,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      profession: "Data Analyst",
      address: "Pune",
      salary: 65000,
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Mohit Khan",
      profession: "Software Engineer",
      address: "Hyderabad",
      salary: 85000,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      name: "Sneha Patel",
      profession: "HR Manager",
      address: "Ahmedabad",
      salary: 50000,
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 7,
      name: "Rahul Mehta",
      profession: "React Developer",
      address: "Jaipur",
      salary: 72000,
      image: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 8,
      name: "Pooja Sharma",
      profession: "Graphic Designer",
      address: "Chandigarh",
      salary: 45000,
      image: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 9,
      name: "Aditya Joshi",
      profession: "DevOps Engineer",
      address: "Noida",
      salary: 90000,
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 10,
      name: "Neha Kapoor",
      profession: "QA Engineer",
      address: "Bhopal",
      salary: 58000,
      image: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: 11,
      name: "Vikram Rao",
      profession: "Full Stack Developer",
      address: "Bengaluru",
      salary: 95000,
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 12,
      name: "Kiran Yadav",
      profession: "Android Developer",
      address: "Indore",
      salary: 68000,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 13,
      name: "Simran Kaur",
      profession: "Content Writer",
      address: "Amritsar",
      salary: 40000,
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 14,
      name: "Arjun Malhotra",
      profession: "Cloud Engineer",
      address: "Gurgaon",
      salary: 98000,
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 15,
      name: "Meera Nair",
      profession: "Business Analyst",
      address: "Kochi",
      salary: 73000,
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 16,
      name: "Kabir Ali",
      profession: "Cyber Security Expert",
      address: "Patna",
      salary: 110000,
      image: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: 17,
      name: "Riya Das",
      profession: "Marketing Manager",
      address: "Kolkata",
      salary: 62000,
      image: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: 18,
      name: "Yash Thakur",
      profession: "Node.js Developer",
      address: "Nagpur",
      salary: 78000,
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      id: 19,
      name: "Aisha Siddiqui",
      profession: "Project Manager",
      address: "Surat",
      salary: 105000,
      image: "https://i.pravatar.cc/150?img=19",
    },
    {
      id: 20,
      name: "Dev Kumar",
      profession: "AI Engineer",
      address: "Chennai",
      salary: 120000,
      image: "https://i.pravatar.cc/150?img=20",
    },
  ]
  )

  let deleteUser = (id)=>{
    const userDel = userData.filter((elem)=> elem.id !== id)
    setUserData(userDel)
    
  }
  return (
    <div>
      <h1 className="text-center text-2xl">User Data</h1>
      <div className="flex flex-wrap items-center">
        {userData.map((elem) => {
          return <UserCard key={elem.id} users={elem} del={deleteUser}/>;
        })}
      </div>
    </div>
  );
};

export default UserCardApi;
