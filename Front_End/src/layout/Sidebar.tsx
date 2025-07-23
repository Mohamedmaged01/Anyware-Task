import {
  Home,
  Calendar,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Megaphone,
} from "lucide-react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  menuItems?: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

export function Sidebar({ activeTab, onTabChange, menuItems }: SidebarProps) {
  const { t } = useTranslation();
  const items = menuItems || [
    { id: "dashboard", label: t("dashboard", "Dashboard"), icon: Home },
    { id: "schedule", label: t("schedule", "Schedule"), icon: Calendar },
    { id: "courses", label: t("courses", "Courses"), icon: BookOpen },
    {
      id: "gradebook",
      label: t("gradebook", "Gradebook"),
      icon: GraduationCap,
    },
    {
      id: "performance",
      label: t("performance", "Performance"),
      icon: TrendingUp,
    },
    {
      id: "announcements",
      label: t("announcements", "Announcements"),
      icon: Megaphone,
    },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#334155",
          color: "#fff",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Coligo
        </Typography>
      </Toolbar>
      <List>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemButton
              key={item.id}
              selected={activeTab === item.id}
              onClick={() => onTabChange(item.id)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#14b8a6",
                  color: "#fff",
                  "& .MuiListItemIcon-root": { color: "#fff" },
                },
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#334155",
                  "& .MuiListItemIcon-root": { color: "#334155" },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeTab === item.id ? "#fff" : "#cbd5e1",
                }}
              >
                <Icon className="w-5 h-5" />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
