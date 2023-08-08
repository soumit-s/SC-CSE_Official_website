import { LayoutProvider } from '../component/LayoutProvider';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
