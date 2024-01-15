'use client';

import { Table, TableColumnType, Tag, Typography } from 'antd';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

export default function AccountPage() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const dataSource = [
    {
      id: '1',
      username: 'Mike',
      email: 'mike@example.com',
      firstname: 'Michael',
      lastname: 'Johnson',
      dob: '1985-07-15',
      gender: 1,
      phone: '+1 555-1234',
      address: '123 Main Street, Cityville',
      role: 1,
    },
    {
      id: '2',
      username: 'Alice',
      email: 'alice@gmail.com',
      firstname: 'Alice',
      lastname: 'Smith',
      dob: '1990-03-22',
      gender: 2,
      phone: '+1 555-5678',
      address: '456 Oak Avenue, Townsville',
      role: 0,
    },
    {
      id: '3',
      username: 'Bob23',
      email: 'bob23@yahoo.com',
      firstname: 'Robert',
      lastname: 'Williams',
      dob: '1978-11-10',
      gender: 1,
      phone: '+1 555-9876',
      address: '789 Pine Road, Villagetown',
      role: 1,
    },
    {
      id: '4',
      username: 'Sara_89',
      email: 'sara_89@hotmail.com',
      firstname: 'Sara',
      lastname: 'Miller',
      dob: '1989-05-03',
      gender: 2,
      phone: '+1 555-4321',
      address: '101 Cedar Lane, Hamletville',
      role: 0,
    },
    {
      id: '5',
      username: 'JohnDoe',
      email: 'john.doe@gmail.com',
      firstname: 'John',
      lastname: 'Doe',
      dob: '1982-09-18',
      gender: 1,
      phone: '+1 555-8765',
      address: '222 Maple Street, Villageton',
      role: 1,
    },
    {
      id: '6',
      username: 'Eva87',
      email: 'eva_87@yahoo.com',
      firstname: 'Eva',
      lastname: 'Taylor',
      dob: '1987-12-30',
      gender: 2,
      phone: '+1 555-5432',
      address: '505 Birch Avenue, Cityburg',
      role: 1,
    },
    {
      id: '7',
      username: 'JakeCool',
      email: 'jake.cool@gmail.com',
      firstname: 'Jake',
      lastname: 'Coolidge',
      dob: '1995-02-08',
      gender: 1,
      phone: '+1 555-6789',
      address: '777 Elm Road, Townsville',
      role: 0,
    },
    {
      id: '8',
      username: 'Linda83',
      email: 'linda_83@hotmail.com',
      firstname: 'Linda',
      lastname: 'Williams',
      dob: '1983-08-12',
      gender: 2,
      phone: '+1 555-8761',
      address: '888 Pine Lane, Villagetown',
      role: 1,
    },
    {
      id: '9',
      username: 'TommyBoy',
      email: 'tommy.boy@yahoo.com',
      firstname: 'Tom',
      lastname: 'Anderson',
      dob: '1992-04-25',
      gender: 1,
      phone: '+1 555-4329',
      address: '999 Oak Street, Cityville',
      role: 0,
    },
    {
      id: '10',
      username: 'Grace',
      email: 'grace@gmail.com',
      firstname: 'Grace',
      lastname: 'Parker',
      dob: '1988-11-05',
      gender: 2,
      phone: '+1 555-7654',
      address: '777 Maple Avenue, Hamletville',
      role: 1,
    },
  ];

  const columns = (
    <div className='container mx-auto'>
      <Table
        bordered={true}
        columns={[
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            ...getColumnSearchProps('username'),
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'firstname',
          },
          {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
          },
          {
            title: 'Date of Birth',
            dataIndex: 'dob',
            key: 'dob',
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (type: 1 | 2) => (
              <>{type === 1 ? <span>Male</span> : <span>Female</span>}</>
            ),
            filters: [
              {
                text: 'Male',
                value: 1,
              },
              {
                text: 'Female',
                value: 2,
              },
            ],
						filterMultiple: false,
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (type: 0 | 1) => (
              <>
                {type === 1 ? (
                  <Tag color={'red'}>Admin</Tag>
                ) : (
                  <Tag color={'green'}>Customer</Tag>
                )}
              </>
            ),
          },
        ]}
        pagination={false}
        dataSource={dataSource}
      />{' '}
    </div>
  );

  return columns;
}
