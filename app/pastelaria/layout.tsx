import './styles/globals.css';

export const metadata = { title: 'Pastelaria do Seu Zé' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body>{children}</body>
        </html>
    );
}