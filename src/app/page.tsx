'use client'

import BenefitsSection, { BenefitsSectionSkeleton } from "@/components/BenefitsSection";
import { ModeToggle } from "@/components/mode-toggle";
import ProfileSummary, { ProfileSummarySkeleton } from "@/components/ProfileSummary";
import RewardRadialChart, { RewardRadialChartSkeleton } from "@/components/RewardChart";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // 1.8s fake delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-[112px]">
      <header className="fixed top-0 left-0 w-full z-50 h-[100px] bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900 flex items-center justify-between px-10 shadow-xl border-b border-purple-700/40">
        <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Gaming Dashboard
        </h1>
        <ModeToggle />
      </header>
      {/* Hero/Profile Section */}
      <section className="min-h-screen flex items-center justify-center ">
        {loading ? (
          <ProfileSummarySkeleton />
        ) : (
          <ProfileSummary
            name="John Doe"
            level={5}
            xpPercentage={70}
            avatarUrl="https://i.pravatar.cc/100"
          />
        )}
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center  mb-8 ">
        <span className="animate-bounce text-3xl ">↓</span>
      </div>

      {/* Reward Chart Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b">
        <div className="w-full max-w-md">
          {loading ? (
            <RewardRadialChartSkeleton />
          ) : (
            <RewardRadialChart points={350} maxPoints={500} />
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="p-6">
        {loading ? <BenefitsSectionSkeleton /> : <BenefitsSection />}
      </section>
    </main>
  );
}
