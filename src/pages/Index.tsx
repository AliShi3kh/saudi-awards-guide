import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import AwardCard from "@/components/AwardCard";
import ConsultantCard from "@/components/ConsultantCard";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, TrendingUp, Users, Award, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-awards.jpg";
import consultingImage from "@/assets/consulting-image.jpg";
import newsImage from "@/assets/news-image.jpg";

const Index = () => {
  // بيانات تجريبية للجوائز
  const featuredAwards = [
    {
      title: "جائزة الملك عبدالعزيز للجودة",
      organization: "المركز الوطني للتنافسية",
      field: "التميز والجودة",
      category: "منظمات",
      value: "حتى 500,000 ر.س",
      deadline: "15 مارس 2024",
      status: "مفتوحة" as const,
      scope: "وطني",
      description: "جائزة تهدف إلى تحفيز التميز في الأداء وتطبيق معايير الجودة العالمية"
    },
    {
      title: "جائزة التعليم للتميز",
      organization: "وزارة التعليم",
      field: "التعليم",
      category: "أفراد",
      value: "حتى 200,000 ر.س",
      deadline: "30 أبريل 2024",
      status: "مفتوحة" as const,
      scope: "وطني",
      description: "تكريم المعلمين والتربويين المتميزين في أدائهم وإسهاماتهم التعليمية"
    },
    {
      title: "جائزة الابتكار في الصحة",
      organization: "وزارة الصحة",
      field: "الصحة",
      category: "فرق العمل",
      value: "حتى 300,000 ر.س",
      deadline: "20 مايو 2024",
      status: "قريباً" as const,
      scope: "وطني",
      description: "تشجيع الابتكار والحلول الطبية المتقدمة في القطاع الصحي"
    },
    {
      title: "جائزة المسؤولية المجتمعية",
      organization: "وزارة الموارد البشرية",
      field: "التنمية المجتمعية",
      category: "منظمات",
      value: "حتى 150,000 ر.س",
      deadline: "10 فبراير 2024",
      status: "مغلقة" as const,
      scope: "وطني",
      description: "تقدير الشركات والمؤسسات التي تساهم في التنمية المجتمعية"
    }
  ];

  // بيانات تجريبية للمستشارين
  const featuredConsultants = [
    {
      name: "د. محمد العتيبي",
      specialty: "استشاري تحضير ملفات التقديم",
      experience: "15 سنة",
      description: "خبير في إعداد ملفات التقديم للجوائز المحلية والدولية مع سجل حافل من النجاحات",
      rating: 4.9,
      consultations: 250,
      fields: ["التعليم", "الصحة", "الابتكار"]
    },
    {
      name: "أ. فاطمة الزهراني",
      specialty: "مستشارة تأسيس الجوائز",
      experience: "12 سنة",
      description: "متخصصة في تصميم وتطوير الجوائز المؤسسية وإعداد لوائح التقييم والمعايير",
      rating: 4.8,
      consultations: 180,
      fields: ["تأسيس الجوائز", "لوائح التقييم", "الحوكمة"]
    },
    {
      name: "د. أحمد الشهري",
      specialty: "خبير استراتيجيات التقديم",
      experience: "10 سنوات",
      description: "مختص في وضع الاستراتيجيات الفائزة للتقديم على الجوائز الكبرى والمرموقة",
      rating: 4.7,
      consultations: 160,
      fields: ["الاستراتيجيات", "التخطيط", "التحليل"]
    }
  ];

  // بيانات تجريبية للأخبار
  const latestNews = [
    {
      title: "إعلان النتائج النهائية لجائزة الأمير محمد بن سلمان للابتكار",
      excerpt: "أعلنت اللجنة المنظمة لجائزة الأمير محمد بن سلمان للابتكار عن النتائج النهائية للدورة الثالثة",
      date: "15 يناير 2024",
      category: "نتائج",
      readTime: "5 دقائق",
      image: newsImage
    },
    {
      title: "فتح باب التقديم لجوائز التميز الحكومي 2024",
      excerpt: "أعلن معهد الإدارة العامة عن فتح باب التقديم لجوائز التميز الحكومي في نسختها الجديدة",
      date: "12 يناير 2024",
      category: "إعلانات",
      readTime: "3 دقائق",
      image: heroImage
    },
    {
      title: "ورشة عمل: كيفية إعداد ملف تقديم متميز للجوائز",
      excerpt: "ينظم مركز الجوائز السعودي ورشة عمل تدريبية حول أفضل الممارسات في إعداد ملفات التقديم",
      date: "10 يناير 2024",
      category: "فعاليات",
      readTime: "2 دقيقة",
      image: consultingImage
    }
  ];

  // إحصائيات المنصة
  const platformStats = [
    { label: "جائزة مدرجة", value: "350+", icon: Award },
    { label: "مستشار معتمد", value: "75+", icon: Users },
    { label: "مرشح مدعوم", value: "1,200+", icon: TrendingUp },
    { label: "نجاح في التقديم", value: "85%", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* الهيدر */}
      <Header />

      {/* قسم البحث الرئيسي */}
      <SearchSection />

      {/* إحصائيات المنصة */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الجوائز المميزة */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">الجوائز المميزة</h2>
              <p className="text-muted-foreground">اكتشف أحدث الجوائز المتاحة للتقديم</p>
            </div>
            <Button variant="outline" className="group">
              عرض جميع الجوائز
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredAwards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
        </div>
      </section>

      {/* المستشارون المميزون */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">مستشارون مميزون</h2>
              <p className="text-muted-foreground">احصل على استشارة من خبراء متخصصين</p>
            </div>
            <Button variant="outline" className="group">
              جميع المستشارين
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredConsultants.map((consultant, index) => (
              <ConsultantCard key={index} {...consultant} />
            ))}
          </div>
        </div>
      </section>

      {/* أحدث الأخبار */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">أحدث الأخبار</h2>
              <p className="text-muted-foreground">تابع آخر أخبار وتطورات عالم الجوائز</p>
            </div>
            <Button variant="outline" className="group">
              جميع الأخبار
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">هل تحتاج مساعدة في التقديم؟</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            احصل على استشارة مجانية من خبرائنا المعتمدين وزيد فرص نجاحك في الحصول على الجوائز
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-hover"
            >
              احجز استشارة مجانية
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              تعرف على خدماتنا
            </Button>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Index;
