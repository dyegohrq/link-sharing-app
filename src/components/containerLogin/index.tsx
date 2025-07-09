import { ReactNode } from "react"

interface ContainerLoginProps {
    children: ReactNode
}

export default function ContainerLogin({children}: ContainerLoginProps) {
    return(
        <div className=" w-full max-w-[476px] m-auto h-screen flex flex-col sm:items-center sm:justify-center pt-8 sm:pt-0 " >
            {children}
        </div>
    )
}