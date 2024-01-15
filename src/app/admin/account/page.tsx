'use client'

import {Table, Tag, Typography} from "antd";
import moment from "moment";

export default function AccountPage() {
	return (	
<div className="container mx-auto">
<Table
              bordered={true}
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Username',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Email',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'First Name',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Last Name',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Date of Birth',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Gender',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
									render: (type: 0 | 1) => (
                    <>{type === 1 ? <span>Male</span> : <span>Female</span>}</>
                  ),
                },
                {
                  title: 'Phone',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Address',
                  dataIndex: 'entranceId',
                  key: 'entranceId',
                },
                {
                  title: 'Role',
                  dataIndex: 'type',
                  key: 'type',
                  render: (type: 0 | 1) => (
                    <>{type === 1 ? <Tag color={'red'}>Admin</Tag> : <Tag color={'green'}>Customer</Tag>}</>
                  ),
                },
              ]}
              pagination={false}
            />	</div>
	)

}