//components/Card.tsx
"use client";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FaHeart, FaComment, FaLink } from 'react-icons/fa';
import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  time: string;
}

const DarkCard: React.FC<CardProps> = ({ title, description, imageUrl, date, time }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<'like' | 'comment' | 'link' | null>(null);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIcon(null);
  };

  const handleIconHover = (icon: 'like' | 'comment' | 'link') => {
    setHoveredIcon(icon);
  };

  return (
    <Card
      className={`bg-gray-800 text-white flex flex-col justify-between transition-all duration-300 rounded-lg border-2 border-gray-700 ${
        isHovered ? 'border-white' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader>
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <CardTitle>{title}</CardTitle>
            <div className="text-gray-400 text-sm">{date} | {time}</div>
          </div>
          <div className="mt-4">
            <Image src={imageUrl} alt={title} width={300} height={200} className="rounded-t-lg" />
          </div>
          <CardDescription className="mt-4">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between items-center mt-auto px-4 py-2">
        <div
          className={`flex items-center cursor-pointer ${
            liked ? 'text-red-300 hover:text-red-800' : 'text-gray-400 hover:text-red-500'
          } ${hoveredIcon === 'like' ? 'border-2 border-white' : ''}`}
          onClick={handleLike}
          
        >
          <span className="mr-2">{likeCount}</span>
          <FaHeart size={16} />
        </div>
        <div className="flex items-center text-gray-400 hover:text-blue-500 cursor-pointer">
          <FaComment size={16} />
        </div>
        <div className="flex items-center text-gray-400 hover:text-green-500 cursor-pointer">
          <FaLink size={16} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default DarkCard;