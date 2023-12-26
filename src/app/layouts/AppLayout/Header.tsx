"use client"

import {useRouter} from "next/navigation";
import {Button} from "antd";

export const Header = () => {
	
	const router = useRouter()
	
	return <div className={"h-12 w-full flex justify-between items-center p-6"}
							style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"}}>
		<div></div>
		<Button type={"primary"} onClick={() => router.push("/auth/sign-in")}>Login</Button>
	</div>
}