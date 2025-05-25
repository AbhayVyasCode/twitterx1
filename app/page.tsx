"use client";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import FeedCard from "@/components/FeedCard";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="grid grid-cols-12 h-screen w-screen max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="col-span-3 xl:col-span-2 flex flex-col items-start justify-between h-full py-4 pl-4 pr-8 border-r border-gray-800">
          <div className="flex flex-col w-full">
            {/* X Logo */}
            <div className="text-3xl mb-6 p-3 hover:bg-gray-800 rounded-full w-fit cursor-pointer transition">
              <FaXTwitter />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-1 w-full">
              <SidebarItem icon={<FaHome />} label="Home" active />
              <SidebarItem icon={<FaHashtag />} label="Explore" />
              <SidebarItem icon={<FaBell />} label="Notifications" />
              <SidebarItem icon={<FaEnvelope />} label="Messages" />
              <SidebarItem icon={<FaBookmark />} label="Bookmarks" />
              <SidebarItem icon={<FaUser />} label="Profile" />
              <SidebarItem icon={<FaEllipsisH />} label="More" />
            </nav>

            {/* Post Button */}
            <button className="bg-blue-500 text-white w-full py-3.5 mt-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-200">
              Post
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 p-3 rounded-full hover:bg-gray-800 w-full cursor-pointer mb-2">
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            <div className="flex-1">
              <p className="font-bold">Abhayvyas</p>
              <p className="text-gray-500">@abhayvyas</p>
            </div>
            <FaEllipsisH className="text-gray-500" />
          </div>
        </div>

        {/* Middle Column - Scrollable Feed */}
        <div className="col-span-6 xl:col-span-7 border-x border-gray-800 h-screen flex flex-col">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 bg-black bg-opacity-80 backdrop-blur-sm p-4 border-b border-gray-800">
            <h1 className="text-xl font-bold">Home</h1>
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {[...Array(11)].map((_, i) => (
              <FeedCard 
                key={i}
                userName="Abhay Vyas"
                content={
                  i % 2 === 0 
                    ? "Is it just me or everyone else? Do you feel the code quality decrease as the project size increases? Just refactored a lot of bad code ✨" 
                    : "Working on some exciting new features for our app! The development process is challenging but rewarding. #coding #webdev"
                }
                hashtag={i % 3 === 0 ? "#codinglife" : "#webdev"}
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 xl:col-span-3 p-4 hidden lg:block">
          <div className="bg-gray-900 rounded-2xl p-4 sticky top-4">
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            <div className="text-gray-500 text-sm">
              Activate Windows<br />
              Go to Settings to activate Windows.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-4 p-3 text-xl hover:bg-gray-800 rounded-full w-full text-left transition ${
        active ? "font-bold" : ""
      }`}
    >
      <span className="w-6 flex justify-center">{icon}</span>
      <span className="text-lg">{label}</span>
    </button>
  );
}