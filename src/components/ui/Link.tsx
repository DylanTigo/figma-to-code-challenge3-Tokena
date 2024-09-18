import { NavLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const Link = ({ to, children, className }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "rounded-lg px-3 py-2 flex gap-1.5 items-center text-xs " +
        (isActive
          ? " text-white bg-blue dark:bg-blue/70"
          : " text-black bg-white hover:bg-blue/10 dark:text-white dark:bg-black dark:outline dark:outline-1 dark:outline-black") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </NavLink>
  );
};

export default Link;
