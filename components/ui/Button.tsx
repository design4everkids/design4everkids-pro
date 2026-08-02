type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "px-8 py-4 rounded-full font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700",
    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}