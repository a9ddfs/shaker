import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ value, prefix, suffix, label, delay }: { value: number; prefix: string; suffix: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display font-black text-4xl md:text-5xl text-gradient-gold mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base text-primary font-medium">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const { t } = useLang();
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {t.stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
