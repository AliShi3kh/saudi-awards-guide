import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const SearchSection = () => {
  const popularFilters = [
    "التعليم",
    "الصحة",
    "الابتكار",
    "الثقافة",
    "التنمية المجتمعية",
    "البيئة",
    "التقنية",
    "الأعمال"
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            اكتشف الجوائز المناسبة لك
          </h2>
          <p className="text-xl mb-8 opacity-90">
            منصة شاملة تجمع جميع الجوائز في المملكة العربية السعودية
          </p>

          {/* شريط البحث الرئيسي */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="flex">
              <Input
                type="search"
                placeholder="ابحث عن الجوائز حسب الاسم، المجال، أو الجهة المانحة..."
                className="flex-1 h-14 text-lg bg-white text-foreground border-0 rounded-l-xl focus:ring-2 focus:ring-secondary"
                dir="rtl"
                aria-label="البحث في الجوائز"
              />
              <Button
                size="lg"
                className="h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary-hover border-0 rounded-r-xl"
                aria-label="تنفيذ البحث"
              >
                <Search className="h-5 w-5 ml-2" />
                بحث
              </Button>
            </div>
          </div>

          {/* الفلاتر الشائعة */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">المجالات الشائعة:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularFilters.map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* زر الفلاتر المتقدمة */}
          <Button
            variant="outline"
            className="bg-transparent border-white/30 text-white hover:bg-white/10"
          >
            <Filter className="h-4 w-4 ml-2" />
            فلاتر متقدمة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;