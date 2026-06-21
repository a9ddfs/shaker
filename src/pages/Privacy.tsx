import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { useLang } from "@/i18n/LanguageContext";

const content = {
  ar: {
    title: "شركة جيل التميز الحديثة",
    s1: "أولاً: بيان الخصوصية",
    p1a: "تحرص شركة جيل التميز الحديثة على حماية خصوصية جميع زوار موقعها الإلكتروني وعملائها وشركائها، وتلتزم بالحفاظ على سرية المعلومات الشخصية وفقًا للأنظمة واللوائح المعمول بها في المملكة العربية السعودية.",
    p1b: "عند استخدامك لموقعنا أو خدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقًا لما يلي:",
    li1Title: "جمع المعلومات:",
    li1: "قد نقوم بجمع معلومات شخصية مثل الاسم، رقم الهاتف، البريد الإلكتروني، وأي بيانات أخرى يتم تزويدنا بها من خلال النماذج أو وسائل التواصل.",
    li2Title: "استخدام المعلومات:",
    li2: "تُستخدم المعلومات للأغراض التالية:",
    li2Sub: ["تقديم الخدمات والاستشارات", "تحسين جودة الخدمة وتجربة المستخدم", "التواصل مع العملاء بخصوص المشاريع أو العروض", "الامتثال للمتطلبات القانونية والتنظيمية"],
    li3Title: "حماية المعلومات:",
    li3: "نلتزم باتخاذ كافة الإجراءات التقنية والتنظيمية المناسبة لحماية بيانات المستخدمين من الوصول غير المصرح به أو الاستخدام أو الإفصاح.",
    li4Title: "مشاركة المعلومات:",
    li4: "لا يتم بيع أو تأجير أو مشاركة البيانات الشخصية مع أي طرف ثالث إلا في الحالات التالية:",
    li4Sub: ["إذا كان ذلك مطلوبًا بموجب الأنظمة والقوانين", "عند الحاجة لتنفيذ الخدمات مثل الجهات الاستشارية أو المتعاقدين مع الالتزام بالسرية"],
    li5Title: "ملفات تعريف الارتباط (Cookies):",
    li5: "قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل الاستخدام.",
    s2: "ثانياً: إخلاء المسؤولية القانونية",
    s2Items: [
      "جميع المعلومات والمحتويات المنشورة على موقع شركة جيل التميز الحديثة هي لأغراض تعريفية وتسويقية فقط، ولا تشكل عرضًا ملزمًا قانونيًا إلا بموجب عقود رسمية موقعة بين الأطراف.",
      "لا تتحمل الشركة أي مسؤولية عن أي خسائر أو أضرار مباشرة أو غير مباشرة قد تنتج عن استخدام الموقع أو الاعتماد على المعلومات الواردة فيه.",
      "لا تضمن الشركة خلو الموقع من الأخطاء التقنية أو الانقطاعات، وتسعى بشكل مستمر لتحسين الأداء دون التزام بضمان التشغيل المستمر.",
      "أي روابط خارجية يتم توفيرها عبر الموقع هي لأغراض تسهيل الوصول، ولا تتحمل الشركة مسؤولية محتوى تلك المواقع أو سياسات الخصوصية الخاصة بها.",
      "استخدامك للموقع يعني موافقتك الكاملة على هذا البيان، ويحق للشركة تعديل هذه السياسة في أي وقت دون إشعار مسبق، ويتم نشر التحديثات عبر الموقع.",
    ],
    s3: "ثالثاً: التواصل",
    s3Intro: "في حال وجود أي استفسارات بخصوص سياسة الخصوصية أو إخلاء المسؤولية، يمكن التواصل عبر:",
    emailLabel: "البريد الإلكتروني:",
    phoneLabel: "رقم الهاتف:",
    addressLabel: "العنوان:",
    address: "حي النرجس، طريق عثمان بن عفان، الرياض 13324، المملكة العربية السعودية",
    pageTitle: "بيان الخصوصية | جيل التميز الحديثة",
  },
  en: {
    title: "Modern Excellence Generation Company",
    s1: "First: Privacy Statement",
    p1a: "Modern Excellence Generation Company is committed to protecting the privacy of all visitors to its website, clients, and partners, and to maintaining the confidentiality of personal information in accordance with the regulations applicable in the Kingdom of Saudi Arabia.",
    p1b: "By using our website or services, you agree to the collection and use of information as follows:",
    li1Title: "Information Collection:",
    li1: "We may collect personal information such as name, phone number, email, and any other data provided through forms or communication channels.",
    li2Title: "Use of Information:",
    li2: "Information is used for the following purposes:",
    li2Sub: ["Providing services and consultations", "Improving service quality and user experience", "Communicating with clients about projects or offers", "Complying with legal and regulatory requirements"],
    li3Title: "Information Protection:",
    li3: "We are committed to taking all appropriate technical and organizational measures to protect user data from unauthorized access, use, or disclosure.",
    li4Title: "Information Sharing:",
    li4: "Personal data is not sold, rented, or shared with any third party except in the following cases:",
    li4Sub: ["If required by regulations and laws", "When needed to execute services such as consultants or contractors, with confidentiality commitments"],
    li5Title: "Cookies:",
    li5: "The website may use cookies to enhance user experience and analyze usage.",
    s2: "Second: Legal Disclaimer",
    s2Items: [
      "All information and content published on the Modern Excellence Generation website is for informational and marketing purposes only, and does not constitute a legally binding offer unless under formal contracts signed between the parties.",
      "The company assumes no responsibility for any direct or indirect losses or damages that may result from the use of the website or reliance on the information contained therein.",
      "The company does not guarantee that the website is free from technical errors or interruptions, and continuously strives to improve performance without committing to guarantee continuous operation.",
      "Any external links provided through the website are for ease of access, and the company assumes no responsibility for the content of those sites or their privacy policies.",
      "Your use of the website means your full agreement to this statement, and the company reserves the right to modify this policy at any time without prior notice, with updates published on the website.",
    ],
    s3: "Third: Contact",
    s3Intro: "If you have any inquiries regarding the privacy policy or disclaimer, you can contact us via:",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    addressLabel: "Address:",
    address: "Othman Bin Affan Rd, An Narjis, Riyadh 13324",
    pageTitle: "Privacy Statement | Modern Excellence Generation",
  },
};

