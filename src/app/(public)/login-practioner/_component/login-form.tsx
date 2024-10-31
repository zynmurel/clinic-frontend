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

const loginSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onToggleShowPassword = () => setShowPassword(prev => !prev)

    const onLogin = (values: z.infer<typeof loginSchema>) => {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onLogin)} className="space-y-6 w-full p-2 md:p-5 flex flex-col text-slate-600">
                <div className=" grid gap-2">
                    <p className=" font-bold text-2xl text-rose-400">Welcome, Valued Practitioner!</p>
                    <p className=" text-slate-500 text-sm">Log in to manage your client appointments and access patient information.</p>
                </div>
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
                                <p className=" text-rose-400 text-xs font-semibold cursor-pointer hover:text-rose-500">Forgot password?</p>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit" className=" w-full text-white bg-rose-400">Login</Button>
            </form>
        </Form>
    );
}

export default LoginForm;