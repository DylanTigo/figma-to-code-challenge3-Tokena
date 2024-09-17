type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
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

  let badgeClass = "bg-black text-white";
  if (variant === "secondary") {
    badgeClass = "bg-white text-gray-dark outline outline-1 outline-gray-dark";
  } else if (variant === "ghost") {
    badgeClass = "bg-gray-light text-black";
  } else if (variant === "disabled") {
    badgeClass = "bg-white text-gray-light outline outline-1 outline-gray-light cursor-not-allowed";
  }

  return (
    <span
      className={`inline-flex justify-center items-center gap-1 rounded-full font-semibold font-monaSans py-1 ${small ? "px-1.5 text-xxs" : " px-2 text-xs"} ${badgeClass} ${
        className && className
      }`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
