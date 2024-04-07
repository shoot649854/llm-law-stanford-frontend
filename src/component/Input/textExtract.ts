import { pdfToPages } from 'pdf-ts';
import fs from 'fs/promises'; // Use the promises API of the 'fs' module

// Mark the function as async and change the parameter name to avoid conflict
export async function textExtract(pdfPath: string) {
    // Use the promises API to read the file asynchronously
    console.log("ここから");
    const pdfBuffer = await fs.readFile(pdfPath);
    console.log("ここから");
    const pages = await pdfToPages(pdfBuffer);
    console.log("ここから");
    const text = pages.map(page => page.text).join('\n');
    console.log(text);
    return text;
}