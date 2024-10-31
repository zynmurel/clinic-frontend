import Image from "next/image";

const Layout = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 min-h-screen relative flex items-center justify-center p-2 sm:p-5 overflow-hidden">
            <Image src="/svg/rose.svg" alt="Icon" width={1000} height={1000} className=" absolute -left-32 md:-left-72 -bottom-0 md:-bottom-60 opacity-40" />
            {children}
        </div>
    );
}

export default Layout;