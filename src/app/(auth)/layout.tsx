import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactElement }) => {
    const session = await getServerSession()
    
    //redirect to dashboard if authenticated
    if(session){
        redirect("/dashboard")
    }
    return (
        <>{children}</>
    );
}

export default Layout;