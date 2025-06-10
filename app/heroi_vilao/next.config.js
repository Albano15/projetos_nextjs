/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // Adicione domínios externos se necessário
    },
    // Habilitar modo experimental para componentes client-side
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;