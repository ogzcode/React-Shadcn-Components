/* eslint-disable react/prop-types */
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { ChevronDown, X, Check } from "lucide-react"



const Item = ({ label, value, checked, onChecked }) => {
    return (
        <div onClick={() => onChecked(value)} className="relative flex gap-2 w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50">
            {checked && <Check className="h-4 w-4" />}
            <span>{label}</span>
        </div>
    )
}

const Header = ({ isSelectAll, search, onChangeSearch, onChangeSelectAll }) => {
    const handleSelectAll = () => {
        if (isSelectAll) {
            onChangeSelectAll()
        }
        else {
            onChangeSelectAll("all")
        }
    }
    return (
        <div className="flex justify-between items-center gap-4 mb-2 border-b border-slate-200 pb-2">
            <Checkbox checked={isSelectAll} onCheckedChange={() => handleSelectAll()} />
            <Input placeholder="Search" className="py-1 px-2 h-8 rounded" value={search} onChange={(e) => onChangeSearch(e.target.value)} />
        </div>
    )
}

export default function MultiSelect({ options, selectedList, onChangeSelectedList }) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')

    const handleSelect = (value) => {
        let copy = [...selectedList]

        if (copy.includes(value)) {
            copy = copy.filter((item) => item !== value)
        }
        else {
            copy.push(value)
        }

        onChangeSelectedList(copy)
    }

    const handleSelectAll = (type = null) => {
        if (type === 'all') {
            onChangeSelectedList(options.map((option) => option.value))
        }
        else {
            onChangeSelectedList([])
        }
    }

    const getFilteredOptionsTemplate = () => {
        const filtered = options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))

        if (filtered.length === 0) {
            return (
                <div className="text-center text-sm">
                    No options found
                </div>
            )
        }
        else {
            return filtered.map((option, index) => {
                return (
                    <Item
                        key={index}
                        label={option.label}
                        value={option.value}
                        checked={selectedList.includes(option.value)}
                        onChecked={handleSelect}
                    />
                )
            })
        }
    }

    const selectedItemsTemplate = () => {
        if (selectedList.length === 0) {
            return "Select an option"
        }
        else if (selectedList.length === 1) {
            return options.find((option) => option.value === selectedList[0]).label
        }
        else {
            return `${selectedList.length} items selected`
        }
    }

    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" onClick={() => setOpen(true)} className="font-normal flex justify-between items-center min-w-[20rem]">
                        <span>
                            {selectedItemsTemplate()}
                        </span>
                        <div className="flex items-center gap-2">
                            {selectedList.length > 0 && (
                                <X className="h-4 w-4 opacity-50" onClick={(e) => {
                                    e.stopPropagation()
                                    onChangeSelectedList([])
                                }}
                                />
                            )}
                            <span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </span>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2 w-[20rem]">
                    <Header
                        isSelectAll={options.length === selectedList.length}
                        search={search}
                        onChangeSearch={setSearch}
                        onChangeSelectAll={handleSelectAll}
                    />

                    <ScrollArea className={
                        search !== "" ? "max-h-[10rem]" : "h-[10rem]"
                    }>
                        {getFilteredOptionsTemplate()}
                    </ScrollArea>
                </PopoverContent>
            </Popover>
        </div>
    )
}