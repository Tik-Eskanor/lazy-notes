import "./globals.css";
import 'aos/dist/aos.css'; // The AOS CSS

import { Toaster } from "sonner";
import AosWrapper from "@/components/AosWrapper";

export const metadata: Metadata = {
    title: "Note taker",
    description: "AI note taker",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main>
                    <AosWrapper>
                        {children}
                    </AosWrapper>
                </main>
                <Toaster />
            </body>
        </html>
    );
}
