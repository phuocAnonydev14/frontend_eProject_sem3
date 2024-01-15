'use client'

import {useState} from "react";
import {useDebounce} from "@/lib/hooks/useDebounce";

export default function OrderPage(){
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounce<string>(value, 500)
	
	return <div>
	
	</div>
}