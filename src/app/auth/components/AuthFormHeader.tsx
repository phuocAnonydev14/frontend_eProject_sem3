import {Divider, Typography} from "antd";

export default function AuthFormHeader() {
	return <>
		<Typography.Title level={2} className={"mb-0"} style={{marginBottom: "0px"}}>Printer Shop</Typography.Title>
		<Typography.Text className={"mb-10"}> Share your though</Typography.Text>
		<Divider/>
	</>
}