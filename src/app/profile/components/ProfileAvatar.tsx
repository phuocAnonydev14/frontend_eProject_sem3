import {Avatar, Button, Col, Row, Upload} from "antd";
import ImgCrop from "antd-img-crop";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss"

export const ProfileAvatar = () => {
	return <div
		className={`d-flex flex-column h-100 ${styles.wrapper}`}
		style={{
			padding: "50px 0",
			height: 'fit-content'
		}}
	>
		<div className={styles['avatar--wrapper']}>
					<div className={`${styles['avatar']}`}>
						<Avatar
							size={88}
							src={"https://images.unsplash.com/photo-1704146087769-ba4d31543936?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
						/>
					</div>
					<div style={{display:"flex"}}>
						<ImgCrop showGrid rotationSlider aspectSlider showReset modalOk={'Upload'}>
							<Upload
								// action={`${API_BASE_URL}/accounts/${String(account.id)}/avatar`}
								// headers={{Authorization: `Bearer ${accessToken}`}}
								name={"file"}
								accept={"image/*"}
								// onChange={onChange}
								showUploadList={false}
								multiple={false}
								maxCount={1}
							>
								<Button
									icon={<FontAwesomeIcon icon={faArrowUpFromBracket}/>}
									loading={false}
								>
									Upload avatar
								</Button>
							</Upload>
						</ImgCrop>
					</div>
		</div>
	</div>
}