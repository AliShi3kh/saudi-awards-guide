import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* رقم الخطأ */}
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-bold text-foreground">الصفحة غير موجودة</h2>
          <p className="text-muted-foreground leading-relaxed">
            عذراً، الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها، أو قمت بكتابة عنوان خاطئ.
          </p>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="group">
            <a href="/">
              <Home className="h-4 w-4 ml-2" />
              العودة للرئيسية
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/awards">
              <Search className="h-4 w-4 ml-2" />
              تصفح الجوائز
            </a>
          </Button>
        </div>

        {/* اقتراحات مفيدة */}
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">يمكنك أيضاً:</p>
          <ul className="space-y-1">
            <li>• <a href="/consultants" className="text-primary hover:underline">استشر خبراءنا</a></li>
            <li>• <a href="/services" className="text-primary hover:underline">تعرف على خدماتنا</a></li>
            <li>• <a href="/contact" className="text-primary hover:underline">تواصل معنا</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
