type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary" | "ghost" | "disabled";
  small?: boolean;
};

const Badge = ({
  variant = "primary",
  className,
  small = false,
  children,
  ...props
}: BadgeProps) => {

  let badgeClass = "bg-black text-white hover:bg-blue-dark";
  if (variant === "secondary") {
    badgeClass = "bg-white text-gray-dark border border-gray-dark hover:bg-gray-light/50";
  } else if (variant === "ghost") {
    badgeClass = "bg-gray-light text-black hover:bg-gray/50";
  } else if (variant === "disabled") {
    badgeClass = "bg-white text-gray-light/15 border border-gray-light/15 cursor-not-allowed";
  }

  return (
    <div
      className={`flex justify-center items-center gap-1 font-semibold font-monaSans py-1 ${small ? "px-1.5 text-xxs" : " px-2 text-xs"} ${badgeClass} ${
        className && className
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
