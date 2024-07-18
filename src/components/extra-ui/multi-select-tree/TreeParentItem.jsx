/* eslint-disable react/prop-types */
import { Check } from "lucide-react"


export const TreeParentItem = ({
    checked,
    label,
    onSelectAllItems,
  }) => {
    return (
      <div className='flex gap-2 items-center' onClick={onSelectAllItems}>
        <div
          className="peer flex justify-center items-center h-4 w-4 shrink-0 rounded-sm border border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900"
          onClick={onSelectAllItems}
          data-state={checked ? 'checked' : 'unchecked'}
        >
          <input
            type="checkbox"
            className='appearance-none'
          />
          {checked && <Check className="h-4 w-4" />}
        </div>
        <span className="text-sm">{label}</span>
      </div>
    )
  }