import BenefitsSection from "@/components/BenefitsSection";
import ProfileSummary from "@/components/ProfileSummary";
import RewardRadialChart from "@/components/RewardChart";

export default function Home() {
  return (
    <div>
      {/* Hero/Profile Section */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <ProfileSummary
          name="John Doe"
          level={5}
          xpPercentage={70}
          avatarUrl="https://i.pravatar.cc/100"
        />
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center -mt-8 mb-8">
        <span className="animate-bounce text-3xl text-white">↓</span>
      </div>

      {/* Reward Chart Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="w-full max-w-md">
          <RewardRadialChart points={350} maxPoints={500} />
        </div>
      </section>

  
      {/* Benefits Section */}
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Your Benefits</h1>
        <BenefitsSection />
      </section>
    </div>
  );
}
