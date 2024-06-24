import { MessageCircleMore, Home, Globe, LayoutDashboard } from "lucide-react";

export const Navigation = [
  { id: 1, name: "Home", href: "/", icon: Home },
  { id: 2, name: "Ask AI", href: "/dashboard", icon: MessageCircleMore },
  {
    id: 3,
    name: "Discover",
    href: "/dashboard/discover",
    icon: Globe,
  },
];
