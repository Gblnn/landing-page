import Back from '@/components/back';
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";

export default function Careers(){

    return(
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>

        <div id="projects" className="page" style={{border:"", height:"", paddingTop:"1.5rem", background:"rgba(100 100 100/ 10%)"}}>

            <div style={{margin:"1.5rem", marginTop:"6rem", border:"", width:"100%"}}>

                

                <h1 style={{fontSize:"1.5rem", fontWeight:500, display:'flex', gap:"0.75rem", alignItems:'center', }}>
                <Back/>
                    Careers <ChevronRight color="crimson"/>
                </h1>

                

                

            </div>
            
        </div>
        </motion.div>
    )
}