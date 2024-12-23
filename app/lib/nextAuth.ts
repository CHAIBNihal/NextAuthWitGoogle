import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }
        ),
        
    ],
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60
    },
    jwt: {
        //encode and decode yourJson Web Token
    },
    callbacks: {
        // Sign in callbacks => si tu veut faire une operation apres que l'utilisateur s'inscrit par example envoyer un email comme quoi il est inscrit maintenant ..
        //Callbacks session : 
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages : {
        signIn : "/auth/signin" //Personnaliser la route de ma page de connexion 
         
    }
}