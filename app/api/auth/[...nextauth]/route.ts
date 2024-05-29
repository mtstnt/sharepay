import { upsertUser } from "@/app/repo/user";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_AUTH_URL ?? '',
            clientSecret: process.env.GOOGLE_AUTH_SECRET ?? '',
        })
    ],
    callbacks: {
        async signIn(params) {
            const { account, profile } = params;
            if (profile?.email == null || profile?.name == null) {
                return false;
            }
            
            upsertUser(profile.email, profile.name);
            return true;
        },
        async redirect({url, baseUrl}) {
            return `${baseUrl}/auth`;
        }
    }
})

export { handler as GET, handler as POST }