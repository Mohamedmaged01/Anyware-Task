import { Card as MuiCard, CardContent } from "@mui/material";

export function Card({
  children,
  className = "",
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}) {
  return (
    <MuiCard className={className} component={Component} {...props}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}
