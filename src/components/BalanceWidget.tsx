import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface BalanceWidgetProps {
  balance: string;
  bonus: string;
}

export default function BalanceWidget({ balance, bonus }: BalanceWidgetProps) {
  return (
    <Card className="bg-gaming-dark-card border-gaming-purple/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          <Icon name="Wallet" size={20} />
          Баланс
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Основной</span>
            <span className="text-2xl font-bold text-gaming-purple">
              {balance} ₽
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Бонусный</span>
            <span className="text-lg font-semibold text-gaming-orange">
              {bonus} ₽
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            className="flex-1 bg-gaming-purple hover:bg-gaming-purple/80"
            size="sm"
          >
            <Icon name="Plus" size={16} className="mr-1" />
            Пополнить
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-gaming-pink/30 text-gaming-pink hover:bg-gaming-pink/10"
            size="sm"
          >
            <Icon name="ArrowUpRight" size={16} className="mr-1" />
            Вывести
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
