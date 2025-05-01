
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

interface Program {
  id: string
  title: string
  duration: string
  level: string
  description: string
  features: string[]
  image: string
}

const programs: Record<string, Program[]> = {
  filmmaking: [
    {
      id: "directing",
      title: "Режиссура кино",
      duration: "2 года",
      level: "Продвинутый",
      description: "Полная программа обучения искусству кинорежиссуры от написания сценария до постпродакшна.",
      features: ["Работа с актерами", "Операторское искусство", "Монтаж", "Звуковое оформление"],
      image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "cinematography",
      title: "Операторское мастерство",
      duration: "1,5 года",
      level: "Средний",
      description: "Освоение техники и искусства кинематографии, работы с камерой и светом.",
      features: ["Композиция кадра", "Работа со светом", "Цветокоррекция", "Специальные эффекты"],
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  acting: [
    {
      id: "acting-basics",
      title: "Основы актерского мастерства",
      duration: "1 год",
      level: "Начальный",
      description: "Базовый курс по актерскому мастерству для начинающих актеров.",
      features: ["Сценическая речь", "Пластика", "Работа с эмоциями", "Импровизация"],
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "acting-advanced",
      title: "Профессиональное актерское мастерство",
      duration: "2 года",
      level: "Продвинутый",
      description: "Углубленная программа для актеров, стремящихся к профессиональной карьере в кино.",
      features: ["Работа в кадре", "Кастинги", "Работа с режиссером", "Создание образа"],
      image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  production: [
    {
      id: "producing",
      title: "Продюсирование",
      duration: "1,5 года",
      level: "Продвинутый",
      description: "Курс по организации и управлению кинопроизводством, финансированию и дистрибуции.",
      features: ["Бюджетирование", "Маркетинг", "Правовые аспекты", "Фестивальное продвижение"],
      image: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?q=80&w=1000&auto=format&fit=crop"
    }
  ]
}

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("filmmaking")

  return (
    <div className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши образовательные программы</h2>
          <p className="text-lg text-muted-foreground">
            Выберите направление обучения и начните свой путь в мире кинематографа
          </p>
        </div>

        <Tabs defaultValue="filmmaking" onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="filmmaking" className="text-sm md:text-base">Кинопроизводство</TabsTrigger>
            <TabsTrigger value="acting" className="text-sm md:text-base">Актерское мастерство</TabsTrigger>
            <TabsTrigger value="production" className="text-sm md:text-base">Продюсирование</TabsTrigger>
          </TabsList>
          
          {Object.keys(programs).map((category) => (
            <TabsContent 
              key={category} 
              value={category}
              className="animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs[category].map((program) => (
                  <div 
                    key={program.id}
                    className="group film-card overflow-hidden"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="px-2 py-1 bg-cinema text-white text-xs rounded-full">{program.level}</span>
                          <span className="flex items-center text-xs text-muted-foreground">
                            <Icon name="Clock" size={12} className="mr-1" />
                            {program.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2">Вы изучите:</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {program.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <Icon name="Check" size={14} className="mr-2 text-cinema" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-cinema hover:bg-cinema/80">
                        Подробнее о программе
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
