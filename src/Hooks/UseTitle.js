import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Trade`
    },[title])
}
 export default UseTitle