import { Logo } from "./ui/Logo";
import Link from "./ui/Link";
import UserProfile from "./ui/UserProfile";
import {
  Bell,
  ChartNoAxesColumn,
  ClipboardList,
  CreditCard,
  Headphones,
  House,
  Newspaper,
  ReceiptText,
  Settings,
  Wallet,
} from "lucide-react";

export const AsideMenu = () => {
  return (
    <aside className="flex flex-col justify-between px-3.5 py-4 gap-4 w-60 h-screen bg-white dark:bg-blue-dark">
      <div className="space-y-9">
        <Logo />
        <div className="flex flex-col gap-5">
          <p className="text-gray-dark text-sm font-medium">Menu</p>
          <nav className="flex flex-col gap-0.5 font-medium text-sm">
            <Link to="/">
              <House />
              Dashboard
            </Link>
            <Link to="/news">
              <Newspaper />
              News
            </Link>
            <Link to="/activities">
              <ChartNoAxesColumn />
              Activities
            </Link>
            <Link to="/cards">
              <CreditCard />
              Cards
            </Link>
            <Link to="/reports">
              <ClipboardList />
              Reports
            </Link>
            <Link to="/notifications">
              <Bell />
              Notifications
            </Link>
            <Link to="/billing">
              <Wallet />
              Billing
            </Link>
            <Link to="/invoices">
              <ReceiptText />
              Invoices
            </Link>
            <Link to="/help-center">
              <Headphones />
              Help center
            </Link>
            <Link to="/settings">
              <Settings />
              Settings
            </Link>
          </nav>
        </div>
      </div>
      <UserProfile />
    </aside>
  );
};
