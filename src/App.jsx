import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home as HomeIcon, List, User, Settings as SettingsIcon, PlusCircle, MinusCircle, Send, Bell, HelpCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Transactions from "./pages/Transactions.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import AddFunds from "./pages/AddFunds.jsx";
import WithdrawFunds from "./pages/WithdrawFunds.jsx";
import TransferFunds from "./pages/TransferFunds.jsx";
import Notifications from "./pages/Notifications.jsx";
import HelpSupport from "./pages/HelpSupport.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
  },
  {
    title: "Add Funds",
    to: "/add-funds",
    icon: <PlusCircle className="h-4 w-4" />,
  },
  {
    title: "Withdraw Funds",
    to: "/withdraw-funds",
    icon: <MinusCircle className="h-4 w-4" />,
  },
  {
    title: "Transfer Funds",
    to: "/transfer-funds",
    icon: <Send className="h-4 w-4" />,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <Bell className="h-4 w-4" />,
  },
  {
    title: "Help & Support",
    to: "/help-support",
    icon: <HelpCircle className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="add-funds" element={<AddFunds />} />
              <Route path="withdraw-funds" element={<WithdrawFunds />} />
              <Route path="transfer-funds" element={<TransferFunds />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="help-support" element={<HelpSupport />} />
              <Route path="payment-page" element={<PaymentPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;