import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Calendar, User } from "lucide-react";

interface ConsultantCardProps {
  name: string;
  specialty: string;
  experience: string;
  description: string;
  rating: number;
  consultations: number;
  avatar?: string;
  fields: string[];
}

const ConsultantCard = ({
  name,
  specialty,
  experience,
  description,
  rating,
  consultations,
  avatar,
  fields
}: ConsultantCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .slice(0, 2);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
      <CardHeader className="text-center pb-4">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarImage src={avatar} alt={`صورة ${name}`} />
            <AvatarFallback className="text-lg font-bold bg-primary/10 text-primary">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-card-foreground">
              {name}
            </h3>
            <p className="text-primary font-semibold">
              {specialty}
            </p>
            
            {/* تقييم المستشار */}
            <div className="flex items-center justify-center space-x-reverse space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? "text-secondary fill-secondary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({rating}/5)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* معلومات الخبرة */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 ml-1" />
            <span>خبرة {experience}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 ml-1" />
            <span>{consultations} استشارة</span>
          </div>
        </div>

        {/* مجالات التخصص */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-card-foreground">مجالات التخصص:</h4>
          <div className="flex flex-wrap gap-2">
            {fields.map((field) => (
              <Badge key={field} variant="secondary" className="text-xs">
                {field}
              </Badge>
            ))}
          </div>
        </div>

        {/* نبذة مختصرة */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-card-foreground">نبذة مختصرة:</h4>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full"
          aria-label={`احجز استشارة مع ${name}`}
        >
          احجز استشارة
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ConsultantCard;