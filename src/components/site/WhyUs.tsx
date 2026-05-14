import { motion } from "framer-motion";
import { Clock, Award, ShieldCheck, Users, Briefcase, Settings } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";

const icons = [Clock, Award, ShieldCheck, Users, Briefcase, Settings];

const WhyUs = () => {
  const { t } = useLang();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
            {t.why.title}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4" />
          {(t.why as any).sub && (
            <p className="text-lg text-muted-foreground">{(t.why as any).sub}</p>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.items.map((p, i) => {
            const Icon = icons[i];
            const isActive = hovered === i;
            return (
              <motion.div
                key={p.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`text-start p-6 rounded-xl transition-smooth flex items-center gap-4 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-secondary/50 hover:bg-secondary"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className={`font-display font-bold text-lg mb-1 ${isActive ? "text-gold" : "text-primary"}`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {p.desc}
                  </p>
                </div>
                <div
                  className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition-smooth ${
                    isActive ? "bg-gold text-primary" : "bg-gold/10 text-gold"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {(t as any).quality && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-3xl mx-auto text-center bg-secondary/50 rounded-2xl p-8 md:p-10 border border-border"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-3">
              {(t as any).quality.title}
            </h3>
            <div className="w-12 h-1 bg-gold mx-auto mb-4" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {(t as any).quality.desc}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhyUs;
