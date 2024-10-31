import Image from "next/image";

const Layout = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="bg-gradient-to-r from-rose-50 to-rose-100 min-h-screen relative flex items-center justify-center p-2 sm:p-5 overflow-hidden">
            <Image src="/svg/rose.svg" alt="Icon" width={1200} height={1200} className=" absolute -left-32 md:-left-80 -bottom-0 md:-bottom-60" />
            {children}
        </div>
    );
}

export default Layout;