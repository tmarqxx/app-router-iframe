import { type ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="h-12 rounded-2xl bg-indigo-800 px-4 py-2 text-lg font-bold text-white"
    >
      {props.children}
    </button>
  );
}
