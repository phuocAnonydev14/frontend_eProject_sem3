"use client"

import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

import {siteConfig} from '@/constant/config';
import AppProvider from "@/app/providers/AppProvider";
import {PropsWithChildren} from "react";
import {AppLayout} from "@/app/layouts/AppLayout";
import {theme} from "antd";
import NextTopLoader from "nextjs-toploader";

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change theme

export default function RootLayout({children}: PropsWithChildren) {
	
	const {token} = theme.useToken()
	
	return (
		<html>
		<body>
		<NextTopLoader/>
		<AppProvider>
			<AppLayout>
				{children}
			</AppLayout>
		</AppProvider>
		</body>
		</html>
	);
}
