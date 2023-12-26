"use client"


import {PropsWithChildren} from "react";
import {Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Layout({children}:PropsWithChildren){
  return <div>
		<div className={"h-[100svh] w-full flex justify-center items-center"}>
			<div className={"flex justify-center border-r-2 overflow-hidden"} style={{minHeight:"80%",minWidth:"60dvw",maxWidth:"max-content",boxShadow:"rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",borderRadius:"10px"}}>
				<div style={{minWidth:"50%",maxWidth:"50rem",position:"relative"}}>
					<img style={{height:"100%",width:"100%",objectFit:"cover"}} src={"https://images.unsplash.com/photo-1491947153227-33d59da6c448?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={"banner"} />
					<div style={{position:"absolute",left:'50%',bottom:"25%",transform:"translateX(-50%)",width:"80%",textAlign:"center"}}>
						<Typography.Title level={3}>Technology community</Typography.Title>
						<Typography.Text>Some long description about us, this is in progress hehe</Typography.Text>
						<Typography.Text>Some long description about us, this is in progress hehe</Typography.Text>
						<div className={"flex justify-center gap-4 mt-4"}>
							<FontAwesomeIcon icon={faFacebook} color={"blue"}/>
							<FontAwesomeIcon icon={faDiscord} color={"blue"}/>
							<FontAwesomeIcon icon={faInstagram} color={"red"}/>
						</div>
					</div>
				</div>
				{children}
			</div>
		</div>
	</div>
}