import GameHeader from "@/components/GameHeader";
import JackpotCard from "@/components/JackpotCard";
import BalanceWidget from "@/components/BalanceWidget";

const Index = () => {
  const jackpots = [
    {
      title: "Mega Jackpot",
      amount: "2,450,000",
      type: "progressive" as const,
      players: 1247,
      timeLeft: "2ч 15м",
    },
    {
      title: "Speed Round",
      amount: "125,000",
      type: "fast" as const,
      players: 89,
      timeLeft: "15м",
    },
    {
      title: "Lucky Strike",
      amount: "850,000",
      type: "progressive" as const,
      players: 456,
      timeLeft: "1ч 45м",
    },
    {
      title: "Flash Win",
      amount: "45,000",
      type: "fast" as const,
      players: 23,
      timeLeft: "5м",
    },
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <GameHeader />

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Активные джекпоты 🎯
              </h2>
              <p className="text-gray-400">
                Присоединяйтесь к игре и выигрывайте крупные призы!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jackpots.map((jackpot, index) => (
                <JackpotCard
                  key={index}
                  title={jackpot.title}
                  amount={jackpot.amount}
                  type={jackpot.type}
                  players={jackpot.players}
                  timeLeft={jackpot.timeLeft}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gaming-dark-card rounded-xl p-8 border border-gaming-purple/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎮 Готовы к большим выигрышам?
                </h3>
                <p className="text-gray-400 mb-6">
                  Выберите джекпот, пополните баланс и начните игру!
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span>✅ Visa/MasterCard/СБП</span>
                  <span>✅ Быстрые выводы</span>
                  <span>✅ Бонусы и турниры</span>
                  <span>✅ Безопасность</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <BalanceWidget balance="15,750" bonus="2,340" />

            <div className="bg-gaming-dark-card rounded-xl p-6 border border-gaming-purple/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                🏆 Последние победители
              </h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Player****23",
                    amount: "45,000 ₽",
                    game: "Speed Round",
                  },
                  {
                    name: "Lucky****89",
                    amount: "125,000 ₽",
                    game: "Flash Win",
                  },
                  {
                    name: "Winner****56",
                    amount: "850,000 ₽",
                    game: "Lucky Strike",
                  },
                ].map((winner, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm"
                  >
                    <div>
                      <div className="text-white font-medium">
                        {winner.name}
                      </div>
                      <div className="text-gray-400">{winner.game}</div>
                    </div>
                    <div className="text-gaming-orange font-bold">
                      {winner.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
