import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const PaymentForm = () => {
	const [state, setState] = useState({
		number: '',
		expiry: '',
		cvc: '',
		name: '',
		focus: '',
	});
	
	const handleInputChange = (evt:any) => {
		const { name, value } = evt.target;
		
		setState((prev) => ({ ...prev, [name]: value }));
	}
	
	const handleInputFocus = (evt:any) => {
		setState((prev) => ({ ...prev, focus: evt.target.name }));
	}
	
	return (
		<div>
			<Cards
				
				number={state.number}
				expiry={state.expiry}
				cvc={state.cvc}
				name={state.name}
				focused={"name"}
				
			/>
			{/*<form>*/}
			{/*	<input*/}
			{/*		type="number"*/}
			{/*		name="number"*/}
			{/*		placeholder="Card Number"*/}
			{/*		value={state.number}*/}
			{/*		onChange={handleInputChange}*/}
			{/*		onFocus={handleInputFocus}*/}
			{/*	/>*/}
			{/*	...*/}
			{/*</form>*/}
		</div>
	);
}

export default PaymentForm;