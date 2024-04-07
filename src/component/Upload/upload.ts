import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {type UploadTaskSnapshot} from "firebase/storage";
import { storage } from "../../lib/firebase"; 

export function handleUpload(file: File | null, setPercent: (percent: number) => void) {
    if (!file) {
        alert("Please choose a file first!");
        return;
    }

    if (!storage) {
        console.error("Firebase storage is not initialized properly.");
        return;
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot: UploadTaskSnapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err: Error) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                console.log(url);
            });
        }
    );
}
