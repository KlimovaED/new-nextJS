import {Metadata} from 'next';

export const metadata:Metadata={
    title: 'New NextJS',
    description:'New NextJS'
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
