import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t, lang } = useLang();
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-6">
      <div className="container grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img src={logo} alt="Logo" className="h-28 md:h-32 w-auto object-contain bg-white/95 rounded-md p-2" loading="lazy" />
          </div>
          <p className="text-white/70 leading-relaxed max-w-md">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-gold mb-4">{t.footer.links}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/#home" className="hover:text-gold transition-smooth">{t.nav.home}</Link></li>
            <li><Link to="/#projects" className="hover:text-gold transition-smooth">{t.nav.projects}</Link></li>
            <li><Link to="/#services" className="hover:text-gold transition-smooth">{t.nav.services}</Link></li>
            <li><Link to="/#contact" className="hover:text-gold transition-smooth">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-gold mb-4">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+966532898887" dir="ltr" className="hover:text-gold transition-smooth">+966 53 289 8887</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:info@mgxsa.com" className="hover:text-gold transition-smooth">info@mgxsa.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>{t.footer.address}</span>
            </li>
          </ul>

          <div className="mt-5">
            <h5 className="font-display font-bold text-gold text-sm mb-2">{t.footer.hoursTitle}</h5>
            <ul className="space-y-1 text-sm text-white/70">
              <li>{t.footer.hours1}</li>
              <li>{t.footer.hours2}</li>
            </ul>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/mgx.sa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition-smooth"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/mgx_sa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition-smooth"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2.04l6.98-7.97L2 2h6.91l4.28 5.66L18.244 2Zm-1.19 18h1.66L7.06 4H5.31l11.745 16Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/mgxsa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition-smooth"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container border-t border-white/10 pt-6 text-center text-sm text-white/50 space-y-2">
        <div>
          <Link to="/privacy" className="hover:text-gold transition-smooth">
            {lang === "ar" ? "بيان الخصوصية" : "Privacy Statement"}
          </Link>
        </div>
        <div>© {new Date().getFullYear()} {t.footer.company}. {t.footer.rights}</div>
      </div>
    </footer>
  );
};

export default Footer;
