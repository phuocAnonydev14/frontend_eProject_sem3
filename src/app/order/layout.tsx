'use client'


import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState} from "react";

export interface OrderItem {
	url: string | File,
	size: string,
	quantity: number,
}

export interface IOrder {
	address: string,
	folder_name: string,
	total: number,
	status: string,
	payment_type: string,
	credit_number: any,
	credit_cvv: string,
	payment_status: string,
	order_items: OrderItem[]
}

const OrderContext = createContext<{ order: IOrder, setOrder: Dispatch<SetStateAction<IOrder>> }>({} as {
	order: IOrder,
	setOrder: Dispatch<SetStateAction<IOrder>>
})

// @ts-ignore
export const  useOrderContext = () => useContext(OrderContext)

export default function OrderLayout({children}: PropsWithChildren) {
	const [order, setOrder] = useState<IOrder>({payment_status:"0",payment_type:"banking",order_items:[]} as IOrder)
	
	return <div>
		<OrderContext.Provider value={{order, setOrder}}>
			{children}
		</OrderContext.Provider>
	</div>
}

