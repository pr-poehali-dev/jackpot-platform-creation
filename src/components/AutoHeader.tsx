import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export default function AutoHeader() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-auto-blue rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-auto-blue">
                  AutoParts<span className="text-auto-red">Pro</span>
                </h1>
                <p className="text-xs text-auto-gray">Качественные запчасти</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-auto-blue"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-auto-blue"
              >
                <Icon name="Search" size={18} className="mr-2" />
                Каталог
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-auto-blue"
              >
                <Icon name="Wrench" size={18} className="mr-2" />
                VIN Поиск
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-auto-blue"
              >
                <Icon name="MapPin" size={18} className="mr-2" />
                Автосервисы
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-auto-blue"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Контакты
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex">
              <Input
                placeholder="Поиск по артикулу, названию..."
                className="w-80 pr-10"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 bg-auto-blue hover:bg-auto-blue/90"
              >
                <Icon name="Search" size={16} />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-auto-blue"
              >
                <Icon name="Heart" size={20} />
                <span className="hidden sm:inline ml-1">Избранное</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-auto-blue relative"
              >
                <Icon name="ShoppingCart" size={20} />
                <span className="hidden sm:inline ml-1">Корзина</span>
                <Badge className="absolute -top-2 -right-2 bg-auto-red text-white text-xs h-5 w-5 rounded-full flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-auto-blue text-auto-blue hover:bg-auto-blue/10"
              >
                <Icon name="User" size={16} className="mr-1" />
                <span className="hidden sm:inline">Войти</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="pb-4 border-t border-gray-100 pt-3 hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-auto-blue"
            >
              <Icon name="Undo2" size={16} className="mr-2" />
              Возвраты
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-auto-blue"
            >
              <Icon name="Shield" size={16} className="mr-2" />
              Гарантии
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-auto-blue"
            >
              <Icon name="Truck" size={16} className="mr-2" />
              Стать поставщиком
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-auto-blue"
            >
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Отзывы о сайте
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              <span>Работаем: 9:00-21:00</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Phone" size={16} />
              <span>8 (800) 123-45-67</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
