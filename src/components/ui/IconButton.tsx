type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  icon: string;
  variants?: "primary" | "secondary";
};

const IconButton = ( { className, icon, variants = "primary", ...props }: IconButtonProps ) => {

  let variantsStyle= "border border-blue"
  if (variants === "secondary") {
    variantsStyle = ""
  }

  return (
    <button className={`flex justify-center items-center rounded-lg h-10 w-10 bg-white hover:bg-blue/5 transition ${variantsStyle} ${className && className}`} {...props}>
      <img src={icon} alt="" />
    </button>
  );
};

export default IconButton;