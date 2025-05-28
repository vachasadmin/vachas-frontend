
import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export interface ComplianceBadgeProps {
  showGDPR?: boolean;
  showSOC2?: boolean;
  showHIPAA?: boolean;
}

const ComplianceBadges = ({ 
  showGDPR = true, 
  showSOC2 = true, 
  showHIPAA = true 
}: ComplianceBadgeProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-center">
      {showGDPR && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="bg-muted/50 hover:bg-muted flex items-center gap-1 cursor-help">
              <ShieldCheck className="h-3 w-3" />
              GDPR Compliant
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs max-w-xs">
              Our services comply with the General Data Protection Regulation (GDPR) for users in the European Union.
            </p>
          </TooltipContent>
        </Tooltip>
      )}
      
      {showSOC2 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="bg-muted/50 hover:bg-muted flex items-center gap-1 cursor-help">
              <ShieldCheck className="h-3 w-3" />
              SOC2 Certified
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs max-w-xs">
              We maintain SOC2 Type II compliance, demonstrating our commitment to secure data handling practices.
            </p>
          </TooltipContent>
        </Tooltip>
      )}
      
      {showHIPAA && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="bg-muted/50 hover:bg-muted flex items-center gap-1 cursor-help">
              <ShieldCheck className="h-3 w-3" />
              HIPAA Compliant
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs max-w-xs">
              Our platform is designed to meet Health Insurance Portability and Accountability Act requirements for healthcare providers.
            </p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default ComplianceBadges;
