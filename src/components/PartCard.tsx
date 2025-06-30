import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PartCardProps {
  name: string;
  article: string;
  price: number;
  oldPrice?: number;
  brand: string;
  rating: number;
  reviews: number;
  availability: "in_stock" | "low_stock" | "out_of_stock";
  image: string;
  guarantee: string;
  compatibility: string[];
}

export default function PartCard({
  name,
  article,
  price,
  oldPrice,
  brand,
  rating,
  reviews,
  availability,
  image,
  guarantee,
  compatibility,
}: PartCardProps) {
  const getAvailabilityBadge = () => {
    switch (availability) {
      case "in_stock":
        return <Badge className="bg-auto-green text-white">В наличии</Badge>;
      case "low_stock":
        return (
          <Badge className="bg-auto-orange text-white">Мало в наличии</Badge>
        );
      case "out_of_stock":
        return <Badge className="bg-auto-red text-white">Нет в наличии</Badge>;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg bg-gray-100"
        />
        {oldPrice && (
          <Badge className="absolute top-2 left-2 bg-auto-red text-white">
            -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </Badge>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-white/90"
        >
          <Icon name="Heart" size={16} className="text-gray-600" />
        </Button>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-auto-blue">{brand}</span>
            <span className="text-xs text-gray-500">Арт: {article}</span>
          </div>
          <h3 className="font-medium text-gray-900 text-sm leading-5 line-clamp-2">
            {name}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          {getAvailabilityBadge()}
          <span className="text-xs text-gray-500">{guarantee}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {price.toLocaleString()} ₽
            </span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">
            Подходит: {compatibility.slice(0, 2).join(", ")}
            {compatibility.length > 2 && ` +${compatibility.length - 2}`}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            className="flex-1 bg-auto-blue hover:bg-auto-blue/90"
            disabled={availability === "out_of_stock"}
          >
            <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
          </Button>
          <Button variant="outline" size="sm" className="h-10 w-10 p-0">
            <Icon name="BarChart3" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
