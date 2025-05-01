
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">КиноАкадемия</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Главная</Link>
              <Link to="/courses" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Курсы</Link>
              <Link to="/instructors" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Преподаватели</Link>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">О нас</Link>
              <Button className="bg-primary hover:bg-primary/90 text-white ml-3">Записаться</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть меню</span>
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Главная</Link>
            <Link to="/courses" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Курсы</Link>
            <Link to="/instructors" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Преподаватели</Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">О нас</Link>
            <Button className="bg-primary hover:bg-primary/90 text-white w-full mt-3">Записаться</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
