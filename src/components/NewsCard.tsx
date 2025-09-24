import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  readTime?: string;
}

const NewsCard = ({
  title,
  excerpt,
  date,
  category,
  image,
  readTime = "3 دقائق"
}: NewsCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 overflow-hidden">
      {/* صورة الخبر */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`صورة ${title}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/30">أخبار</div>
          </div>
        )}
        
        {/* تصنيف الخبر */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-lg font-bold text-card-foreground leading-tight line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* مقتطف الخبر */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        {/* معلومات الخبر */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 ml-1" />
            <span>{date}</span>
          </div>
          <span>وقت القراءة: {readTime}</span>
        </div>

        {/* زر اقرأ المزيد */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group"
          aria-label={`اقرأ المزيد عن ${title}`}
        >
          اقرأ المزيد
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;