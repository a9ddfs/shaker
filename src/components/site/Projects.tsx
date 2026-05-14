import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const imgs = [p1, p2, p3, p4];

const Projects = () => {
  const { t } = useLang();
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-gold font-medium mb-3 tracking-widest text-sm">{t.projects.kicker}</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.projects.items.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer overflow-hidden bg-card border border-border clip-corner hover:shadow-elegant transition-smooth"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={imgs[i]}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                {p.type && (
                  <span className="absolute top-4 end-4 px-3 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-sm">
                    {p.type}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-primary mb-1">{p.title}</h3>
                {p.city && <p className="text-sm text-muted-foreground">{p.city}</p>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
