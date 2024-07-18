/* eslint-disable react/prop-types */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { TreeItem } from "./TreeItem"

export default function MultiSelectTree({ options, selectedList, onChangeSelectedList }) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" onClick={() => setOpen(true)} className="font-normal flex justify-between items-center min-w-[20rem]">
                        <span>
                            {
                                selectedList?.length === 0 ? "Select items" :
                                    `${selectedList?.length} items selected`
                            }
                        </span>
                        <div className="flex gap-2 items-center">
                            {
                                selectedList?.length > 0 && (
                                    <X
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onChangeSelectedList([])
                                        }}
                                    />
                                )
                            }
                            <span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </span>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2 w-[20rem]">
                    <ScrollArea className="min-h-[10rem]">
                        {options.map((option, index) => (
                            <TreeItem
                                key={index}
                                label={option.label}
                                value={option.value}
                                child={option.children}
                                selectedList={selectedList}
                                onChecked={onChangeSelectedList}
                            />
                        ))}
                    </ScrollArea>
                </PopoverContent>
            </Popover>
        </div>
    )
}