import Image from 'next/image';
import styles from '../styles/MenuItem.module.css';

type Props = { id: number; name: string; image: string; price: string };

export default function MenuItem({ name, image, price }: Props) {
    return (
        <div className={styles.card}>
            <Image src={image} alt={name} width={120} height={80} />
            <h3>{name}</h3>
            <p>R$ {price}</p>
        </div>
    );
}
