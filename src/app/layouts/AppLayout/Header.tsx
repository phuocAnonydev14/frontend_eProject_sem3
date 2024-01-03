"use client"

import {useRouter} from "next/navigation";
import {Button, Input, Switch} from "antd";
import {faPhotoFilm, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {useAppContext} from "@/app/providers/AppProvider";

export const Header = () => {
	
	const router = useRouter()
	const {setIsDarkTheme} = useAppContext()
	
	return <div className={"h-12 w-full flex justify-between items-center p-6"}
							style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
		<div>
			<img onClick={() => router.push("/")} style={{width: 50, height: 50, cursor: "pointer"}}
					 src="https://bizweb.dktcdn.net/100/091/193/themes/789472/assets/logo.svg?1701059146562" alt=""/>
		</div>
		<div className={"flex gap-2 items-center"}>
			<Switch onChange={(checked) => setIsDarkTheme(checked)} checkedChildren={"💪"} unCheckedChildren={"🤥"}/>
			{/*<Button icon={<FontAwesomeIcon icon={faUser} />} type={"primary"} onClick={() => router.push("/auth/sign-in")}>Login</Button>*/}
			<Button icon={<FontAwesomeIcon icon={faUser}/>} type={"text"} onClick={() => router.push("/profile")}>Ho Huu
				Phuoc</Button>
			<Button type={"text"} icon={<FontAwesomeIcon icon={faPhotoFilm}/>}>Photos</Button>
		</div>
	</div>
}