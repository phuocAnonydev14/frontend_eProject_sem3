import {Table} from "antd";
import moment from "moment";

export default function  OrderHistory(){
	return <div>
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
					
				},{
					title: 'Price',
					dataIndex: 'Price',
					key: 'type',
					
				},
				{
					title: 'Time',
					dataIndex: 'time',
					key: 'time',
					render: (time: number) => <>{moment(time).format('LLL')}</>,
				},
			]}
			pagination={false}
		/>
	</div>
}