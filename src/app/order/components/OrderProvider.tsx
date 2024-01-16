import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState} from "react";
import {OrderItem} from "@/app/order/layout";
import axios from "axios";
import {API_URL} from "@/constant/env";

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

const OrderContext = createContext<{ order: IOrder, setOrder: Dispatch<SetStateAction<IOrder>>, sizes: Size[] }>({} as {
	order: IOrder,
	setOrder: Dispatch<SetStateAction<IOrder>>,
	sizes: Size[]
})

interface Size {
	id: number,
	name: string,
	price: number
}

export const OrderProvider = ({children}: PropsWithChildren) => {
	const [order, setOrder] = useState<IOrder>({payment_status: "0", payment_type: "banking", order_items: []} as IOrder)
	const [sizes, setSizes] = useState<Size[]>([])
	
	
	useEffect(() => {
		(async () => {
			const res = await axios.get(`${API_URL}/Size`)
			console.log(res)
			setSizes(res.data)
		})()
	}, []);
	
	return <OrderContext.Provider value={{order, setOrder, sizes}}>
		{children}
	</OrderContext.Provider>
}
export const useOrderContext = () => useContext(OrderContext)
