import Header from '../components/Header';
import MenuGrid from '../components/MenuGrid';
import Footer from '../components/Footer';
import menu from '../data/menu';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <MenuGrid items={menu} />
            </main>
            <Footer />
        </>
    );
}
