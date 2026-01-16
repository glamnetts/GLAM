interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className="flex items-center gap-1">
      <span 
        className={`font-black tracking-tighter ${sizeClasses[size]} ${textColor}`}
        style={{ 
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          letterSpacing: '-0.05em',
          fontWeight: 900
        }}
      >
        GLAM
      </span>
      <span 
        className={`font-light tracking-widest ${sizeClasses[size]} ${textColor}`}
        style={{ 
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          letterSpacing: '0.2em',
          fontWeight: 200,
          opacity: 0.85
        }}
      >
        NET
      </span>
    </div>
  );
};

export default Logo;
