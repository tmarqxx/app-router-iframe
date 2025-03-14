import { type InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="mx-1 h-10 appearance-none rounded-md border border-slate-400/25 bg-slate-300/35 p-2 shadow-sm shadow-cyan-700/35 outline-blue-600"
    >
      {props.children}
    </input>
  );
}
