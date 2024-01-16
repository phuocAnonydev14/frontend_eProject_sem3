"use client"

import {useRouter} from "next/navigation";
import {Button, Dropdown, Input, Switch, theme} from "antd";
import {faPhotoFilm, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {useAppContext} from "@/app/providers/AppProvider";
import styles from "./styles.module.scss"
import {EditOutlined, LogoutOutlined, ProfileOutlined} from "@ant-design/icons";
import {useEffect} from "react";

export const Header = () => {
	
	const router = useRouter()
	const {setIsDarkTheme} = useAppContext()
	const {token} = theme.useToken()
	const {account, setAccount} = useAppContext()
	
	useEffect(() => {
		const account = JSON.parse(localStorage.getItem("accessToken"))
		setAccount(account)
	}, []);
	
	
	return <div className={`h-12 w-full flex justify-between items-center p-6 ${styles.wrapper}`}
							style={{background: token.colorBgBase}}
	>
		<div>
			<img onClick={() => router.push("/")} style={{width: 50, height: 50, cursor: "pointer"}}
					 src="https://bizweb.dktcdn.net/100/091/193/themes/789472/assets/logo.svg?1701059146562" alt=""/>
		</div>
		<div className={"flex gap-2 items-center"}>
			<Switch onChange={(checked) => setIsDarkTheme(checked)} checkedChildren={"💪"} unCheckedChildren={"🤥"}/>
			{!account ?
				<Button icon={<FontAwesomeIcon icon={faUser}/>} type={"primary"}
								onClick={() => router.push("/auth/sign-in")}>Login</Button>
				:
				<div>
					<Dropdown menu={{
						items: [{label: "Profile", key: "profile", icon: <ProfileOutlined/>}, {
							label: "Manage",
							key: "admin/account",
							icon: <EditOutlined/>
						},
							{
								label: "Logout",
								key: "auth/sign-in",
								danger: true,
								icon: <LogoutOutlined/>
							}], onClick: ({key}) => {
							localStorage.removeItem("accessToken")
							router.push(`/${key}`)
							
						}
					}}>
						<Button icon={<FontAwesomeIcon icon={faUser}/>} type={"text"}>{account.username}</Button>
					</Dropdown>
					<Button type={"text"} icon={<FontAwesomeIcon icon={faPhotoFilm}/>}
									onClick={() => router.push('/order')}>Order</Button>
				</div>
			}
		</div>
	</div>
}