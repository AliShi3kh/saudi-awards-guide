import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "دليل الجوائز", href: "/awards" },
    { label: "مستشارون", href: "/consultants" },
    { label: "خدماتنا", href: "/services" },
    { label: "أخبار الجوائز", href: "/news" },
    { label: "عن المنصة", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* شعار المنصة */}
          <div className="flex items-center space-x-reverse space-x-4">
            <h1 className="text-2xl font-bold text-primary">الجوائز السعودي</h1>
          </div>

          {/* القائمة الرئيسية - Desktop */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                aria-label={`انتقل إلى ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* أزرار الإجراءات */}
          <div className="flex items-center space-x-reverse space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-reverse space-x-2"
              aria-label="البحث في الجوائز"
            >
              <Search className="h-4 w-4" />
              <span>بحث</span>
            </Button>
            
            {/* زر القائمة المحمولة */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* القائمة المحمولة */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border" role="navigation" aria-label="القائمة الرئيسية">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;