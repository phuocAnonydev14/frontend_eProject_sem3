import {extname, join} from "path";
import {stat, mkdir, writeFile} from "fs/promises";
import * as dateFn from "date-fns";
import {NextRequest, NextResponse} from "next/server";

function sanitizeFilename(filename: string): string {
	return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
}


export async function POST(request: NextRequest, res: any) {
	
	const formData = await request.formData();
	
	const files = formData.getAll("files");
	if (!files) {
		return NextResponse.json(
			{error: "File blob is required."},
			{status: 400}
		);
	}
	
	
	const fileList: string[] = []
	await Promise.all(
		files.map(async (file: any) => {
				const buffer = Buffer.from(await file.arrayBuffer());
				
				const pathDist: string = join(process.cwd(), "/public/images");
				const relativeUploadDir = `${dateFn.format(Date.now(), "dd-MM-Y")}`;
				const uploadDir = join(pathDist, relativeUploadDir);
				
				
				try {
					await stat(uploadDir);
					const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
					// @ts-ignore
					const fileExtension = extname(file.name);
					// @ts-ignore
					const originalFilename = file.name.replace(/\.[^/.]+$/, "");
					const sanitizedFilename = sanitizeFilename(originalFilename);
					const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`;
					console.log('filename : ' + filename);
					await writeFile(`${uploadDir}/${filename}`, buffer);
					const finalFilePath = 'http://localhost:3000/images/' + `${relativeUploadDir}/${filename}`;
					fileList.push(finalFilePath)
				} catch (e: any) {
					if (e.code === "ENOENT") {
						await mkdir(uploadDir, {recursive: true});
					} else {
						console.error(
							"Error while trying to create directory when uploading a file\n",
							e
						);
						return NextResponse.json(
							{error: "Something went wrong."},
							{status: 500}
						);
						
					}
				}
			}
		
		))
			
			
			try {
				
				return NextResponse.json({done: "ok", files: fileList}, {status: 200});
				
			} catch (e) {
				console.error("Error while trying to upload a file\n", e);
				return NextResponse.json(
					{error: "Something went wrong."},
					{status: 500}
				);
			}
		}