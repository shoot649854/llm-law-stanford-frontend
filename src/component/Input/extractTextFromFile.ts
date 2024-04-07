import { textExtract } from "./textExtract";

export async function extractTextFromFile(file: File): Promise<string> {
    console.log("Starting to extract text from file:", file.name);

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async (e) => {
            if (e.target) {
                console.log(`FileReader result type for ${file.name}:`, typeof e.target.result);
            } else {
                console.error(`FileReader event target is null for ${file.name}`);
            }

            const result = e.target?.result;
            console.log("e.target");
            console.log(e);

            if (typeof result === 'string') {
                console.log(`File content is a string for ${file.name}, proceeding to extract text...`);
                try {
                    const text = await textExtract(result);
                    console.log(`Text extracted successfully for ${file.name}`);
                    resolve(text);
                } catch (error) {
                    console.error(`Error extracting text from ${file.name}:`, error);
                    reject(error);
                }
            } else {
                console.error(`File content could not be read as a string for ${file.name}`);
                reject(new Error('File content could not be read as a string'));
            }
        };

        reader.onerror = (errorEvent) => {
            console.error(`Error reading file ${file.name}:`, reader.error);
            reject(reader.error);
        };

        // Changed from readAsArrayBuffer to readAsDataURL
        console.log(`Reading file as Data URL (base64 string) for: ${file.name}`);
        reader.readAsDataURL(file);
    });
}
