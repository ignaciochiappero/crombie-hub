"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProfilePage() {
  // State to manage skill progress and frame
  const [skills, setSkills] = useState([
    { name: "Frontend", progress: 75, color: "#ff007f" },
    { name: "Backend", progress: 60, color: "#00ff7f" },
    { name: "Design", progress: 85, color: "#7f00ff" },
    { name: "CSS", progress: 26, color: "#dbbe00" },
    { name: "Security", progress: 2, color: "#0056b1" },
    { name: "Data", progress: 100, color: "#ca300f" }
  ]);

  // State for profile frame
  const [currentFrame, setCurrentFrame] = useState("/marcos/marco1.png");

  // Function to increment skill progress
  const incrementSkill = (index: number) => {
    const newSkills = [...skills];
    newSkills[index].progress = Math.min(100, newSkills[index].progress + 10);
    setSkills(newSkills);
  };

  return (
    <div className="mt-40 p-2 font-[family-name:var(--blender-medium)]">
      <div className="flex">
        
        
        
        
        
        {/* Contenedor Imagen y nombre */}
        <div className="w-1/3  flex flex-col items-center justify-start mt-5 relative">



        {/* Contenedor imagen - marco */}
          <div className="relative">

            {/* Imagen marco custom */}
            <Image
              src={currentFrame}
              width={250}
              height={250}
              alt="profile frame"
              className="absolute z-10 pointer-events-none"
              style={{ transform: 'scale(1.1)' }}
            />

            {/* Imagen usuario */}
            <Image
              src={"/perfil-n-d.png"}
              width={200}
              height={200}
              alt="profile-image"
              className="border rounded-full relative z-0"
              style={{ transform: 'scale(0.7)' }}
            />
          </div>

          {/* Nombre usuario */}
          <div className="mt-5 text-lg">
            Nacho Chiappero
          </div>
        </div>


        {/* Skills Progress Section */}
        <div className="rounded-3xl w-2/3 gap-5 items-center justify-center bg-[#353535] p-6 grid grid-cols-3">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => incrementSkill(index)}
            >
              <div 
                className="w-32 h-32 transition-all duration-300 ease-in-out transform group-hover:scale-110"
                title={`${skill.name} Skill Progress: ${skill.progress}%`}
              >
                <CircularProgressbar 
                  value={skill.progress} 
                  text={`${skill.progress}%`}
                  styles={buildStyles({
                    textColor: 'white',
                    pathColor: skill.color,
                    trailColor: 'rgba(255,255,255,0.3)',
                    textSize: '24px',
                    pathTransitionDuration: 0.5
                  })}
                />
              </div>
              <div className="text-white mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}