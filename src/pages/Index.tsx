import AutoHeader from "@/components/AutoHeader";
import SearchByVin from "@/components/SearchByVin";
import PartCard from "@/components/PartCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredParts = [
    {
      name: "Тормозные колодки передние",
      article: "BP-5487",
      price: 2890,
      oldPrice: 3200,
      brand: "Bosch",
      rating: 5,
      reviews: 124,
      availability: "in_stock" as const,
      image: "/placeholder.svg",
      guarantee: "2 года",
      compatibility: ["BMW X3", "BMW X5", "BMW 3 Series"],
    },
    {
      name: "Масляный фильтр двигателя",
      article: "OF-9876",
      price: 650,
      brand: "Mann",
      rating: 4,
      reviews: 89,
      availability: "in_stock" as const,
      image: "/placeholder.svg",
      guarantee: "1 год",
      compatibility: ["Mercedes C-Class", "Mercedes E-Class"],
    },
    {
      name: "Амортизатор задний",
      article: "AS-1234",
      price: 4500,
      oldPrice: 5200,
      brand: "Sachs",
      rating: 5,
      reviews: 67,
      availability: "low_stock" as const,
      image: "/placeholder.svg",
      guarantee: "3 года",
      compatibility: ["Audi A4", "Audi A6", "VW Passat", "Skoda Superb"],
    },
    {
      name: "Свечи зажигания (комплект)",
      article: "SP-7890",
      price: 1250,
      brand: "NGK",
      rating: 4,
      reviews: 156,
      availability: "in_stock" as const,
      image: "/placeholder.svg",
      guarantee: "6 месяцев",
      compatibility: ["Toyota Camry", "Honda Accord"],
    },
  ];

  const categories = [
    { name: "Двигатель", icon: "Settings", count: 15420 },
    { name: "Тормозная система", icon: "Disc", count: 8930 },
    { name: "Подвеска", icon: "Wrench", count: 12340 },
    { name: "Электрика", icon: "Zap", count: 9876 },
    { name: "Кузов", icon: "Car", count: 6754 },
    { name: "Салон", icon: "Armchair", count: 4321 },
  ];

  return (
    <div className="min-h-screen bg-auto-light">
      <AutoHeader />

      <main>
        <div className="container mx-auto px-4 py-8">
          <SearchByVin />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
              >
                <div className="w-12 h-12 bg-auto-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon
                    name={category.icon as any}
                    size={24}
                    className="text-auto-blue"
                  />
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {category.count.toLocaleString()} товаров
                </p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Популярные запчасти
                </h2>
                <p className="text-gray-600">
                  Проверенные временем решения для вашего автомобиля
                </p>
              </div>
              <Button
                variant="outline"
                className="border-auto-blue text-auto-blue hover:bg-auto-blue/10"
              >
                Смотреть все
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredParts.map((part, index) => (
                <PartCard key={index} {...part} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-auto-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-auto-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Гарантия качества
                </h3>
                <p className="text-gray-600 text-sm">
                  Все запчасти проходят строгий контроль качества. Гарантия до 3
                  лет.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-auto-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-auto-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Быстрая доставка
                </h3>
                <p className="text-gray-600 text-sm">
                  Доставим заказ в течение 1-3 дней по всей России. Самовывоз
                  доступен.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-auto-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-auto-orange" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Поддержка 24/7
                </h3>
                <p className="text-gray-600 text-sm">
                  Наши эксперты помогут подобрать нужные запчасти в любое время.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
