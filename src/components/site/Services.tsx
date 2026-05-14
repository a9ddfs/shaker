import { motion } from "framer-motion";
import { Building2, Landmark, Store, PaintRoller, ClipboardList } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";

const icons = [Building2, Landmark, Store, PaintRoller, ClipboardList];

const Services = () => {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
            {t.services.kicker}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground">{t.services.title}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            const isActive = active === i;
            return (
              <motion.button
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group text-start p-6 bg-card rounded-xl border-2 transition-smooth shadow-sm hover:shadow-elegant ${
                  isActive ? "border-gold shadow-elegant" : "border-transparent"
                }`}
              >
                <div
                  className={`w-14 h-14 mb-5 flex items-center justify-center rounded-lg transition-smooth ${
                    isActive ? "bg-gold text-primary" : "bg-primary text-gold group-hover:bg-gold group-hover:text-primary"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className={`font-display font-bold text-lg mb-2 transition-smooth ${isActive ? "text-gold" : "text-primary"}`}>
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
