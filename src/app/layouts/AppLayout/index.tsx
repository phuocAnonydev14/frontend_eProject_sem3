"use client"

import {Header} from "@/app/layouts/AppLayout/Header";
import {PropsWithChildren} from "react";
import {usePathname} from "next/navigation";
import {Layout, theme} from "antd";

export function AppLayout({children}: PropsWithChildren) {
	
	const pathname = usePathname()
	const {token} = theme.useToken()
	if (pathname.includes("auth")) return <div>{children}</div>
	
	return <Layout style={{background: token.colorBgBase}}>
		<Header />
		<div style={{background: token.colorBgBase,minHeight:"95dvh"}}>
			{children}
		</div>
		<div>
		</div>
	</Layout>
}