const Privacy = () => {
  const { lang } = useLang();
  const c = content[lang];

  useEffect(() => {
    document.title = c.pageTitle;
  }, [c.pageTitle]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container max-w-3xl">
          <article className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-elegant space-y-6 leading-relaxed text-foreground">
            <header>
              <h1 className="font-display font-black text-3xl md:text-4xl text-primary mb-2">
                {c.title}
              </h1>
              <div className="w-20 h-0.5 bg-gold" />
            </header>

            <section>
              <h2 className="font-display font-bold text-xl text-primary mb-3">{c.s1}</h2>
              <p className="text-muted-foreground mb-3">{c.p1a}</p>
              <p className="text-muted-foreground mb-3">{c.p1b}</p>
              <ul className="list-disc ps-6 space-y-3 text-muted-foreground">
                <li><strong className="text-primary">{c.li1Title}</strong> {c.li1}</li>
                <li>
                  <strong className="text-primary">{c.li2Title}</strong> {c.li2}
                  <ul className="list-disc ps-6 mt-2 space-y-1">
                    {c.li2Sub.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </li>
                <li><strong className="text-primary">{c.li3Title}</strong> {c.li3}</li>
                <li>
                  <strong className="text-primary">{c.li4Title}</strong> {c.li4}
                  <ul className="list-disc ps-6 mt-2 space-y-1">
                    {c.li4Sub.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </li>
                <li><strong className="text-primary">{c.li5Title}</strong> {c.li5}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-primary mb-3">{c.s2}</h2>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground">
                {c.s2Items.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-primary mb-3">{c.s3}</h2>
              <p className="text-muted-foreground mb-3">{c.s3Intro}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-primary">{c.emailLabel}</strong> <a href="mailto:info@mgxsa.com" className="text-gold hover:underline">info@mgxsa.com</a></li>
                <li><strong className="text-primary">{c.phoneLabel}</strong> <a href="tel:+966532898887" dir="ltr" className="text-gold hover:underline">+966532898887</a></li>
                <li><strong className="text-primary">{c.addressLabel}</strong> {c.address}</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
