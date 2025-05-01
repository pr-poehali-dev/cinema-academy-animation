
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Video",
    title: "Мастер-классы",
    description: "Эксклюзивные лекции от ведущих кинорежиссеров, сценаристов и операторов мирового уровня"
  },
  {
    icon: "FilmReel",
    title: "Практика на площадке",
    description: "Реальный опыт работы на профессиональных съемочных площадках с современным оборудованием"
  },
  {
    icon: "Trophy",
    title: "Конкурсы и фестивали",
    description: "Возможность представить свои работы на кинофестивалях и получить признание в индустрии"
  }
];

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        <Icon name={icon} className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Почему выбирают нашу Киноакадемию
          </h2>
          <p className="text-gray-400">
            Мы предлагаем уникальный подход к образованию в сфере кино и телевидения, соединяя теорию с практикой
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
