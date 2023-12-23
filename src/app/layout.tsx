import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

import {siteConfig} from '@/constant/config';
import AppProvider from "@/app/providers/AppProvider";
import {PropsWithChildren} from "react";
import {AppLayout} from "@/app/layouts/AppLayout";

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change theme

export default function RootLayout({children}: PropsWithChildren) {
	return (
		<html>
		<body>
		<AppLayout>
			<AppProvider>
				{children}
			</AppProvider>
		</AppLayout>
		</body>
		</html>
	);
}
