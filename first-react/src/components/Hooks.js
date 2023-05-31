import { useState } from "react";
import useHooks from "./useHooks";

const Hooks=()=>{
    const[count,setCount]=useState(0);
    useHooks(count);
    return (
        <>
        <p>count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment By Hooks</button>
        </>
    )
}
export default Hooks;