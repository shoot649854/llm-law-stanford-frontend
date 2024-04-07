import { promises as fs } from 'fs';
import path from 'path';

export async function saveFileToDataDirectory(filename: string, data: Buffer | string): Promise<void> {
    try {
        const directoryPath = path.join(__dirname, 'data'); // Adjust based on your directory structure
        await fs.mkdir(directoryPath, { recursive: true }); // Ensure the directory exists
        const filePath = path.join(directoryPath, filename);

        await fs.writeFile(filePath, data);
        console.log(`File saved to ${filePath}`);
    } catch (error) {
        console.error('Error saving file:', error);
    }
}

// const exampleBlob = new Blob([/* PDF file data here */], { type: 'application/pdf' });
// triggerDownload(exampleBlob, 'example.pdf');