import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {
    const  router  = useRouter() 
    useEffect(()=> {
        setTimeout(()=> {
            router.push("/")
        },3000)
    })
    return ( <div>Not Found Page 
        <Link href="/">Home</Link>
    </div> );
}
 
export default NotFound ;