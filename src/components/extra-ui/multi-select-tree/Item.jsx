/* eslint-disable react/prop-types */
import { Checkbox } from "@/components/ui/checkbox"

export const Item = ({ label, value, checked, onChecked }) => {
    return (
      <div onClick={() => onChecked(value)} className="relative flex gap-2 w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50">
        <Checkbox checked={checked} />
        <span>{label}</span>
      </div>
    )
  }