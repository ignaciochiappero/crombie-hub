"use client";

import React, { useState } from 'react';
import { 
  Trophy, 
  Star, 
  Lock, 
  Unlock, 
  Medal, 
  Rocket, 
  Target, 
  CheckCircle,
  Code,
  Globe,
  Database,
  Shield
} from 'lucide-react';

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  completed: boolean;
  progress: number;
  requiredProgress: number;
};

export default function LogrosPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 1,
      title: "Coding Master",
      description: "Complete 100 coding challenges",
      icon: Code,
      completed: false,
      progress: 42,
      requiredProgress: 100
    },
    {
      id: 2,
      title: "Global Developer",
      description: "Contribute to international projects",
      icon: Globe,
      completed: false,
      progress: 75,
      requiredProgress: 100
    },
    {
      id: 3,
      title: "Database Wizard",
      description: "Create complex database schemas",
      icon: Database,
      completed: false,
      progress: 90,
      requiredProgress: 100
    },
    {
      id: 4,
      title: "Security Champion",
      description: "Implement advanced security protocols",
      icon: Shield,
      completed: true,
      progress: 100,
      requiredProgress: 100
    }
  ]);



  return (
    <div className="min-h-screen bg-[#1A1A1A] p-8 pt-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-white mb-8 flex items-center">
          <Trophy className="mr-4 text-yellow-500" /> Logros
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`
                p-6 rounded-xl transition-all duration-300
                ${achievement.completed 
                  ? 'bg-green-900/30 border-2 border-green-600' 
                  : 'bg-[#353535] hover:bg-[#454545]'}
              `}
            >
              <div className="flex items-center mb-4">
                <achievement.icon 
                  className={`
                    mr-4 w-12 h-12
                    ${achievement.completed 
                      ? 'text-green-500' 
                      : 'text-gray-500'}
                  `}
                />
                <div>
                  <h2 className={`
                    text-xl font-bold
                    ${achievement.completed ? 'text-green-300' : 'text-white'}
                  `}>
                    {achievement.title}
                  </h2>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div 
                  className={`
                    h-2.5 rounded-full
                    ${achievement.completed 
                      ? 'bg-green-600' 
                      : 'bg-pink-600'}
                  `}
                  style={{
                    width: `${achievement.progress}%`
                  }}
                ></div>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <span>Progress</span>
                <span>
                  {achievement.progress}/{achievement.requiredProgress}
                </span>
              </div>

              {achievement.completed ? (
                <div className="flex items-center text-green-500 mt-4">
                  <CheckCircle className="mr-2" /> 
                  Completed
                </div>
              ) : (
                <div className="flex items-center text-yellow-500 mt-4">
                  <Target className="mr-2" /> 
                  In Progress
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}