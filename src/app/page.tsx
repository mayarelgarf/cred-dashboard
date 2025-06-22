
import BenefitsSection from "@/components/BenefitsSection";
import ProfileSummary from "@/components/profileSummary";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="p-6">
      <ProfileSummary
        name="John Doe"
        level={5}
        xpPercentage={70}
        avatarUrl="https://i.pravatar.cc/100"
      />
         <h1 className="text-2xl font-bold mb-4">Your Benefits</h1>
      <BenefitsSection />
    </main>
     
    </div>
  );
}
