import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function SearchByVin() {
  const [searchType, setSearchType] = useState<"vin" | "car">("vin");

  const carBrands = [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Toyota",
    "Honda",
    "Ford",
    "Opel",
    "Renault",
    "Peugeot",
    "Citroen",
    "Mazda",
    "Nissan",
  ];

  return (
    <div className="bg-gradient-to-r from-auto-blue to-auto-dark p-6 rounded-xl text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Найдите идеальные запчасти для вашего автомобиля
          </h2>
          <p className="text-blue-100">
            Поиск по VIN-номеру или характеристикам автомобиля
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-white/10 rounded-lg p-1 flex">
            <Button
              variant={searchType === "vin" ? "default" : "ghost"}
              onClick={() => setSearchType("vin")}
              className={`${
                searchType === "vin"
                  ? "bg-white text-auto-blue hover:bg-white/90"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon name="Hash" size={16} className="mr-2" />
              По VIN-номеру
            </Button>
            <Button
              variant={searchType === "car" ? "default" : "ghost"}
              onClick={() => setSearchType("car")}
              className={`${
                searchType === "car"
                  ? "bg-white text-auto-blue hover:bg-white/90"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon name="Car" size={16} className="mr-2" />
              По марке авто
            </Button>
          </div>
        </div>

        {searchType === "vin" ? (
          <div className="space-y-4">
            <div className="relative">
              <Input
                placeholder="Введите VIN-номер (17 символов)"
                className="bg-white text-gray-900 h-12 text-lg pr-12"
                maxLength={17}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Icon name="Hash" size={20} className="text-gray-400" />
              </div>
            </div>
            <Button className="w-full h-12 bg-auto-red hover:bg-auto-red/90 text-lg font-semibold">
              <Icon name="Search" size={20} className="mr-2" />
              Найти запчасти по VIN
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger className="bg-white text-gray-900 h-12">
                <SelectValue placeholder="Марка" />
              </SelectTrigger>
              <SelectContent>
                {carBrands.map((brand) => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-white text-gray-900 h-12">
                <SelectValue placeholder="Модель" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="model1">X3</SelectItem>
                <SelectItem value="model2">X5</SelectItem>
                <SelectItem value="model3">3 Series</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-white text-gray-900 h-12">
                <SelectValue placeholder="Год" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="h-12 bg-auto-red hover:bg-auto-red/90 font-semibold">
              <Icon name="Search" size={20} className="mr-2" />
              Поиск
            </Button>
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-100">
          <div className="flex items-center gap-1">
            <Icon name="Shield" size={16} />
            <span>Гарантия качества</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Truck" size={16} />
            <span>Быстрая доставка</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="CheckCircle" size={16} />
            <span>100% совместимость</span>
          </div>
        </div>
      </div>
    </div>
  );
}
