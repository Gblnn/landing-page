import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Back(){

    const usenavigate = useNavigate()

    return(
        <>
        <button className='btn' onClick={()=>usenavigate(-1)}><ChevronLeft/></button>
        </>
    )
}