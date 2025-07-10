import { ReactNode } from "react"
import Header from "../header";

interface ContainerProps {
    children: ReactNode;
}

export default function Container({children}: ContainerProps) {
    return(
        <div>
            <Header/>
            <div className="m-6" >
                {children}
            </div>
        </div>
    )
}