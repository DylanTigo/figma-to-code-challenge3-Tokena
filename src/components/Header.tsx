import { ChevronsUpDown, Moon } from "lucide-react";
import Button from "./ui/Button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 text-xs bg-white dark:bg-black">
      <div className="flex gap-4 items-center">
        <div className="space-y-0.5">
          <h1 className="text-sm font-semibold">Dashboard</h1>
          <p className="text-gray-dark font-medium">
            Welcome back, John Doe
          </p>
        </div>
        <Button>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0015 10.125C12.0015 10.7463 12.5051 11.25 13.1265 11.25C13.7478 11.25 14.2515 10.7463 14.2515 10.125C14.2515 9.5037 13.7478 9 13.1265 9C12.5051 9 12.0015 9.5037 12.0015 10.125Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M1.50146 8.25C1.50146 5.42157 1.50146 4.00736 2.38015 3.12868C3.25883 2.25 4.67304 2.25 7.5015 2.25H10.5015C11.1989 2.25 11.5477 2.25 11.8338 2.32667C12.6103 2.53472 13.2167 3.1412 13.4248 3.91765C13.5015 4.20378 13.5015 4.55252 13.5015 5.25M7.5015 5.25H12.0015C14.1228 5.25 15.1835 5.25 15.8425 5.90901C16.5015 6.56802 16.5015 7.6287 16.5015 9.75V11.25C16.5015 13.3713 16.5015 14.4319 15.8425 15.091C15.1835 15.75 14.1228 15.75 12.0015 15.75H9.37538"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7.5 12.75H4.5M4.5 12.75H1.5M4.5 12.75V15.75M4.5 12.75V9.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Connect wallet
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <div className="relative outline outline-1 outline-gray rounded-lg text-gray-dark dark:text-gray-light">
          <select name="divice" className="w-[90px] h-9 px-5 py-2.5 bg-white dark:bg-black">
            <option className="px-5 py-2.5" value="usd">USD</option>
            <option className="px-5 py-2.5" value="eur">EUR</option>
            <option className="px-5 py-2.5" value="xaf">XAF</option>
            <option className="px-5 py-2.5" value="xag">XAG</option>
          </select>
          <ChevronsUpDown className="absolute right-7 top-1/2 -translate-y-1/2 size-4" />
        </div>
        <button type="button" className="p-2 outline outline-1 outline-gray rounded-lg text-gray-dark dark:text-gray-light">
          <Moon className="size-5"/>
        </button>
      </div>

    </header>
  );
};
