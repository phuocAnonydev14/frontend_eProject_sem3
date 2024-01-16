import React, {useState} from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import {Col, Divider, Input, Row, Typography} from "antd";
import {useOrderContext} from "@/app/order/components/OrderProvider";

const PaymentForm = () => {
	const [state, setState] = useState({
		number: '',
		expiry: '',
		cvc: '',
		name: '',
		focus: '',
	});
	const {setOrder,order} = useOrderContext()
	
	const handleInputChange = (evt: any) => {
		const {name, value} = evt.target;
		
		setState((prev) => ({...prev, [name]: value}));
		if(name === "number"){
			setOrder(state => ({...state,credit_number:value}))
		}
		if(name === "name"){
			setOrder(state => ({...state,credit_cvv:value}))
		}
	}
	
	const handleInputFocus = (evt: any) => {
		setState((prev) => ({...prev, focus: evt.target.name}));
	}
	
	return (
		<div>
			<Divider />
			<Typography.Title level={3}>Credit card</Typography.Title>
			<Row gutter={[16, 16]}>
				<Col xs={24} md={24} lg={12} xl={12} order={2}>
					<Cards
						number={state.number}
						expiry={state.expiry}
						cvc={state.cvc}
						name={state.name}
						focused={"name"}
					
					/>
				</Col>
				<Col xs={24} md={24} lg={12} xl={12}>
					<div className={'flex flex-col gap-4'}>
						<Input
							type={"number"}
							name="number"
							placeholder="Card Number"
							value={state.number}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
						/>
						<Input
							name="name"
							placeholder="Name"
							value={state.name}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
						/>
						<Input
							type="number"
							name="expiry"
							placeholder="Expiry"
							value={state.expiry}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default PaymentForm;