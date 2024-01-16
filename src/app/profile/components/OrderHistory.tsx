'use client'

import {Button, Input, Modal, Table, Tooltip, Typography} from "antd";
import moment from "moment";
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "@/lib/hooks/useDebounce";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";


const mockData = [
	{
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

export default function OrderHistory() {
	
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounce<string>(value, 500)
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(mockData)
	const [selectedOrder,setSelectedOrder] = useState<any>(null)
	
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
									enterKeyHint={"search"} style={{width: "300px", marginBottom: "10px"}} placeholder={"Search by name"}/>
		
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
					
				},
				{
					title: 'Created Time',
					dataIndex: 'time',
					key: 'time',
					render: (time: number) => <>{moment(time).format('LLL')}</>,
				},{
				title:'Actions',
					key:'action',
					render:(value, record, index) => {
					return <div>
						<Tooltip title={<Typography.Text>View detail</Typography.Text>}><Button onClick={() => setSelectedOrder(record)} icon={<FontAwesomeIcon icon={faEye}/>}/></Tooltip>
					</div>
					}
				}
			]}
			loading={loading}
			dataSource={data}
		/>
		
		<Modal open={!!selectedOrder} title={"Order detail"} onCancel={() => setSelectedOrder(null)}>
			<Table
			dataSource={selectedOrder?.order_items || [{image:"printer_16-01-2024-11",size:"xxl",quantity:23}]}
			columns={[
				{
					title:"Name",
					dataIndex:"image",
					key:"image"
				},{
					title:"Size",
					dataIndex:"size",
					key:"size"
				},{
					title:"Quantity",
					dataIndex:"quantity",
					key:"quantity"
				},]}
			pagination={false}
			/>
		</Modal>
		
	</div>
}