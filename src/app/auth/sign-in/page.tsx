"use client"

import {SignInForm} from "@/app/auth/components/SignInForm";
import Image from "next/image";
import {Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faDiscord,faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function SignInPage() {
	return <SignInForm/>
}