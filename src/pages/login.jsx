import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { GrGoogle } from "react-icons/gr"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const googleLogin  = useGoogleLogin({
        onSuccess: (response)=>{
            const accessToken = response.access_token
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login/google", {
                accessToken: accessToken
            }).then((response)=>{
                toast.success("Login Successful")
                const token = response.data.token
                localStorage.setItem("token", token)
                if(response.data.role === "admin"){
                    navigate("/admin/")
                }
                else{
                    navigate("/")
                }
            })
        }
    })


    async function handleLogin(){
        try{
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login" , {
                email:email,
                password:password
            })
            //alert("Login Successful")
            toast.success("Login Successful")
            console.log(response.data)
            localStorage.setItem("token",response.data.token)

            if(response.data.role === "admin"){
                navigate("/admin/")
            }else{
                navigate("/")
            }

            
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
                <button onClick={googleLogin} className="w-[300px] cursor-pointer h-[50px] flex justify-center items-center bg-[#c3efe9] rounded-[20px] my-[20px] text-[20px] font-bold text-white" >
                    <GrGoogle className="text-xl text-gray-600 cursor-pointer hover:text-gray-800" />
                    <span className="text-gray-600 text-xl font-semibold">Login with Google</span>
                </button>
            </div>

          </div>
        </div>
    )
}