import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import WhyUs from "@/components/site/WhyUs";
import Journey from "@/components/site/Journey";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";

const Index = () => {
  const { lang } = useLang();
  useEffect(() => {
    document.title = lang === "ar"
      ? "جيل التميز الحديثة للمقاولات | مشاريع حكومية وتجارية"
      : "Modern Excellence Contracting | Government & Commercial Projects";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", lang === "ar"
      ? "شركة جيل التميز الحديثة للمقاولات — تنفيذ المشاريع الحكومية والتجارية والسكنية بأعلى معايير الجودة في المملكة العربية السعودية."
      : "Modern Excellence Generation Contracting — Government, commercial and residential project execution with top quality standards in Saudi Arabia.");
  }, [lang]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <WhyUs />
        <Journey />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
