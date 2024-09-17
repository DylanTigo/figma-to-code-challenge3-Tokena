type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variants?: "primary" | "secondary" | "ghost";
};

const Button = ( { className, children, variants = "primary", ...props }: ButtonProps ) => {

  let variantsStyle= "bg-blue text-white hover:bg-blue-2"
  if (variants === "secondary") {
    variantsStyle = "bg-white text-blue border border-blue hover:bg-blue/5"
  } else if (variants === "ghost") {
    variantsStyle = "bg-blue/5 text-blue hover:bg-blue/10"
  }

  return (
    <button className={`flex justify-center items-center transition gap-1.5 px-5 py-2.5 font-medium rounded-lg text-sm font-monaSans ${variantsStyle} ${className && className}`} {...props}> 
      {children}
    </button>
  );
};

export default Button;