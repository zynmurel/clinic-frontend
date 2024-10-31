import Image from "next/image";
import LoginForm from "./_component/login-form";

const Page = () => {
    return (
        <div className=" lg:w-full max-w-6xl md:grid-cols-2 grid  lg:grid-cols-5 rounded-2xl shadow bg-white z-10">
        <div className=" lg:col-span-3 p-5 hidden md:flex justify-end">
            <Image
                src="/vector/appointment.png"
                alt="Descriptive Alt Text"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover  bg-white"
            />
        </div>
            <div className=" lg:col-span-2 bg-white rounded-2xl p-5 flex items-center justify-center">
                <LoginForm/>
            </div>
        </div>
    );
}

export default Page;