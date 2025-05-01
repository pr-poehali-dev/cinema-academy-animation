
import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

const navItems = [
  { name: "Главная", path: "/" },
  { name: "О нас", path: "/about" },
  { name: "Программы", path: "/programs" },
  { name: "Преподаватели", path: "/teachers" },
  { name: "Мероприятия", path: "/events" },
  { name: "Контакты", path: "/contacts" },
]

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-cinema rounded-full animate-pulse-light"></div>
            <Icon 
              name="Film" 
              className="relative z-10 text-white" 
              size={32} 
            />
          </div>
          <span className="text-xl font-bold tracking-tight">КиноАкадемия</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary/50 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="ml-4 bg-cinema hover:bg-cinema/80">
            Поступить
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-4 pt-2 pb-4 bg-card/95 backdrop-blur-md animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-2 bg-cinema hover:bg-cinema/80">
              Поступить
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
