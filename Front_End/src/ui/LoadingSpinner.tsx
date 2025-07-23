export function LoadingSpinner({
  size = 32,
  color = "teal-500",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-b-2 border-${color}`}
      ></div>
    </div>
  );
}
