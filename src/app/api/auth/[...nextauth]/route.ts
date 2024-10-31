import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
        error : '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials) {
                const data = {
                    id: "123123123",
                    name: "Sean",
                    email: "comingues99@gmail.com",
                    image: "asdasdas"
                }

                if (data.email !== credentials?.username){
                    throw new Error("No User")
                }

                if(data.id !== credentials?.password){
                    throw new Error("Incorrect Password")
                }

                return data ? data : null
            }
        })
    ],
})

export { handler as GET, handler as POST }