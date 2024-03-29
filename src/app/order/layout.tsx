'use client'


import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState} from "react";
import {OrderProvider} from "@/app/order/components/OrderProvider";

export interface OrderItem {
	url: string | File,
	size: number,
	quantity: number,
	price: number
}


// @ts-ignore

export default function OrderLayout({children}: PropsWithChildren) {
	
	return <div>
		<OrderProvider>
			{children}
		</OrderProvider>
	</div>
}

