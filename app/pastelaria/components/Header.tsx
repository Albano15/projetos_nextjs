import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/images/logo.png"
                alt="Pastelaria do Seu Zé"
                width={300}
                height={60}
                priority
            />
        </header>
    );
}
