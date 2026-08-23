type LogoProps = {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
};

const Logo = ({ className = "", showName = true, size = "sm" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-10",
    md: "h-14",
    lg: "h-26",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex items-center group ${className}`}>
        <span className={`font-space-grotesk font-bold ${textSizeClasses[size]} text-ele-text`}>
          christine
        </span>
        <span className={`font-space-grotesk font-bold ${textSizeClasses[size]} text-ele-text`}> 
          .dev
        </span>
    </div>
  );
};

export default Logo;