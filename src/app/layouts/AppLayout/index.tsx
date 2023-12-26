"use client"

import {Header} from "@/app/layouts/AppLayout/Header";
import {PropsWithChildren} from "react";
import {usePathname} from "next/navigation";

export function AppLayout({children}: PropsWithChildren) {
	
	const pathname = usePathname()
	
	if (pathname.includes("auth")) return <div>{children}</div>
	
	return <div>
		<Header/>
		<div>
			{children}
		</div>
		<div>
		</div>
	</div>
}