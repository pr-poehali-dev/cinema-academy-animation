
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

interface Feature {
  title: string
  description: string
  icon: string
  delay: string
}

const features: Feature[] = [
  {
    title: "Практические занятия",
    description: "Более 70% учебного времени посвящено практике с профессиональным оборудованием",
    icon: "Camera",
    delay: "0s"
  },
  {
    title: "Мастер-классы",
    description: "Регулярные встречи с известными режиссерами, операторами и актерами",
    icon: "Users",
    delay: "0.1s"
  },
  {
    title: "Современное оборудование",
    description: "Студии оснащены профессиональными камерами, светом и звуковым оборудованием",
    icon: "VideoIcon",
    delay: "0.2s"
  },
  {
    title: "Работа над проектами",
    description: "Студенты участвуют в создании короткометражных фильмов и рекламных роликов",
    icon: "Film",
    delay: "0.3s"
  },
  {
    title: "Фестивали и конкурсы",
    description: "Возможность представить свои работы на российских и международных фестивалях",
    icon: "Award",
    delay: "0.4s"
  },
  {
    title: "Трудоустройство",
    description: "Помощь в поиске стажировок и работы в киноиндустрии после обучения",
    icon: "Briefcase",
    delay: "0.5s"
  }
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll(".feature-card")
    cards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background to-secondary/50"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-cinema/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-cinema/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нашу академию</h2>
          <p className="text-lg text-muted-foreground">
            Мы создаем все условия для развития профессиональных навыков и творческой реализации наших студентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card p-6 bg-card/80 backdrop-blur-sm border-secondary/50 hover:border-cinema/50 transition-all duration-300 opacity-0"
              style={{ animationDelay: feature.delay }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-cinema/10 text-cinema">
                  <Icon name={feature.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-cinema hover:bg-cinema/80 text-white">
            Все программы обучения
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
