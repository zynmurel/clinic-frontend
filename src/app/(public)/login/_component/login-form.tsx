"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const LoginForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onToggleShowPassword = () => setShowPassword(prev => !prev)

    const onLogin = async (values: z.infer<typeof loginSchema>) => {
        const response = await signIn('credentials',{
            ...values,
            redirect:false
        })

        if(response?.error){
            if(response.error === "No User"){
                form.setError("username", { message : "No user found"})
            }else if(response.error==="Incorrect Password"){
                form.setError("password", { message : "Incorrect Password"})
            }
        }

        if(response?.status===200){
            router.push("/dashboard")
            router.refresh()
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onLogin)} className=" space-y-3 md:space-y-6 w-full p-2 md:p-5 flex flex-col text-secondary-foreground ">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Input username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className=" relative">
                                    <span onClick={onToggleShowPassword} className=" absolute right-3 top-2 cursor-pointer">
                                        {showPassword ? <EyeClosed className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                                    </span>
                                    <Input type={showPassword ? "text" : "password"} placeholder="Input password" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                            <div className=" flex justify-end">
                                <p className=" text-xs cursor-pointer hover:text-primary">Forgot password?</p>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit" className=" w-full text-white font-semibold">Login</Button>
            </form>
        </Form>
    );
}

export default LoginForm;