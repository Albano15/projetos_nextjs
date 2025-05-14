type BotaoProps = {
    valor: string;
    onClick: (valor: string) => void;
};

export default function Botao({ valor, onClick }: BotaoProps) {
    return (
        <button
            onClick={() => onClick(valor)}
            style={{
                fontSize: '18px',
                padding: '15px',
                borderRadius: '5px',
                backgroundColor: '#222',
                color: '#0f0',
                border: '1px solid #444',
                cursor: 'pointer'
            }}
        >
            {valor}
        </button>
    );
}
