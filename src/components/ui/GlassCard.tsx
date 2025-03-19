
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  interactive?: boolean;
  hoverEffect?: boolean;
}

const GlassCard = ({
  children,
  className,
  intensity = 'medium',
  interactive = false,
  hoverEffect = false,
  ...props
}: GlassCardProps) => {
  const intensityClasses = {
    light: 'bg-white/30 dark:bg-black/10 backdrop-blur-sm',
    medium: 'bg-white/50 dark:bg-black/20 backdrop-blur-md',
    heavy: 'bg-white/70 dark:bg-black/30 backdrop-blur-lg',
  };

  return (
    <div
      className={cn(
        'rounded-lg border border-white/20 dark:border-white/10 shadow-xl',
        intensityClasses[intensity],
        interactive && 'cursor-pointer transition-all duration-300',
        hoverEffect && 'hover:shadow-2xl hover:translate-y-[-2px] hover:border-white/30 dark:hover:border-white/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
