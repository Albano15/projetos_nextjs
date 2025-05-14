import If from './components/if';
import Par from './components/par';
import Lista from './components/lista';
import Item from "./components/item";

export default function Render() {
    const vidaVilao = 100;
    const numero = 3;

    return (
        <div>
            <h1>Renderização Condicional</h1>
            <If teste={vidaVilao > 0}>
                <h1>O vilão está vivo!!!</h1>
            </If>
            <If teste={vidaVilao <= 0}>
                <h1>O vilão está morto!!!</h1>
            </If>
            <If teste={numero % 2 === 0}>
                <h1>O número {numero} é par</h1>
            </If>

            {Array.from({ length: 10 }, (_, index) => (
                <Par key={index} numero={index} />
            ))}

            <Lista>
                <Item cor={"blue"} conteudo={"Item1"}></Item>
                <Item cor={"red"} conteudo={"Item2"}></Item>
                <Item cor={"green"} conteudo={"Item3"}></Item>
            </Lista>
        </div>
    );
}