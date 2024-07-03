import { useState } from 'react';
import multiselectdata from '../data/multiselect.json';
import MultipleSelect from '@/custom-components/multi-select/MultiSelect';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const codeString =
    `/*
data = [
    {
        value: '1',
        label: 'Option 1'
    },
    {
        value: '2',
        label: 'Option 2'
    },
    {
        value: '3',
        label: 'Option 3'
    },
    {
        value: '4',
        label: 'Option 4'
    },
    {
        value: '5',
        label: 'Option 5'
    }
]
*/
    
    
<MultipleSelect
    options={data}  // data is the list of options
    selectedList={selectedList} // selectedList is the list of selected options
    onChangeSelectedList={setSelectedList} // onChangeSelectedList is the function to update the selectedList
/>
`

const reqString =
    `npx shadcn-ui@latest add button
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add input
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add checkbox

npm install lucide-react
`

export default function MultiSelectPage() {
    const [selectedList, setSelectedList] = useState([]);

    return (
        <div className="p-8 col-span-3 overflow-y-scroll">
            <div className='bg-slate-50 w-full rounded h-48 flex justify-center items-center mb-8'>
                <MultipleSelect
                    options={multiselectdata.data}
                    selectedList={selectedList}
                    onChangeSelectedList={setSelectedList}
                />
            </div>
            <h1 className='text-xl font-medium text-slate-800'>Usage</h1>
            <SyntaxHighlighter language="jsx" style={dracula}>
                {codeString}
            </SyntaxHighlighter>

            <h1 className='text-base font-medium text-slate-700 mt-8'>Requirements</h1>
            <SyntaxHighlighter language="javascript" style={dracula}>
                {reqString}
            </SyntaxHighlighter>

        </div>
    )
}