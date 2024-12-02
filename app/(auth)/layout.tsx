import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

export const metadata = {
    title : 'Tread',
    describe : "Next js 15 project"
}

const inter = Inter({ subsets : ["latin"]})

export default function RootLayout({
    children
}: {children : React.ReactNode}) {
    return(
        <ClerkProvider>
            <html lang="en">
                 <body className={"${inter.className} bg-dark-1"}>
                    {children}
                 </body>
            </html>
        </ClerkProvider>
    )
}