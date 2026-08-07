import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-[15px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none px-6 py-3.5 min-h-12";

const variants = {
  primary: "bg-accent text-text-ondark hover:bg-accent-deep focus-visible:outline-accent",
  "primary-on-light": "bg-text-onlight text-surface-light hover:bg-accent-deep focus-visible:outline-accent",
  secondary:
    "border border-line-dark text-text-ondark hover:border-text-ondark-soft focus-visible:outline-accent",
  "secondary-on-light":
    "border border-line-light text-text-onlight hover:border-text-onlight-soft focus-visible:outline-accent",
  ghost: "text-text-ondark hover:text-accent-soft underline-offset-4 hover:underline px-0 py-0 min-h-0",
};

type Variant = keyof typeof variants;

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
}
interface ButtonAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
}
interface ButtonAsLink extends LinkProps {
  as: "link";
  variant?: Variant;
}

type Props = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const Button = forwardRef<HTMLElement, Props>((props, ref) => {
  const variant = props.variant ?? "primary";
  const cls = `${base} ${variants[variant]} ${props.className ?? ""}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, className: _c, ...rest } = props;
    return <a ref={ref as never} className={cls} {...rest} />;
  }
  if (props.as === "link") {
    const { as: _as, variant: _v, className: _c, ...rest } = props;
    return <Link ref={ref as never} className={cls} {...rest} />;
  }
  const { as: _as, variant: _v, className: _c, ...rest } = props;
  return <button ref={ref as never} className={cls} {...rest} />;
});
Button.displayName = "Button";
