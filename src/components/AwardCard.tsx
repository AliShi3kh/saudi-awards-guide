import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Building2, Trophy, Clock } from "lucide-react";

interface AwardCardProps {
  title: string;
  organization: string;
  field: string;
  category: string;
  value: string;
  deadline: string;
  status: "مفتوحة" | "مغلقة" | "قريباً";
  scope: string;
  description?: string;
}

const AwardCard = ({
  title,
  organization,
  field,
  category,
  value,
  deadline,
  status,
  scope,
  description
}: AwardCardProps) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "مفتوحة":
        return "default";
      case "مغلقة":
        return "destructive";
      case "قريباً":
        return "secondary";
      default:
        return "default";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "مفتوحة":
        return "status-open";
      case "مغلقة":
        return "status-closed";
      case "قريباً":
        return "status-soon";
      default:
        return "status-open";
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-gradient-to-b from-card to-muted/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge className={`${getStatusClass(status)} font-medium`}>
            {status}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {scope}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold text-card-foreground leading-tight line-clamp-2 mb-2">
          {title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-2">
          <Building2 className="h-4 w-4 ml-2 flex-shrink-0" />
          <span className="text-sm">{organization}</span>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          {/* المجال والفئة */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {field}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>

          {/* قيمة الجائزة */}
          <div className="flex items-center text-primary font-semibold">
            <Trophy className="h-4 w-4 ml-2" />
            <span>{value}</span>
          </div>

          {/* آخر موعد للتقديم */}
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 ml-2" />
            <span className="text-sm">آخر موعد: {deadline}</span>
          </div>

          {/* وصف مختصر */}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          className="w-full" 
          variant={status === "مفتوحة" ? "default" : "outline"}
          disabled={status === "مغلقة"}
          aria-label={`عرض تفاصيل جائزة ${title}`}
        >
          {status === "مفتوحة" ? "التفاصيل والتقديم" : "عرض التفاصيل"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AwardCard;