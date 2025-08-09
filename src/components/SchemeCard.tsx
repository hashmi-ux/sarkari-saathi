import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Gift, CheckCircle } from "lucide-react";
import { Scheme } from "@/data/schemes";

interface SchemeCardProps {
  scheme: Scheme;
}

export const SchemeCard = ({ scheme }: SchemeCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg leading-tight">{scheme.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {scheme.category}
          </Badge>
        </div>
        <CardDescription className="text-sm">
          {scheme.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Users className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Eligibility</p>
              <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Gift className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Benefits</p>
              <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full" 
          asChild
        >
          <a 
            href={scheme.applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            Apply Now
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};