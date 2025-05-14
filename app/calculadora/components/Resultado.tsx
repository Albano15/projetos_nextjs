type ResultadoProps = {
    value: string;
};

export default function Resultado({ value }: ResultadoProps) {
    return (
        <div style={{ marginBottom: '10px', color: '#0f0' }}>
            <strong>Resultado: {value}</strong>
        </div>
    );
}
