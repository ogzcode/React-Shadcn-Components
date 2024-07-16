import CustomSelect from "@/components/extra-ui/CustomSelect";
import { useState } from "react";

export default function Page() {
    const [value, setValue] = useState('light');

    return (
        <div className="flex justify-center items-center border border-stone-300 min-h-40 rounded-md">
            <CustomSelect
                options={[
                    { value: 'light', label: 'Light' },
                    { value: 'dark', label: 'Dark' },
                    { value: 'system', label: 'System' },
                ]}
                value={value}
                onChange={(value) => setValue(value)}
                width='200px'
            />
        </div>
    );
}