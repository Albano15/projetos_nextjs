'use client';

import styles from '../styles/Heroi.module.css';
import Image from 'next/image';
import { forwardRef } from 'react';

type Props = {
    vida: number;
};

const Heroi = forwardRef<HTMLDivElement, Props>(({ vida }, ref) => {
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.avatar}>
                <Image
                    src="/terraplanista.png"
                    alt="Terraplanista"
                    width={240}
                    height={240}
                    className={styles.avatarImg}
                />
            </div>
            <h2>Terraplanista</h2>
            <div className={styles.bar}>
                <div className={styles.filho} style={{ width: `${vida}%` }} />
            </div>
            <p>Vida: {vida}%</p>
        </div>
    );
});

Heroi.displayName = 'Heroi';

export default Heroi;