'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/Dialogo.module.css';

type Props = {
    mensagem: string;
    visivel: boolean;
    personagem: 'heroi' | 'vilao';
};

export default function Dialogo({ mensagem, visivel, personagem }: Props) {
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        if (visivel) {
            setMostrar(true);
            const timer = setTimeout(() => setMostrar(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [visivel]);

    if (!mostrar) return null;

    return (
        <div className={`${styles.container} ${personagem === 'heroi' ? styles.heroi : styles.vilao}`}>
            <div className={styles.balao}>
                <p>{mensagem}</p>
            </div>
        </div>
    );
}