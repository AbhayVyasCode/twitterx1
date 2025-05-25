"use client";
import Image from "next/image";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import { useState } from "react";

const DEFAULT_AVATAR =
  "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png";

const FeedCard = ({
  userName = "Abhay Vyas",
  content = "Is it just me or everyone else? Do you feel the code quality decrease as the project size increases? Just refactored a lot of bad code ✨",
  hashtag = "#codinglife",
  avatarUrl = "",
}) => {
  const [imgSrc, setImgSrc] = useState(avatarUrl || DEFAULT_AVATAR);

  // Define actions array INSIDE the component
  const actions = [
    { icon: <FiMessageCircle />, label: "Comment" },
    { icon: <FiRepeat />, label: "Retweet" },
    { icon: <FiHeart />, label: "Like" },
    { icon: <FiShare />, label: "Share" },
  ];

  return (
    <div className="border border-gray-700 bg-black text-white p-4 rounded-xl hover:bg-gray-900 transition-colors duration-200 cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 relative w-12 h-12">
          <Image
            src={imgSrc}
            alt={`${userName}'s avatar`}
            fill
            className="rounded-full object-cover"
            onError={() => setImgSrc(DEFAULT_AVATAR)}
            unoptimized={process.env.NODE_ENV !== "production"}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <h2 className="font-bold hover:underline">{userName}</h2>
            <span className="text-gray-500 text-sm">@username</span>
          </div>

          <p className="mt-1 text-gray-100">{content}</p>

          <div className="mt-2">
            <span className="text-blue-400 hover:text-blue-300">{hashtag}</span>
          </div>

          <div className="flex justify-between mt-3 text-gray-400 max-w-md">
            {actions.map((action, index) => (
              <button
                key={index}
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                aria-label={action.label}
              >
                {action.icon}
                <span className="text-xs">{index * 124}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
