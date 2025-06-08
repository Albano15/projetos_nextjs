import MenuItem from './MenuItem';
import styles from '../styles/MenuGrid.module.css';

type Item = { id: number; name: string; image: string; price: string };

export default function MenuGrid({ items }: { items: Item[] }) {
    return (
        <section className={styles['grid-wrapper']}>
            <div className={styles.grid}>
                {items.map(item => (
                    <MenuItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}
