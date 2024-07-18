import MultiSelectTree from "@/components/extra-ui/multi-select-tree/MultiSelectTree";
import { useState } from "react";


export default function Page() {
    const [selectedList, setSelectedList] = useState([]);
    const items = [
        {
          label: "Option 1",
          value: "option1",
          children: [
            {
              label: "Option 1.1",
              value: "option1.1"
            },
            {
              label: "Option 1.2",
              value: "option1.2"
            }
          ]
        },
        {
          label: "Option 2",
          value: "option2",
          children: [
            {
              label: "Option 2.1",
              value: "option2.1"
            },
            {
              label: "Option 2.2",
              value: "option2.2"
            },
            {
              label: "Option 2.3",
              value: "option2.3"
            }
          ]
        },
        {
          label: "Option 3",
          value: "option3",
          children: [
            {
              label: "Option 3.1",
              value: "option3.1"
            },
            {
              label: "Option 3.2",
              value: "option3.2"
            },
            {
              label: "Option 3.3",
              value: "option3.3"
            },
            {
              label: "Option 3.4",
              value: "option3.4"
            }
          ]
        }
      ]

    return (
        <div className="flex justify-center items-center border border-stone-300 min-h-40 rounded-md">
            <MultiSelectTree
                options={items}
                selectedList={selectedList}
                onChangeSelectedList={setSelectedList}
            />
        </div>
    );
}