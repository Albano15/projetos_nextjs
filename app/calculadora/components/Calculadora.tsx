'use client';
import { useState } from 'react';
import Botao from './Botao';
import Display from './Display';
import Resultado from './Resultado';

const botoes = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

export default function Calculadora() {
    const [display, setDisplay] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = (valor: string) => {
        if (valor === 'C') {
            setDisplay('');
            setResultado('');
        } else if (valor === '=') {
            try {
                const res = eval(display);
                setResultado(res.toString());
            } catch {
                setResultado('Erro');
            }
        } else {
            setDisplay(display + valor);
        }
    };

    return (
        <div style={{
            maxWidth: 300,
            margin: '50px auto',
            textAlign: 'center',
            backgroundColor: '#111',
            padding: '20px',
            borderRadius: '10px',
            color: '#fff',
            boxShadow: '0 0 10px #000'
        }}>
            <h1>Calculadora</h1>
            <Display value={display} />
            <Resultado value={resultado} />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                marginTop: '10px'
            }}>
                {botoes.map((b) => (
                    <Botao key={b} valor={b} onClick={handleClick} />
                ))}
            </div>
        </div>
    );
}
