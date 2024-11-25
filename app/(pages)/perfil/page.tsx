"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FaPen } from "react-icons/fa";



// Array of available frames
const frameOptions = [
  "/marcos/marco1.png",
  "/marcos/marco2.png",
  "/marcos/marco3.png",
  // Add more frame paths as needed
];

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

  // State estado para poner el panel 
  const [currentFrame, setCurrentFrame] = useState("/marcos/marco1.png");

  // State para el estado de abierto o cerrado del selector de marco
  const [isFramePanelOpen, setIsFramePanelOpen] = useState(false);

  // Función para incrementar los avances
  const incrementSkill = (index: number) => {
    const newSkills = [...skills];
    newSkills[index].progress = Math.min(100, newSkills[index].progress + 10);
    setSkills(newSkills);
  };



  return (
    <div className="mt-40 p-2 font-[family-name:var(--blender-medium)]">
      <div className="flex relative">
       
       
        {/* Contenedor Imagen y nombre */}
        <div className="w-1/3 flex flex-col items-center justify-start mt-5 relative">
          
          
          {/* Contenedor imagen - marco */}
          <div className="relative group">
           
           
           
            {/* Imagen marco custom */}
            <Image
              src={currentFrame}
              width={250}
              height={250}
              alt="profile frame"
              className="absolute z-10 pointer-events-none animate-pulse"
              style={{ transform: 'scale(1.1)' }}
            />

            {/* Imagen usuario */}
            <Image
              src={"/perfil-n-d.png"}
              width={200}
              height={200}
              alt="profile-image"
              className=" rounded-full relative z-0"
              style={{ transform: 'scale(0.6)' }}
            />

            {/* Boton Selector de marco */}
            <button 
              onClick={() => setIsFramePanelOpen(!isFramePanelOpen)}
              className="absolute bottom-0 right-0 z-20 bg-emerald-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaPen />

            </button>
          </div>

          {/* Nombre usuario */}
          <div className="mt-5 text-lg">
            Nacho Chiappero
          </div>
        </div>



        {/* Sección habilidades */}
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




        {/* Panel selector de marcos */}
        {isFramePanelOpen && (
          <div className="absolute top-72 left-20 bg-black/50 p-4 rounded-lg z-50 flex space-x-2 backdrop-blur-sm">
            {frameOptions.map((frame) => (
              <Image
                key={frame}
                src={frame}
                width={100}
                height={100}
                alt="frame option"
                className={`cursor-pointer hover:scale-110 transition-transform ${
                  currentFrame === frame ? 'border-4 border-pink-500' : ''
                }`}
                onClick={() => {
                  setCurrentFrame(frame);
                  setIsFramePanelOpen(false);
                }}
              />
            ))}
            <button 
              onClick={() => setIsFramePanelOpen(false)}
              className="absolute top-2 right-2 text-white"
            >
              ✖️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}