type DisplayProps = {
    value: string;
};

export default function Display({ value }: DisplayProps) {
    return (
        <input
            type="text"
            value={value}
            readOnly
            style={{
                width: '100%',
                fontSize: '24px',
                marginBottom: '10px',
                textAlign: 'right',
                backgroundColor: '#000',
                color: '#0f0',
                border: 'none',
                padding: '10px'
            }}
        />
    );
}
