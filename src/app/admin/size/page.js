'use client';
import {Form, Modal, Table, Tag, Typography} from 'antd';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {Button, Input, Space} from 'antd';
import {NextPageContext} from 'next';
import {API_URL} from '@/constant/env';
import {useForm} from "antd/es/form/Form";

export default function AccountPage() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [form] = useForm()


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
                        icon={<SearchOutlined/>}
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

    const [selectedSize, setSelectedSize] = useState(null)
    const [isOpenModal, setIsOpenModal] = useState(false)


    useEffect(() => {
        form.setFieldsValue(selectedSize)
    }, [selectedSize])

    const handleSubmitForm = async (values) => {
        try {
            // values is : { size , price }
        } catch (e) {

        }
    }

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/Size/`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        };

        fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e);
        });
    }, []);

    const columns = (
        <div className='container  ml-10'>
            <div className={"flex justify-between"}>
                <Typography.Title level={3}>Accounts management</Typography.Title>
                <Button type={"primary"} onClick={() => {
                    setSelectedSize(null)
                    setIsOpenModal(true)
                    form.resetFields()
                }}>Add size</Button>
            </div>
            <Table
                bordered={true}
                columns={[
                    {
                        title: 'ID',
                        dataIndex: 'id',
                        key: 'id',
                        ...getColumnSearchProps('id'),
                    },
                    {
                        title: 'Size',
                        dataIndex: 'name',
                        key: 'name',
                        ...getColumnSearchProps('name'),
                    },
                    {
                        title: 'Price',
                        dataIndex: 'price',
                        key: 'price',
                    },
                    {
                        title: "Action",
                        key: 'action',
                        render: (value, record, index) => {
                            return <div className={"flex gap-4"}>
                                <Button onClick={() => {
                                    setSelectedSize(record)
                                    setIsOpenModal(true)
                                }}>
                                    Edit
                                </Button>
                                <Button danger={true}>
                                    Delete
                                </Button>
                            </div>
                        }
                    }
                ]}
                pagination={{size: 'default'}}
                dataSource={data}
            />{' '}


            <Modal open={isOpenModal} onCancel={() => setIsOpenModal(false)} footer={null}
                   title={selectedSize ? "Update size" : "Create size"}>

                <Form layout={"vertical"} onFinish={handleSubmitForm} form={form}>
                    <Form.Item name={"name"}>
                        <Input placeholder={"Enter size"}/>
                    </Form.Item>
                    <Form.Item name={"price"}>
                        <Input type={"number"} placeholder={"Enter price"}/>
                    </Form.Item>

                    <div className={"flex justify-end gap-4"}>
                        <Button htmlType={"submit"} type={"primary"}> {selectedSize ? "Update" : "Add"}</Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );

    return columns;
}
