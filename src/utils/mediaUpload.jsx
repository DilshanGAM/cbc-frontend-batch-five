import { createClient } from "@supabase/supabase-js"

const url = "https://neygxadcgdpkbeaezfjc.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5leWd4YWRjZ2Rwa2JlYWV6ZmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjUxODMsImV4cCI6MjA2MjIwMTE4M30.IpS34HF5ouG-5qPOavCyqCJdOV-sbhkLfmV04z36Fnc"

const supabase = createClient(url,key)

export default function mediaUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve, reject)=>{

            if(file == null){
                reject("No file selected")
                return
            }

            const timestamp = new Date().getTime()
            const newName = timestamp+file.name

            supabase.storage.from("images").upload(newName, file, {
                upsert:false,
                cacheControl:"3600"
            }).then(()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl
                resolve(publicUrl)
            }).catch(
                ()=>{
                    reject("Error occured in supabase connection")
                }
            )
        }
    )

    return mediaUploadPromise

}



