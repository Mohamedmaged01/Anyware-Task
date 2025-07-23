import Button from "@mui/material/Button";

export function Header({
  user,
  onLogout,
  children,
}: {
  user?: { username: string };
  onLogout?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome {user?.username},
          </h2>
          {children}
        </div>

        <div className="flex items-center gap-4">
          {onLogout && (
            <Button
              variant="contained"
              color="primary"
              onClick={onLogout}
              className="flex items-center gap-2"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
