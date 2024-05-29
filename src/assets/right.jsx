import React from 'react';
import mail from "./mail.png";
import blog from "./blog.png";
import pvz from "./pvz.jpg"
import poke from "./poke.gif";
import shop from "./shop.gif";
import chat from "./chat.png";
import chess from "./chess.png";
import weather from "./weather.jpeg";
import pl from "./pl.png"
import sort from "./sort.webm";
import Icon from '@mdi/react';
import { mdiFileAccount } from '@mdi/js';


import "../App.css";

const all = [
    {i: pvz, title: "Plants Vs Zombies (Remake) [C++]", link: "https://github.com/abdullahamin231/project"},
    {i: blog, title: "Blogging Website [React, Node]", link: "https://www.youtube.com/watch?v=CvYHiHCe7gI&feature=youtu.be"},
    {i: poke, title: "Memory Card Game [React]", link: "https://www.github.com/abdullahamin/memory-card"},
    {i: chat, title: "Chat Application [MERN]", link: "https://www.youtube.com/watch?v=i0BmRc4yxlM"},
    {i: shop, title: "E-Commerce Website [MERN]", link: "https://github.com/abdullahamin231/shopping-website"},
    {i: chess, title: "Chess Game [C++/SFML]", link: "https://github.com/abdullahamin231/chess"},
    {i: weather, title: "Weather App [HTML/CSS, JS]", link: "https://github.com/abdullahamin231/weather-app"},
    {i: sort, title: "Sorting Visualizer [C++/SFML]", link: "https://github.com/abdullahamin231/sorting-algorithm-visualizer"},
];

const Proj = ({ title, i, link }) => {
    const isVideo = i.endsWith('.webm');
    
    return (
        <div className="w-[80%] mt-4 bg-[#deeaff] rounded-lg px-4 py-2 font-inter shadow-lg h-fit">
            <a href={link} target='_blank' rel="noopener noreferrer">
                <div className='font-bold font-inter text-xl text-slate-800 py-2'>{title}</div>
                <div>
                    {
                        isVideo ? <video className="w-full" autoPlay loop muted src={i}></video> :
                        <img src={i} alt="" />  
                    }
                </div>
            </a>
        </div>
    );
};

const Right = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[760px] bg-white rounded-lg px-6 pt-8 pb-6 font-inter shadow-lg h-fit">
                <div className='font-bold font-inter text-xl text-slate-800'>About Me</div>
                <div className='text-gray-600'>
                    Fullstack developer from Pakistan. Currently pursuing a degree in Computer Science. 
                    I am really focused on learning about everything about my field and applying it to my own projects in unique and different ways.
                </div>
                <a href="mailto:abdullahamin231@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-blue-800 font-bold">
                    <span><img className="max-w-[20px]" src={mail} alt="" /></span> abdullahamin231@gmail.com
                </a>
            </div>
            <div className="w-[760px] bg-white rounded-lg overflow-scroll mt-4 px-6 py-8 font-inter shadow-lg">
                <div className='font-bold font-inter text-xl  text-slate-800 border-b-[#0b0e0e39] border-b-[1px] pb-4'>Projects</div>
                <div className="overflow-x-auto whitespace-nowrap">
                    {all.map((item, index) => (
                        <Proj key={index} title={item.title} i={item.i} link={item.link} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Right;
