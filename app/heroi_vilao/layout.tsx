import './styles/globals.css';

export const metadata = { title: 'Terraplanista vs Evolucionista' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body>{children}</body>
        </html>
    );
}
