'use client'

import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "@/lib/hooks/useDebounce";
import {Input, Select, Table, Tag} from "antd";
import moment from "moment/moment";

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
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
	}, {
		name: "phuoc",
		address: "150 Hoang Quoc Viet",
		total: 20,
		price: new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND'
		}).format(Math.round(200000)),
		time: moment(),
		status:"pending",
		payment_status:"success"
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


export default function OrderPage() {
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounce<string>(value, 500)
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(mockData)
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLoading(true)
		setValue(event.target.value)
	}
	
	// Fetch API (optional)
	useEffect(() => {
		// Do fetch here...
		setLoading(false)
		setData(mockData.filter(data => data.name.includes(debouncedValue)))
		// Triggers when "debouncedValue" changes
	}, [debouncedValue])
	
	return <div>
		<Input.Search type="text" loading={loading} value={value} onChange={handleChange} width={200}
									enterKeyHint={"search"} style={{width: "300px", marginBottom: "10px"}}
									placeholder={"Search by name"}/>
		
		<Table
			bordered={true}
			columns={[
				{
					title: 'Name',
					dataIndex: 'name',
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
					title: 'Price',
					dataIndex: 'price',
					key: 'type',
					
				}, {
					title: 'Status',
					dataIndex: 'status',
					key: 'status',
					render: (value, record, index) => {
						return <Select options={[{value: "shipping", label: "Shipping"}, {value: "received", label: "Received"}]} defaultValue={value}/>
					}
				}, {
					title: 'Payment Status',
					dataIndex: 'payment_status',
					key: 'status',
					render: (value, record, index) => {
						return <Select options={[{value: "pending", label: "Pending"}, {value: "success", label: "Success"}]} defaultValue={value}/>
					}
				},
				{
					title: 'Created Time',
					dataIndex: 'time',
					key: 'time',
					render: (time: number) => <>{moment(time).format('LLL')}</>,
				},
			]}
			loading={loading}
			dataSource={data}
		/>
	</div>
}