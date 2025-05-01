
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = -(window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      setRotation({ x: y, y: x });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Анимированный фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-40 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                Стань профессионалом киноиндустрии
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-md">
                Обучение от признанных мастеров индустрии с индивидуальным подходом и практикой на реальных проектах
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Наши курсы
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-background"></div>
                ))}
              </div>
              <p className="text-gray-400">500+ выпускников уже в киноиндустрии</p>
            </div>
          </div>

          <div className={`flex justify-center ${isLoaded ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <div 
              className="relative w-full max-w-lg aspect-[4/3] bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg p-1"
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden bg-zinc-900 backdrop-blur-sm border border-white/10">
                <div className="absolute top-2 left-2 right-2 h-6 bg-zinc-800 rounded flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="mt-8 p-4">
                  <div className="h-4 bg-zinc-700 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-zinc-700 rounded w-1/2 mb-3"></div>
                  <div className="h-40 bg-zinc-800 rounded mt-4 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-12 bg-zinc-700 rounded"></div>
                    <div className="h-12 bg-primary/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
