import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Quote = () => {
  const { t, lang } = useLang();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    document.title = lang === "ar"
      ? "اطلب عرض سعر | جيل التميز الحديثة للمقاولات"
      : "Request a Quote | Modern Excellence Contracting";
  }, [lang]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast.error(t.quote.consentRequired);
      return;
    }

    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    setLoading(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms Access Key is missing");
      }

      const fd = new FormData(formEl);
      const submitData = new FormData();
      
      submitData.append("access_key", accessKey);
      
      const subject = lang === "ar"
        ? `طلب عرض سعر جديد - ${fd.get("firstName")} ${fd.get("lastName")}`
        : `New Quote Request - ${fd.get("firstName")} ${fd.get("lastName")}`;
      
      submitData.append("subject", subject);
      submitData.append("from_name", "جيل التميز الحديثة");
      submitData.append("replyto", String(fd.get("email")));
      
      // Form fields
      submitData.append("name", `${fd.get("firstName")} ${fd.get("lastName")}`);
      submitData.append("phone", `+966${fd.get("phone")}`);
      submitData.append("email", String(fd.get("email")));
      submitData.append("project_type", String(fd.get("type")));
      submitData.append("area", String(fd.get("area")));
      submitData.append("city", String(fd.get("location")));
      submitData.append("message", String(fd.get("details")));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && !data.success)) {
        throw new Error((data && data.message) ? data.message : "Failed to send email via Web3Forms");
      }

      toast.success(t.quote.success);
      formEl.reset();
      setConsent(false);
    } catch (error: any) {
      console.error("Error:", error);
      const errMsg = error.message || "";
      if (errMsg && errMsg !== "Failed to send email via Web3Forms" && errMsg !== "Failed to fetch") {
        toast.error(lang === "ar" ? `فشل الإرسال: ${errMsg}` : `Send failed: ${errMsg}`);
      } else {
        toast.error(
          lang === "ar"
            ? "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً أو التحقق من الاتصال بالإنترنت."
            : "An error occurred while sending, please try again or check your connection."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 border border-gold rotate-12" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container relative z-10 text-center"
          >
            <div className="text-gold font-medium mb-3 tracking-widest text-sm">
              {lang === "ar" ? "عرض سعر" : "Quote"}
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              {t.quote.pageTitle}
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              {t.quote.pageDesc}
            </p>
          </motion.div>
        </section>

        <section className="py-16">
          <div className="container max-w-2xl">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={onSubmit}
              className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-elegant space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName" className="text-primary font-bold">
                    {t.quote.firstName} <span className="text-destructive">*</span>
                  </Label>
                  <Input id="firstName" name="firstName" required maxLength={50} className="mt-2 h-11" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-primary font-bold">
                    {t.quote.lastName} <span className="text-destructive">*</span>
                  </Label>
                  <Input id="lastName" name="lastName" required maxLength={50} className="mt-2 h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-primary font-bold">
                  {t.quote.phone} <span className="text-destructive">*</span>
                </Label>
                <div className="mt-2 flex" dir="ltr">
                  <span className="inline-flex items-center px-3 bg-secondary border border-border border-r-0 rounded-s-md text-sm font-bold text-primary">
                    +966
                  </span>
                  <Input id="phone" name="phone" required type="tel" pattern="[0-9]{9,10}" maxLength={10} placeholder="5X XXX XXXX" className="rounded-s-none h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-primary font-bold">
                  {t.quote.email} <span className="text-destructive">*</span>
                </Label>
                <Input id="email" name="email" required type="email" maxLength={100} placeholder="name@example.com" className="mt-2 h-11" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="type" className="text-primary font-bold">
                    {t.quote.type} <span className="text-destructive">*</span>
                  </Label>
                  <Select name="type" required>
                    <SelectTrigger id="type" className="mt-2 h-11"><SelectValue placeholder={t.quote.typePlaceholder} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value={t.quote.types.com}>{t.quote.types.com}</SelectItem>
                      <SelectItem value={t.quote.types.res}>{t.quote.types.res}</SelectItem>
                      <SelectItem value={t.quote.types.finish}>{t.quote.types.finish}</SelectItem>
                      <SelectItem value={t.quote.types.pm}>{t.quote.types.pm}</SelectItem>
                      <SelectItem value={t.quote.types.infra}>{t.quote.types.infra}</SelectItem>
                      <SelectItem value={t.quote.types.maint}>{t.quote.types.maint}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="area" className="text-primary font-bold">
                    {t.quote.area} <span className="text-destructive">*</span>
                  </Label>
                  <Input id="area" name="area" required maxLength={30} placeholder={t.quote.areaPlaceholder} className="mt-2 h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-primary font-bold">
                  {t.quote.location} <span className="text-destructive">*</span>
                </Label>
                <Input id="location" name="location" required maxLength={100} placeholder={t.quote.locationPlaceholder} className="mt-2 h-11" />
              </div>

              <div>
                <Label htmlFor="timeline" className="text-primary font-bold">
                  {t.quote.timeline} <span className="text-destructive">*</span>
                </Label>
                <Select name="timeline" required>
                  <SelectTrigger id="timeline" className="mt-2 h-11"><SelectValue placeholder={t.quote.timelinePlaceholder} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t.quote.timelines.now}>{t.quote.timelines.now}</SelectItem>
                    <SelectItem value={t.quote.timelines["1m"]}>{t.quote.timelines["1m"]}</SelectItem>
                    <SelectItem value={t.quote.timelines["2m"]}>{t.quote.timelines["2m"]}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details" className="text-primary font-bold">{t.quote.details}</Label>
                <Textarea id="details" name="details" rows={4} maxLength={1000} placeholder={t.quote.detailsPlaceholder} className="mt-2" />
              </div>

              <div className="flex items-start gap-3 p-4 bg-secondary/50 border border-border rounded-md">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(c) => setConsent(c === true)}
                  className="mt-1"
                  required
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer font-normal">
                  {t.quote.consent}{" "}
                  <Link to="/privacy" target="_blank" className="text-gold font-bold hover:underline">
                    {t.quote.consentLink}
                  </Link>{" "}
                  {t.quote.consentSuffix}
                </Label>
              </div>

              <Button type="submit" size="lg" disabled={loading || !consent} className="w-full bg-gold text-gold-foreground hover:bg-gold-dark shadow-gold h-14 text-base hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100">
                <Send className="me-2 w-5 h-5" />
                {loading ? t.quote.sending : t.quote.submit}
              </Button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quote;
