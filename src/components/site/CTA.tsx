import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const CTA = () => {
  const { t, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <section className="py-24 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-96 h-96 border border-gold"
        />
        <motion.div
          animate={{ rotate: [-12, -18, -12] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-64 h-64 border border-gold"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container relative z-10 text-center max-w-3xl"
      >
        <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 leading-tight">
          {t.cta.title}
        </h2>
        <p className="text-lg text-white/80 mb-10">
          {t.cta.desc}
        </p>
        <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-light shadow-gold text-base h-14 px-10 hover:scale-105 transition-transform">
          <Link to="/quote">
            {t.cta.btn}
            <Arrow className="ms-2" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
