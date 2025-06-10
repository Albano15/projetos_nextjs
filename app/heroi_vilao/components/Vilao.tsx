'use client';

import styles from '../styles/Vilao.module.css';
import Image from 'next/image';

type Props = { vida: number };

export default function Vilao({ vida }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <Image
                    src="/evolucionista.png"
                    alt="Evolucionista"
                    width={240}
                    height={240}
                    className={styles.avatarImg}
                />
            </div>
            <h2>Evolucionista</h2>
            <div className={styles.bar}>
                <div className={styles.filho} style={{ width: `${vida}%` }} />
            </div>
            <p>Vida: {vida}%</p>
        </div>
    );
}