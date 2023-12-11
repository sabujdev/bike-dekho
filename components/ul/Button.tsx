import { cn } from "@/lib/uitils";
import { VariantProps, cva } from "class-variance-authority";

export const buttonVariants = cva(
  "eq inline-block whitespace-nowrap rounded-lg border px-12 py-4 text-center text-lg disabled:cursor-default disabled:border-gray disabled:bg-gray disabled:text-black",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white border-black hover:bg-black/90 hover:border-black/90",
        secondary:
          "bg-alartColor text-white border-alartColor hover:bg-alartColor/90 hover:border-alartColor/90",
        danger:
          "bg-red text-white border-red hover:bg-red/90 hover:border-red/90",
        outline:
          "bg-transparent text-black border-black hover:bg-black hover:text-white",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  variant,
  size,
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        isLoading && "flex items-center justify-center gap-2.5"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
