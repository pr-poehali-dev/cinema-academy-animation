
import { useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алексей Смирнов",
    role: "Выпускник 2023, режиссер",
    content: "Благодаря академии я получил не только теоретические знания, но и бесценный практический опыт. Мой дипломный проект был отмечен на фестивале студенческого кино.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Мария Иванова",
    role: "Студентка 2 курса",
    content: "Преподаватели действительно увлечены своим делом и передают эту страсть студентам. Учебный процесс организован так, что мы постоянно создаем что-то новое.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    role: "Выпускник 2022, оператор",
    content: "Академия дала мне возможность работать с профессиональным оборудованием и освоить современные технологии съемки. Сейчас работаю на крупных проектах.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    rating: 4
  }
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

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

    const testimonialCards = document.querySelectorAll(".testimonial-card")
    testimonialCards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      testimonialCards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших студентов</h2>
          <p className="text-lg text-muted-foreground">
            Мнения тех, кто уже проходит обучение в нашей академии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`testimonial-card p-6 border-secondary/50 opacity-0`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon 
                    key={i}
                    name="Star" 
                    className={i < testimonial.rating ? "text-yellow-500 inline-block" : "text-gray-400 inline-block"}
                    size={16}
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-muted-foreground italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <Avatar className="mr-4 border-2 border-cinema">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
