import { forwardRef } from "react";
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

const fieldBase =
  "w-full rounded-lg border bg-surface-light px-4 py-3.5 text-base text-text-onlight placeholder:text-text-onlight-soft/70 outline-none transition-colors focus:border-accent";

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-form-error">
      {message}
    </p>
  );
}

interface LabelWrapProps {
  label: string;
  htmlFor: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}

export function FieldShell({ label, htmlFor, optional, error, children }: LabelWrapProps) {
  const errorId = `${htmlFor}-error`;
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-text-onlight mb-2">
        {label} {optional && <span className="text-text-onlight-soft font-normal">(optional)</span>}
      </label>
      {children}
      <ErrorText id={errorId} message={error} />
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & { error?: string };
export const TextField = forwardRef<HTMLInputElement, InputProps>(({ error, className, ...rest }, ref) => (
  <input
    ref={ref}
    className={`${fieldBase} ${error ? "border-form-error" : "border-line-light"} ${className ?? ""}`}
    aria-invalid={!!error}
    aria-describedby={error ? `${rest.id}-error` : undefined}
    {...rest}
  />
));
TextField.displayName = "TextField";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string };
export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(({ error, className, ...rest }, ref) => (
  <textarea
    ref={ref}
    className={`${fieldBase} resize-none min-h-36 ${error ? "border-form-error" : "border-line-light"} ${className ?? ""}`}
    aria-invalid={!!error}
    aria-describedby={error ? `${rest.id}-error` : undefined}
    {...rest}
  />
));
TextareaField.displayName = "TextareaField";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { error?: string };
export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(({ error, className, children, ...rest }, ref) => (
  <select
    ref={ref}
    className={`${fieldBase} ${error ? "border-form-error" : "border-line-light"} ${className ?? ""}`}
    aria-invalid={!!error}
    aria-describedby={error ? `${rest.id}-error` : undefined}
    {...rest}
  >
    {children}
  </select>
));
SelectField.displayName = "SelectField";
