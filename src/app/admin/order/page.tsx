'use client'

import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "@/lib/hooks/useDebounce";
import {Button, Input, message, Modal, Select, Table, Tag, Tooltip, Typography} from "antd";
import moment from "moment/moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {API_URL} from "@/constant/env";

const mockData = [
	{
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status: "pending",
		payment_status: "success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment()
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment()
	},
]

type Order = {
	id: string,
	userId: number,
	phone_number: string,
	address: string,
	full_name: string,
	folder_name: string,
	total: number,
	status: string,
	payment_type: string,
	credit_cvv: string,
	payment_status: string,
}


export default function OrderPage() {
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounce<string>(value, 500)
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<Order[]>([])
	const [selectedOrder, setSelectedOrder] = useState<any>(null)
	
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLoading(true)
		setValue(event.target.value)
	}
	
	const handleFetchOrder = async () => {
		const order = await axios.get(`${API_URL}/Order`)
		console.log(order.data)
		setData(order.data)
	}
	
	const handleUpdateOrder = async (order: any) => {
		try {
			delete order.userResponseDTO
			const res = await axios.put(`${API_URL}/Order/${order.id}`, {...order})
			console.log(res)
		} catch (e) {
			console.log(e)
		} finally {
			message.success("Update successfully")
			
		}
	}
	
	// Fetch API (optional)
	useEffect(() => {
		// Do fetch here...
		setLoading(false)
		// Triggers when "debouncedValue" changes
		handleFetchOrder()
	}, [debouncedValue])
	
	return <div>
		<Typography.Title level={3}>Order management</Typography.Title>
		<Input.Search type="text" loading={loading} value={value} onChange={handleChange} width={200}
									enterKeyHint={"search"} style={{width: "300px", marginBottom: "10px"}}
									placeholder={"Search by name"}/>
		
		<Table
			bordered={true}
			columns={[
				{
					title: 'Name',
					dataIndex: 'full_name',
					key: 'entranceId',
				},
				{
					title: 'Address',
					dataIndex: 'address',
					key: 'cardId',
				},
				{
					title: 'Total',
					dataIndex: 'total',
					key: 'type',
					
				}, {
					title: 'Phone number',
					dataIndex: 'phone_number',
					key: 'type',
					
				}, {
					title: 'Status',
					dataIndex: 'status',
					key: 'status',
					render: (value, record, index) => {
						return <Select disabled={!!value}
													 options={[{value: "shipping", label: "Shipping"}, {value: "received", label: "Received"}]}
													 defaultValue={value === 0 ? "shipping" : "received"}
													 onChange={() => handleUpdateOrder({...record, status: 1})}/>
					}
				}, {
					title: 'Payment Status',
					dataIndex: 'payment_status',
					key: 'status',
					render: (value, record, index) => {
						return <Select options={[{value: "pending", label: "Pending"}, {value: "success", label: "Success"}]}
													 disabled={value === "success"}
													 defaultValue={value}
													 onChange={() => handleUpdateOrder({...record, payment_status: "success"})}/>
					}
				},
				{
					title: 'Actions',
					key: 'action',
					render: (_, record, index) => {
						return <div>
							<Tooltip title={<Typography.Text>View detail</Typography.Text>}><Button
								onClick={() => setSelectedOrder(record)} icon={<FontAwesomeIcon icon={faEye}/>}/></Tooltip>
						</div>
					}
				}
			]}
			loading={loading}
			dataSource={data}
		/>
		
		<Modal open={!!selectedOrder} title={"Order detail"} onCancel={() => setSelectedOrder(null)}>
			<Table
				dataSource={selectedOrder?.order_items || [{image: "printer_16-01-2024-11", size: "xxl", quantity: 23}]}
				columns={[
					{
						title: "Name",
						dataIndex: "image",
						key: "image"
					}, {
						title: "Size",
						dataIndex: "size",
						key: "size"
					}, {
						title: "Quantity",
						dataIndex: "quantity",
						key: "quantity"
					},]}
				pagination={false}
			/>
		</Modal>
	</div>
}