import { motion } from "framer-motion";
import { Search, Ruler, HardHat, Key } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const stepIcons = [Search, Ruler, HardHat, Key];

const Journey = () => {
  const { t, dir } = useLang();
  // على الديسكتوب: نعكس الترتيب البصري للعربية ليبدأ الرقم 1 من اليمين
  const orderedDesktop = dir === "rtl" ? [...t.journey.steps].reverse() : t.journey.steps;
  const numbersDesktop = dir === "rtl" ? [4, 3, 2, 1] : [1, 2, 3, 4];
  const iconsDesktop = dir === "rtl" ? [...stepIcons].reverse() : stepIcons;

  // على الموبايل: ترتيب طبيعي 1 -> 4 (عمودي)
  const orderedMobile = t.journey.steps;
  const numbersMobile = [1, 2, 3, 4];
  const iconsMobile = stepIcons;

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="text-gold font-medium mb-3 tracking-widest text-sm">{t.journey.kicker}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-3">
            {t.journey.title}
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-muted-foreground">{t.journey.sub}</p>
        </motion.div>

        {/* ===== موبايل: عمودي 1 -> 4 ===== */}
        <div className="md:hidden relative max-w-sm mx-auto px-4">
          <div className="flex flex-col gap-10 relative">
            {orderedMobile.map((s, i) => {
              const Icon = iconsMobile[i];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center relative"
                >
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="w-24 h-24 bg-background border-2 border-gold rounded-full flex items-center justify-center shadow-elegant">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-1 -end-1 w-8 h-8 bg-gold text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {numbersMobile[i]}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground px-4">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===== ديسكتوب: أفقي ===== */}
        <div className="hidden md:block relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 relative">
            {orderedDesktop.map((s, i) => {
              const Icon = iconsDesktop[i];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center relative"
                >
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    <div className="w-24 h-24 bg-background border-2 border-gold rounded-full flex items-center justify-center shadow-elegant">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-1 -end-1 w-8 h-8 bg-gold text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {numbersDesktop[i]}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
