import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {mkdirp} from "mkdirp"
import * as path from "path";
import fs from "fs"

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const convertBlobToFile = async (blobUrl: string) => {
	try {
		// Sử dụng fetch để tải blob
		const response = await fetch(blobUrl);
		const blobData = await response.blob();
		
		// Tạo đối tượng File từ blob
		const file = new File([blobData], "image.jpg", {type: "image/jpeg"});
		
		// Bạn có thể xử lý file tại đây hoặc trả về nó cho việc xử lý ở bên ngoài
		return file;
	} catch (error) {
		console.error("Error converting blob to file:", error);
		return null;
	}
};


export const handleCreateFolder = async (folderName: string) => {
	// const newFolderPath = `${process.cwd()}/printer_images/${folderName}`
	// const currentFilePath =  path.resolve(__dirname, '../'); // Đường dẫn tới tệp của bạn
	// const nextAppDirectory = path.resolve(currentFilePath, '../'); // Lấy thư mục cha
	
	const newFolderName = 'tennamethumuc';
	// const newFolderPath = path.join(nextAppDirectory, newFolderName);
	// console.log(mkdirp)
	// console.log(fs)
	// if (!fs.existsSync('f')) {
	// 	fs.mkdirSync('f');
	// 	console.log(`Thư mục "${newFolderName}" đã được tạo trong thư mục gốc của ứng dụng Next.js.`);
	// } else {
	// 	console.log(`Thư mục "${newFolderName}" đã tồn tại trong thư mục gốc của ứng dụng Next.js.`);
	// }
	const res = await mkdirp('newFolderPath')
	// console.log(res)
}




export function stringToHash(string) {
	
	let hash = 0;
	
	if (string.length == 0) return hash;
	
	for (let i = 0; i < string.length; i++) {
		let char = string.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash;
	}
	
	return hash;
}
