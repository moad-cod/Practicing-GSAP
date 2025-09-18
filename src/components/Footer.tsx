import React, { useState } from 'react';
import { FaJava } from 'react-icons/fa';
import { SiPython, SiC, SiCplusplus, SiNodedotjs, SiFlutter, SiDart, SiAngular, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiSpring, SiDjango, SiDocker, SiJavascript, SiHtml5, SiCss3, SiGit, SiLinux } from 'react-icons/si';

const icons = [
  FaJava, SiPython, SiC, SiCplusplus, SiNodedotjs, SiFlutter, SiDart,
  SiAngular, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiSpring,
  SiDjango, SiDocker, SiJavascript, SiHtml5, SiCss3, SiGit, SiLinux
];

const Footer = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full py-4 overflow-hidden">
      <div
        className={`flex animate-marquee gap-8 ${isPaused ? 'animation-paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {icons.concat(icons).map((Icon, index) => (
          <div
            key={index}
            className={`text-white text-4xl p-2 rounded-full transition-colors duration-300 ${
              hoveredIndex === index ? 'bg-amber-600 text-black' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Icon />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Footer;