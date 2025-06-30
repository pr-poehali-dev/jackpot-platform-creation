import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function GameHeader() {
  return (
    <header className="bg-gaming-dark-card border-b border-gaming-purple/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gaming-purple to-gaming-pink rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Jackpot<span className="text-gaming-purple">Zone</span>
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant="ghost"
            className="text-white hover:text-gaming-purple"
          >
            <Icon name="Home" size={18} className="mr-2" />
            Главная
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-gaming-purple"
          >
            <Icon name="Gamepad2" size={18} className="mr-2" />
            Игры
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-gaming-purple"
          >
            <Icon name="Wallet" size={18} className="mr-2" />
            Баланс
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-gaming-purple"
          >
            <Icon name="History" size={18} className="mr-2" />
            История
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-gaming-purple"
          >
            <Icon name="MessageSquare" size={18} className="mr-2" />
            Поддержка
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-gaming-purple/30 text-gaming-purple hover:bg-gaming-purple/10"
          >
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
        </div>
      </div>
    </header>
  );
}
