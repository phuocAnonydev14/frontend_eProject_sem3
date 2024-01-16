"use client"

import {createContext, PropsWithChildren, useContext, useState} from "react";
import {useRouter} from "next/navigation";
import {ConfigProvider, theme} from "antd";
import {StyleProvider} from '@ant-design/cssinjs';

const AppContext = createContext<any>(null)

type User = {
	username: string,
	id: number,
	avatar: string
}

export default function AppProvider({children}: PropsWithChildren) {
	
	const router = useRouter()
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const {defaultAlgorithm, darkAlgorithm} = theme;
	const [account,setAccount] = useState<User | null>(null)
	
	return (
		<AppContext.Provider value={{setIsDarkTheme: (check: boolean) => setIsDarkTheme(check),account,setAccount}}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#FB8500',
						colorLink: '#FB8500',
						colorLinkHover: '#FB8500',
						colorLinkActive: '#FB8500',
						fontFamily: 'Lexend Deca',
						fontSize: 12,
						colorText: isDarkTheme ? '#EFEFEF' : '#392d25',
						colorBgBase: isDarkTheme ? '#000' : '#fafafb',
						colorBgContainer: isDarkTheme ? '#000' : '#fff',
						colorBgLayout: isDarkTheme ? '#131313' : '#fafafb',
						colorTextBase: isDarkTheme ? '#EFEFEF' : '#392d25',
						colorTextHeading: isDarkTheme ? '#EFEFEF' : '#392d25',
						colorBorder: isDarkTheme ? '#242424' : '#eff2f5',
						colorError: isDarkTheme ? '#dc0303' : '#ff0000',
						borderRadiusLG: 10,
						borderRadius: 10,
						colorBgSpotlight: isDarkTheme ? '#392d25' : '#fafafb',
					},
					algorithm: isDarkTheme ? darkAlgorithm : defaultAlgorithm,
					
				}}
			>
				<StyleProvider hashPriority="high">
					{children}
				</StyleProvider>
			</ConfigProvider>
		</AppContext.Provider>)
}

export const useAppContext = () => useContext(AppContext)