'use client'

import React, {useMemo} from 'react';
import {Menu} from 'antd';
import SubMenu from "antd/es/menu/SubMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePathname, useRouter} from "next/navigation";
import {faEnvelope, faHouse} from "@fortawesome/free-solid-svg-icons";


export enum RoleEnum {
	USER = "user",
	ADMIN = "admin",
	HRM = "hrm",
	MANAGER = "manager"
}

const dashBoardNavTree = [
	{
		key: 'account',
		path: `/admin/account`,
		title: 'Account',
		icon: faHouse,
		breadcrumb: false,
		children: [],
	},
	{
		key: 'order',
		path: `/mail/inbox`,
		title: 'Order',
		icon: faEnvelope,
		breadcrumb: false,
		children: []
	},
];

const navigationConfig = [...dashBoardNavTree];


const MenuContent = () => {
	const router = useRouter()
	const pathname = usePathname()
	const renderMenuItems = useMemo(() => (data: any[]) => {
		return data.map(item => {
			if (item.children && item.children.length > 0) {
				return (
					<SubMenu
						key={item.key}
						title={<p style={{fontWeight: 500}}>{item.title}</p>}
						icon={<div style={{minWidth: 18}}>
							<FontAwesomeIcon icon={item.icon} style={{fontSize: 15}}/>
						</div>}
					>
						{renderMenuItems([...item.children])}
					</SubMenu>
				);
			}
			
			return (
				<Menu.Item
					onClick={() => router.push(item.path)}
					key={item.key}
					icon={<div style={{minWidth: 24}}>
						<FontAwesomeIcon icon={item.icon} style={{fontSize: 15}}/>
					</div>}
				>
					<span style={{fontWeight: 500}}>{item.title}</span>
				</Menu.Item>
			);
		});
	}, [pathname])
	
	return (
		<Menu
			style={{height: '100%', borderRight: 0, overflow: "auto"}}
			defaultSelectedKeys={[pathname.replace("/", "")]}
			mode={'inline'}
		>
			{renderMenuItems([...navigationConfig])}
		</Menu>
	);
};

export default MenuContent
