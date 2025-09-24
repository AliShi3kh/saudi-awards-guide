import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "روابط سريعة",
      links: [
        { label: "دليل الجوائز", href: "/awards" },
        { label: "مستشارون", href: "/consultants" },
        { label: "خدماتنا", href: "/services" },
        { label: "أخبار الجوائز", href: "/news" },
      ]
    },
    {
      title: "معلومات المنصة",
      links: [
        { label: "عن المنصة", href: "/about" },
        { label: "الأسئلة الشائعة", href: "/faq" },
        { label: "معايير إدراج الجوائز", href: "/criteria" },
        { label: "المنهجية", href: "/methodology" },
      ]
    },
    {
      title: "الدعم والمساعدة",
      links: [
        { label: "تواصل معنا", href: "/contact" },
        { label: "الدعم الفني", href: "/support" },
        { label: "مركز المساعدة", href: "/help" },
        { label: "تبليغ عن مشكلة", href: "/report" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Instagram, href: "#", label: "انستقرام" },
    { icon: Linkedin, href: "#", label: "لينكد إن" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* القسم الرئيسي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* معلومات المنصة */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">الجوائز السعودي</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              منصة شاملة تجمع جميع الجوائز في المملكة العربية السعودية مع خدمات استشارية متخصصة للمتقدمين.
            </p>
            
            {/* معلومات الاتصال */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-2" />
                <span>info@saudiawards.sa</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-2" />
                <span>+966 11 234 5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 ml-2" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* أقسام الروابط */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* النشرة البريدية */}
        <div className="bg-primary-hover rounded-lg p-6 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">اشترك في النشرة البريدية</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              احصل على آخر أخبار الجوائز والمواعيد النهائية مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 bg-white text-foreground"
                dir="rtl"
                aria-label="البريد الإلكتروني للنشرة البريدية"
              />
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                aria-label="اشترك في النشرة البريدية"
              >
                اشترك
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-6" />

        {/* القسم السفلي */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* حقوق النشر */}
          <div className="text-sm text-primary-foreground/60">
            <p>© 2024 الجوائز السعودي. جميع الحقوق محفوظة.</p>
          </div>

          {/* الروابط القانونية */}
          <div className="flex items-center space-x-reverse space-x-6 text-sm">
            <a
              href="/privacy"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              سياسة الخصوصية
            </a>
            <a
              href="/terms"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              شروط الاستخدام
            </a>
            <a
              href="/cookies"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              سياسة الكوكيز
            </a>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div className="flex items-center space-x-reverse space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;