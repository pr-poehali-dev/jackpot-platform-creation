import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface JackpotCardProps {
  title: string;
  amount: string;
  type: "fast" | "progressive";
  players: number;
  timeLeft?: string;
}

export default function JackpotCard({
  title,
  amount,
  type,
  players,
  timeLeft,
}: JackpotCardProps) {
  return (
    <Card className="bg-gaming-dark-card border-gaming-purple/20 hover:border-gaming-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-gaming-purple/20 group cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <Badge
              variant="secondary"
              className={`${
                type === "fast"
                  ? "bg-gaming-orange/20 text-gaming-orange border-gaming-orange/30"
                  : "bg-gaming-pink/20 text-gaming-pink border-gaming-pink/30"
              }`}
            >
              {type === "fast" ? "Быстрый" : "Накопительный"}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gaming-purple group-hover:text-gaming-pink transition-colors duration-300">
              {amount}
            </div>
            <div className="text-sm text-gray-400">₽</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} />
            <span>{players} игроков</span>
          </div>
          {timeLeft && (
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>{timeLeft}</span>
            </div>
          )}
        </div>

        <Button
          className="w-full bg-gradient-to-r from-gaming-purple to-gaming-pink hover:from-gaming-pink hover:to-gaming-orange transition-all duration-300 text-white font-semibold"
          size="lg"
        >
          <Icon name="Play" size={18} className="mr-2" />
          Участвовать
        </Button>
      </CardContent>
    </Card>
  );
}
