import { handleUpload } from "../Upload/upload";
let files = {
    accepted: [] as any[],
    rejected: [] as any[],
    extractedText: [] as string[]
};

export async function handleFilesSelect(e: any) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];

    return files;
    // Extract text from each accepted file
    // for (const file of acceptedFiles) {
        // const text = await extractTextFromFile(file);
        // files.extractedText.push(text);
    // }
}