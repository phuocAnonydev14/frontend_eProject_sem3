'use client'

import {PropsWithChildren} from "react";
import {Layout} from "antd";
import MenuContent from "@/app/admin/components/MenuContent";

export default function AdminLayout({children}:PropsWithChildren) {
	return <div className={"flex"}>
			<Layout.Sider
				
				width={200}
			>
				<div style={{height:"80dvh"}}>
				<MenuContent/>
				</div>
			</Layout.Sider>
			{children}
	</div>
}