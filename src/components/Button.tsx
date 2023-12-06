import { type ComponentPropsWithoutRef, type FC } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`py-2 px-3 border border-sky-400 rounded-lg bg-sky-600 text-white disabled:bg-sky-300 disabled:border-sky-100 ${className}}`}
      {...props}
    />
  );
};

export default Button;
