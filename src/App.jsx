import React from "react";
import SideBar from "./component/SideBar";

export default function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 bg-white p-4">
        {/* Main content goes here */}
        <h1 className="text-2xl font-bold">Welcome to ProPeak</h1>
      </div>
    </div>
  );
}
