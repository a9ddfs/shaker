import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useRef } from "react";
import heroBgMobile from "@/assets/hero-bg-mobile.png";
import heroBgDesktop from "@/assets/hero-bg-desktop.png";

const Hero = () => {
  const { t, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const overlayDirection = dir === "rtl" ? "to left" : "to right";

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-[600px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b-4 border-gold"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <picture>
          <source media="(min-width: 1000px)" srcSet={heroBgDesktop} />
          <img
            src={heroBgMobile}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-[120%] object-cover"
            width={1920}
            height={1080}
          />
        </picture>
      </motion.div>

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/60" aria-hidden="true" />


      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto lg:max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-gold/40 text-gold text-xs md:text-sm font-medium rounded-sm tracking-wider"
          >
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-hero font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] mb-8"
          >
            {t.hero.title1}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-hero font-black text-2xl md:text-4xl lg:text-5xl text-gold leading-[1.2] mb-6"
          >
            {t.hero.title2} {t.hero.title3}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg text-white/85 mb-8 leading-relaxed max-w-xl mx-auto"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold-light shadow-gold h-14 px-10 text-base hover:scale-105 transition-transform"
            >
              <Link to="/quote">
                {t.hero.cta1}
                <Arrow className="ms-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white hover:text-primary h-14 px-10 text-base hover:scale-105 transition-transform"
            >
              <a
                href={`https://wa.me/966532898887?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن خدماتكم في المقاولات")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="me-2 w-5 h-5" />
                {t.hero.cta2}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
