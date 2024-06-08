import { SelectHTMLAttributes, forwardRef } from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends SelectHTMLAttributes<HTMLSelectElement> { }

const Select = forwardRef<HTMLSelectElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <select
                className={cn(
                    "flex h-10 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Select.displayName = "Select"

export { Select }
