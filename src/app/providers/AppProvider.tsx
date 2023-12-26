"use client"

import {PropsWithChildren} from "react";
import {useRouter} from "next/navigation";
import {ConfigProvider, theme} from "antd";
import { StyleProvider } from '@ant-design/cssinjs';
export default function AppProvider({children}:PropsWithChildren) {
	
	const router = useRouter()
	
	return <ConfigProvider
		theme={{
			token: {
				colorPrimary: '#2a2a2a',
				colorLink: '#131313',
				fontFamily: 'Lexend Deca',
				fontSize: 12,
			},
			components: {
				Menu: {
					itemSelectedBg: '#eeeeee'
				},
				Layout: {
					headerBg: '#fff',
				},
				Select: {
					optionSelectedBg: '#23232311'
				},
			},
			// algorithm: theme.defaultAlgorithm,
		}}
	>
		<StyleProvider hashPriority="high">
		{children}
		</StyleProvider>
	</ConfigProvider>
}