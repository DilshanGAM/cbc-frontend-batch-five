import UserData from "./userData";

export default function Header(){
    console.log("Header component loading...")
    return(
        <div className="bg-[#FFFF00] ">
            <h1 className="font-bold text-[300px] text-blue-700">Crystal Beauty Clear</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sit, corporis ratione vel ullam provident expedita temporibus tempora repellendus magnam dolores commodi dicta enim eius consequuntur iste nemo voluptas assumenda.</p>
            <UserData></UserData>
        </div>
    )
}