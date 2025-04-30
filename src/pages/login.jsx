import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleLogin(){
        try{
            const response = await axios.post("http://localhost:5000/api/users/login" , {
                email:email,
                password:password
            })
            //alert("Login Successful")
            toast.success("Login Successful")
            console.log(response.data)
        
        }catch(e){
            //alert(e.response.data.message)
            toast.error(e.response.data.message)
        }
        



    }

    return(
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex  justify-evenly items-center">
          <div className="w-[50%] h-full ">

          </div>
          <div className="w-[50%] h-full flex justify-center items-center">

            <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <input 
                
                    onChange={
                        (e)=>{
                            setEmail(e.target.value)                        
                        }
                    }

                    value={email}
                
                className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[20px]" />
                <input 
                    onChange={
                        (e)=>{
                            setPassword(e.target.value)                        
                        }
                    }
                    value={password}
                type="password" className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px]" />
                <button onClick={handleLogin}  className="w-[300px] cursor-pointer h-[50px] bg-[#c3efe9] rounded-[20px] my-[20px] text-[20px] font-bold text-white">Login</button>

            </div>

          </div>
        </div>
    )
}