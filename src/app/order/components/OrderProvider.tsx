import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState} from "react";
import {OrderItem} from "@/app/order/layout";

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


export const OrderProvider = ({children}:PropsWithChildren) => {
	const [order, setOrder] = useState<IOrder>({payment_status:"0",payment_type:"banking",order_items:[]} as IOrder)
	
	return <OrderContext.Provider value={{order, setOrder}}>
		{children}
	</OrderContext.Provider>
}
export const useOrderContext = () => useContext(OrderContext)
