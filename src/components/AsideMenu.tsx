import { Logo } from "./ui/Logo";
import Link from "./ui/Link";
import UserProfile from "./ui/UserProfile";

export const AsideMenu = () => {
  return (
    <aside className="flex flex-col justify-between px-3.5 py-4 gap-4 w-60 h-screen bg-white dark:bg-blue-dark">
      <div className="space-y-9">
        <Logo />
        <div className="flex flex-col gap-5">
          <p className="text-gray-dark text-sm font-medium">Menu</p>
          <nav className="flex flex-col gap-0.5 font-medium text-sm">
            <Link to="/">Dashboard</Link>
            <Link to="/news">News</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/cards">Cards</Link>
            <Link to="/reports">Reports</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/billing">Billing</Link>
            <Link to="/invoices">Invoices</Link>
            <Link to="/help-center">Help center</Link>
            <Link to="/settings">Settings</Link>
          </nav>
        </div>
      </div>
      <UserProfile />
    </aside>
  );
};
