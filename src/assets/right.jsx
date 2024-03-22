import React from 'react';
import mail from "./mail.png";
import blog from "./blog.png";
import poke from "./poke.gif";
import chat from "./chat.png";
import "../App.css"

const all = [
    {i: blog, title: "Blogging Website", link: "https://www.youtube.com/watch?v=CvYHiHCe7gI&feature=youtu.be"},
    {i: poke, title: "Memory Card Game", link: "https://www.github.com/abdullahamin/memory-card"},
    {i: chat, title: "Chat Application", link: "https://www.youtube.com/watch?v=i0BmRc4yxlM"},
];

const Proj = ({ title, i, link }) => {
    return (
        <div className="w-[80%] mt-4 bg-[#fafafa] rounded-lg px-4 py-2 font-inter shadow-lg h-fit">
                <a href={link} target='_blank'>
            <div className='font-bold font-inter text-xl text-slate-800 py-2'>{title}</div>
            <div>
                <img src={i} alt="" />
            </div>
                </a>
        </div>
    );
};

const Right = () => {
    return (
        <div className="flex flex-col  items-center">
            <div className="w-[760px]   bg-white rounded-lg px-6 py-8 font-inter shadow-lg h-fit">
                <div className='font-bold font-inter text-xl text-slate-800'>About Me</div>
                <div className='text-gray-600'>
                    Fullstack developer from Islamabad, Pakistan. Currently pursuing a degree in Computer Science from FAST University Islamabad.
                    I am really focused on learning about everything Web Development and Software Engineering and applying it to my own projects in unique and different ways.
                </div>
                <a href="mailto:abdullahamin231@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-blue-500 font-bold">
                    <span><img className="max-w-[20px]" src={mail} alt="" /></span> abdullahamin231@gmail.com
                </a>
            </div>
            <div className="w-[760px]  bg-white rounded-lg mt-4 px-6 py-8 font-inter shadow-lg h-fit">
                <div className='font-bold font-inter text-xl text-slate-800 border-b-[#0b0e0e39] border-b-[1px] pb-4'>Projects</div>
                <div>
                    {all.map((item, index) => (
                        <Proj key={index} title={item.title} i={item.i} link={item.link} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Right;
