import { useEffect } from "react";

function useHooks(count){
    useEffect(()=>{document.title=`${count}`}, [count]);
}
export default useHooks;