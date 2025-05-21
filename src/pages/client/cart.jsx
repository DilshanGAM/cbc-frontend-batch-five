import { useState } from "react"
import { getCart } from "../../utils/cart"
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi"

export default function CartPage(){
    const [cart,setCart] = useState(getCart())

    return(
        <div className="w-full h-full flex flex-col items-center pt-4">
            {
                cart.map(
                    (item)=>{
                        return(
                            <div key={item.productId} className="w-[600px] my-4 h-[100px] rounded-tl-3xl rounded-bl-3xl bg-primary shadow-2xl flex flex-row relative justify-center items-center">
                                <img src={item.image} className="w-[100px] h-[100px] object-cover rounded-3xl"/>
                                <div className="w-[250px] h-full flex flex-col justify-center items-start pl-4">
                                    <h1 className="text-xl text-secondary font-semibold">{item.name}</h1>
                                    <h1 className="text-md text-gray-600 font-semibold">{item.productId}</h1>
                                    {
                                        item.labelledPrice > item.price ?
                                        <div>
                                            <span className="text-md mx-1 text-gray-500 line-through">{item.labelledPrice.toFixed(2)}</span>
                                            <span className="text-md mx-1 font-bold text-accent">{item.price.toFixed(2)}</span>
                                        </div>
                                        :<span className="text-md mx-1 font-bold text-accent">{item.price.toFixed(2)}</span>
                                    }
                                </div>
                                <div className="max-w-[100px] w-[100px]  h-full flex flex-row justify-evenly items-center">
                                    <button className="text-white font-bold rounded-xl hover:bg-secondary p-2 text-xl cursor-pointer aspect-square bg-accent"><BiMinus/></button>
                                    <h1 className="text-xl text-secondary font-semibold h-full flex items-center">{item.qty}</h1>
                                    <button className="text-white font-bold rounded-xl hover:bg-secondary p-2 text-xl cursor-pointer  aspect-square bg-accent"><BiPlus/></button>                                
                                </div>
                                {/* total */}
                                <div className="w-[200px] h-full flex flex-col justify-center items-end pr-4">
                                    <h1 className="text-2xl text-secondary font-semibold">Rs. {(item.price*item.qty).toFixed(2)}</h1>
                                </div>
                                <button className="absolute text-red-600 cursor-pointer hover:bg-red-600 hover:text-white rounded-full p-2 right-[-35px] ">
                                    <BiTrash/>
                                </button>
                            </div> 
                        )
                    }
                )
            }
        </div>
    )
}