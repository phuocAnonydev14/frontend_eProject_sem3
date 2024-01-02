"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Card, Menu, Typography} from "antd";
import {useCallback, useState} from "react";
import {EditUser} from "@/app/profile/components/EditUser";

export default function Profile() {
	
	const [selectedKey, setSelectedKey] = useState('edit-user')
	
	const items = [
		{
			key: 'edit-user',
			label: 'Profile',
			icon: <FontAwesomeIcon icon={faUser}/>,
		},
		{
			key: 'change-password',
			label: 'Security',
			icon: <FontAwesomeIcon icon={faUser}/>
		},
		{
			key: 'notification',
			label: 'Notification',
			icon: <FontAwesomeIcon icon={faUser}/>
		},
	]
	
	
	const SelectionRender = useCallback(() => {
		switch (selectedKey) {
			case "edit-user": {
				return <EditUser/>
				break;
			}
			default: {
				return <EditUser/>
			}
		}
	}, [selectedKey])
	
	return <div style={{width:"90%",margin:"40px auto"}}>
		<Card className={"mt-6"} bodyStyle={{paddingBottom: 0, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
			<Typography.Title level={3}>
				Account security
			</Typography.Title>
			<Typography.Paragraph>
				Manage your account information and security
			</Typography.Paragraph>
			<Menu
				mode={'horizontal'}
				selectable={true}
				selectedKeys={[selectedKey]}
				style={{borderBottom: "none"}}
				onSelect={(item) => {
					// navigate(`/account/security/${item?.key}`);
					setSelectedKey(item.key)
				}}
				items={items}
			/>
		</Card>
		
		<Card>
			<SelectionRender/>
		</Card>
	</div>
}