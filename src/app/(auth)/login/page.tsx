import Image from "next/image";
import LoginForm from "./_component/login-form";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const visits = [{
    url: "https://www.facebook.com/avirojacorp",
    icon: <FaFacebookF size={20} />
}, {
    url: "https://www.instagram.com/layaw_medical_aethetics/",
    icon: <FaInstagram size={20} />
}, {
    url: "https://www.tiktok.com/@layaw_medical_aesthetics",
    icon: <FaTiktok size={20} />
}]

const Page = async () => {
    return (
        <div className=" lg:w-full max-w-5xl md:grid-cols-2 grid p-5  lg:grid-cols-5 rounded-2xl shadow bg-white z-10">
            <div className=" lg:col-span-3 hidden md:flex flex-col p-10 justify-center items-center gap-2 rounded-lg">
                <Image
                    src="/images/layaw-logo.png"
                    alt="Descriptive Alt Text"
                    width={350}
                    height={250}
                    className=" object-cover w-full h-auto lg:px-16  bg-white"
                />
                <p className=" text-sm text-center font-semibold text-primary uppercase opacity-80">
                    Medical Spa · Laser Hair Removal Service · Beauty, cosmetic & personal care
                </p>
                <div className=" flex flex-row gap-3 mt-10">
                    {visits.map((vis, index) => (<Link href={vis.url} key={index} target="_blank"><div className=" p-2 rounded-full bg-amber-100 text-primary hover:brightness-95">{vis.icon}</div></Link>))}
                </div>
            </div>
            <div className=" lg:col-span-2 bg-white flex flex-col items-center justify-center">
                <Image
                    src="/images/layaw-logo.png"
                    alt="Descriptive Alt Text"
                    width={200}
                    height={250}
                    className=" md:hidden"
                />
                <div className=" grid gap-2 px-5 pt-5">
                    <p className=" font-bold md:text-xl text-amber-800 text-center">Welcome, Valued Practitioner!</p>
                    <p className=" text-xs md:text-sm text-center text-slate-700">Log in to manage your client appointments and access patient information.</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}

export default Page;