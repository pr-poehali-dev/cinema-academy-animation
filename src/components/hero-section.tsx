
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      setMousePosition({ x, y })
    }
    
    const heroEl = heroRef.current
    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove)
      
      return () => {
        heroEl.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])
  
  const calculateTransform = (depth: number) => {
    const moveX = (mousePosition.x - 0.5) * depth
    const moveY = (mousePosition.y - 0.5) * depth
    return `translate3d(${moveX}px, ${moveY}px, 0)`
  }

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/70"></div>
      
      {/* Вращающиеся сферы */}
      <div className="absolute w-full h-full overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cinema/20 animate-blob blur-3xl"
          style={{ transform: calculateTransform(-20) }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-accent/10 animate-blob animation-delay-2000 blur-3xl"
          style={{ transform: calculateTransform(-30) }}
        ></div>
        <div 
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/10 animate-blob animation-delay-4000 blur-3xl"
          style={{ transform: calculateTransform(-25) }}
        ></div>
      </div>
      
      {/* Контент */}
      <div className="container relative z-10 mx-auto px-4 py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
              Искусство 
              <span className="text-cinema"> кинематографа</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Откройте для себя мир кино вместе с Киноакадемией. Практические занятия, опытные преподаватели и современное оборудование.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-cinema hover:bg-cinema/80 text-white">
                Наши программы
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-cinema/50 text-foreground hover:bg-cinema/10">
                <Icon name="Play" className="mr-2 h-4 w-4" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
        
        {/* 3D элемент */}
        <div 
          className="md:w-1/2 perspective"
          style={{animationDelay: "0.5s"}}
        >
          <div 
            className="relative w-full max-w-md mx-auto preserve-3d"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `rotateY(${mousePosition.x * 20 - 10}deg) rotateX(${mousePosition.y * -20 + 10}deg)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            {/* Передняя панель */}
            <div className="relative w-full aspect-[3/4] rounded-xl glass-effect p-4 animate-fade-in shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop" 
                alt="Киносъемка" 
                className="rounded-md w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-md"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-cinema mr-2 animate-pulse"></div>
                  <span className="text-xs uppercase tracking-wider">Актерское мастерство</span>
                </div>
                <h3 className="text-xl font-bold">Летний интенсив</h3>
                <p className="text-sm text-muted-foreground mt-1">Двухнедельный курс от ведущих актеров и режиссеров</p>
              </div>
            </div>
            
            {/* 3D эффекты глубины */}
            <div 
              className="absolute inset-0 rounded-xl border border-white/20"
              style={{ transform: "translateZ(-10px)", filter: "blur(2px)" }}
            ></div>
            <div 
              className="absolute inset-0 rounded-xl bg-cinema/5"
              style={{ transform: "translateZ(-20px)", filter: "blur(4px)" }}
            ></div>
            <div 
              className="absolute inset-0 rounded-xl bg-cinema/5"
              style={{ transform: "translateZ(-30px)", filter: "blur(6px)" }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Скролл индикатор */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center">
          <span className="text-sm text-foreground/60 mb-2">Прокрутите вниз</span>
          <Icon name="ChevronDown" className="animate-bounce text-foreground/60" />
        </div>
      </div>
    </div>
  )
}
