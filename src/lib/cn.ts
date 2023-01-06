import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Your one-stop shop for class names
 *
 * Joins classnames together with intuitive syntax,
 * merging conflicting tailwind classes in the process.
 * */
export default function cn(...classNames: Parameters<typeof clsx>) {
  return twMerge(clsx(classNames));
}
