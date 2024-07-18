/* eslint-disable react/prop-types */
import { useEffect } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Item } from "./Item";
import { TreeParentItem } from "./TreeParentItem";

export const TreeItem = ({ label, value, child, selectedList, onChecked }) => {

    useEffect(() => {
        let itemChild = child.map((child) => child.value);

        // If the parent item is selected and none of the child items are selected
        if (
            selectedList.includes(value) &&
            selectedList.every((item) => !itemChild.includes(item))
        ) {
            onChecked(selectedList.filter((item) => item !== value));
        }
        // If the parent item is not selected and all child items are selected
        else if (
            !selectedList.includes(value) &&
            itemChild.every((item) => selectedList.includes(item))
        ) {
            onChecked([...selectedList, value]);
        }

    }, [selectedList, value, child, onChecked]);

    const handleSelectAllItems = (value) => {
        let itemChild = child.map((child) => child.value)

        // If the parent item is selected, unselect all its children and the parent item
        if (selectedList.includes(value)) {
            let copy = [...selectedList]
            copy = copy.filter((item) => !itemChild.includes(item))
            copy = copy.filter((item) => item !== value)
            onChecked(copy)
        }
        // If the parent item is not selected, select all its children and the parent item
        else {
            onChecked([...selectedList, ...itemChild, value])
        }
    };

    const handleCheckChildItems = (value) => {
        let copy = [...selectedList]

        // If the child item is selected, unselect it
        if (selectedList.includes(value)) {
            copy = copy.filter((item) => item !== value)
        }
        // If the child item is not selected, select it
        else {
            copy.push(value)
        }

        onChecked(copy)
    }

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={value}>
                <AccordionTrigger>
                    <TreeParentItem
                        label={label}
                        checked={selectedList.includes(value)}
                        onSelectAllItems={() => handleSelectAllItems(value)}
                    />
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pl-4">
                        {child && child.map((child, index) => (
                            <Item
                                key={index}
                                label={child.label}
                                value={child.value}
                                checked={selectedList.includes(child.value)}
                                onChecked={handleCheckChildItems}
                            />
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}