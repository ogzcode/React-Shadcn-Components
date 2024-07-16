import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function CustomSelect({ options, value, onChange, width, placeholder = "Select" }) {
    const getValue = () => {
        return options.length > 0 ? options.find((option) => option.value === value)?.label : placeholder
    }

    return (
        <Select
            value={value}
            onValueChange={(value) => onChange(value)}
        >
            <SelectTrigger style={{ width: width }} >
                <SelectValue placeholder={getValue()} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>

    )
}


