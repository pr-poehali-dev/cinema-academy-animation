
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-cinema rounded-full"></div>
                <Icon name="Film" className="relative z-10 text-white" size={32} />
              </div>
              <span className="text-xl font-bold tracking-tight">КиноАкадемия</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Профессиональное обучение искусству кинематографа с 2010 года
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cinema/20">
                <Icon name="Facebook" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cinema/20">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cinema/20">
                <Icon name="Youtube" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cinema/20">
                <Icon name="Telegram" size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Программы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/directing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Режиссура
                </Link>
              </li>
              <li>
                <Link to="/programs/acting" className="text-muted-foreground hover:text-foreground transition-colors">
                  Актерское мастерство
                </Link>
              </li>
              <li>
                <Link to="/programs/cinematography" className="text-muted-foreground hover:text-foreground transition-colors">
                  Операторское искусство
                </Link>
              </li>
              <li>
                <Link to="/programs/screenwriting" className="text-muted-foreground hover:text-foreground transition-colors">
                  Сценарное мастерство
                </Link>
              </li>
              <li>
                <Link to="/programs/producing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Продюсирование
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  События
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Частые вопросы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-2 mt-1 text-cinema" size={16} />
                <span className="text-muted-foreground">
                  г. Москва, ул. Кинематографическая, д. 42
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2 text-cinema" size={16} />
                <span className="text-muted-foreground">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2 text-cinema" size={16} />
                <span className="text-muted-foreground">info@kinoacademy.ru</span>
              </li>
              <li className="mt-4">
                <Button className="w-full bg-cinema hover:bg-cinema/80">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Написать нам
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 bg-border/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 КиноАкадемия. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
