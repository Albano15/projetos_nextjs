'use client';

import { useState, useEffect } from 'react';
import Heroi from './Heroi';
import Vilao from './Vilao';
import styles from '../styles/Batalha.module.css';

export default function Batalha() {
    const [vidaHeroi, setVidaHeroi] = useState(100);
    const [vidaVilao, setVidaVilao] = useState(100);
    const [mensagem, setMensagem] = useState('O combate começou! Terraplanista, sua vez!');
    const [defesaHeroi, setDefesaHeroi] = useState(false);
    const [defesaVilao, setDefesaVilao] = useState(false);
    const [turno, setTurno] = useState<'jogador' | 'vilao'>('jogador');
    const [gameOver, setGameOver] = useState(false);

    // Frases engraçadas para ataques e poções
    const frasesAtaque = [
        "A Antártica é o portal da Terra Oca!",
        "O Sol é um holofote gigante pra manter a ONU rica!",
        "A NASA edita as fotos do espaço com Photoshop!",
        "Os foguetes não funcionam no vácuo!",
        "A terra é igual a um disco de Vinil, com o Polo Norte no centro",
        "A gravidade é uma farsa!!!",
        "A terra tem 2000 anos!"
    ];

    const frasesPocao = [
        "A gravidade não existe!",
        "A Terra é plana e ponto final!",
        "A água não é capaz de fazer curva!",
        "O sol está a 5000 Km de altura",
        "Ninguém explica a farsa da bola molhada giratória",
        "O Sol gira sobre nós!",
        "As bordas são guardadas pelos agentes da ONU!"
    ];

    const frasesDefesa = [
        "Estamos na matrix!",
        "Vocês evolucionistas são pagos pelo sistema!",
        "As evidências foram destruídas pelos governos!",
        "Como os japoneses não caem se estão de cabeça para baixo?",
        "O mundo está dominado pelos Iluminatis",
        "A gravidade é só magnetismo disfarçado!"
    ];

    const frasesAtaqueVilao = [
        "Você envergonha os seus ancestrais!",
        "Segura esse fóssil com datação de carbono!",
        "A seleção natural não conseguiu resolver tudo...",
        "Datamento radiométrico prova a idade da Terra!",
        "Observamos evolução em tempo real!",
        "A ignorância gera mais confiança do que o conhecimento!",
        "2000 anos tem meu ovo esquerdo!"
    ];

    // Funções do jogador
    const atacar = () => {
        if (turno !== 'jogador' || gameOver) return;

        const frase = frasesAtaque[Math.floor(Math.random() * frasesAtaque.length)];
        const dano = Math.floor(Math.random() * 16) + 10; // 10-25 de dano

        let novoDano = dano;
        if (defesaVilao) {
            novoDano = Math.floor(dano / 2);
            setDefesaVilao(false);
        }

        const novaVidaVilao = Math.max(0, vidaVilao - novoDano);
        setVidaVilao(novaVidaVilao);

        setMensagem(`Você grita: "${frase}" causando ${novoDano}% de dano!`);
        setTurno('vilao');
    };

    const defender = () => {
        if (turno !== 'jogador' || gameOver) return;

        const frase = frasesDefesa[Math.floor(Math.random() * frasesDefesa.length)];
        setDefesaHeroi(true);
        setMensagem(`Você se defende: "${frase}"`);
        setTurno('vilao');
    };

    const usarPocao = () => {
        if (turno !== 'jogador' || gameOver) return;

        const frase = frasesPocao[Math.floor(Math.random() * frasesPocao.length)];
        const cura = Math.floor(Math.random() * 21) + 10; // 10-30 de cura
        const novaVida = Math.min(100, vidaHeroi + cura);

        setVidaHeroi(novaVida);
        setMensagem(`Você usa poção: "${frase}" recuperando ${cura}% de vida!`);
        setTurno('vilao');
    };

    // Turno do vilão
    useEffect(() => {
        if (turno === 'vilao' && !gameOver) {
            const timer = setTimeout(() => {
                // Verifica se o jogo acabou
                if (vidaVilao <= 0 || vidaHeroi <= 0) return;

                // Vilão escolhe ação aleatória
                const acao = Math.floor(Math.random() * 3);

                if (acao === 0) { // Atacar
                    const frase = frasesAtaqueVilao[Math.floor(Math.random() * frasesAtaqueVilao.length)];
                    const dano = Math.floor(Math.random() * 11) + 10; // 10-20 de dano

                    let novoDano = dano;
                    if (defesaHeroi) {
                        novoDano = Math.floor(dano / 2);
                        setDefesaHeroi(false);
                    }

                    const novaVidaHeroi = Math.max(0, vidaHeroi - novoDano);
                    setVidaHeroi(novaVidaHeroi);
                    setMensagem(`Evolucionista contra-ataca: "${frase}" causando ${novoDano}% de dano!`);

                } else if (acao === 1) { // Defender
                    setDefesaVilao(true);
                    setMensagem('Evolucionista assume posição defensiva!');
                } else { // Usar poção (vilão não usa poção, então ataca)
                    const frase = frasesAtaqueVilao[Math.floor(Math.random() * frasesAtaqueVilao.length)];
                    const dano = Math.floor(Math.random() * 11) + 10;

                    let novoDano = dano;
                    if (defesaHeroi) {
                        novoDano = Math.floor(dano / 2);
                        setDefesaHeroi(false);
                    }

                    const novaVidaHeroi = Math.max(0, vidaHeroi - novoDano);
                    setVidaHeroi(novaVidaHeroi);
                    setMensagem(`Evolucionista ataca rapidamente: "${frase}" causando ${novoDano}% de dano!`);
                }

                setTurno('jogador');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [turno, gameOver]);

    // Verifica fim de jogo
    useEffect(() => {
        if (vidaHeroi <= 0) {
            setMensagem('O Evolucionista venceu! A ciência prevaleceu!');
            setGameOver(true);
        } else if (vidaVilao <= 0) {
            setMensagem('Você venceu! A Terra é plana!');
            setGameOver(true);
        }
    }, [vidaHeroi, vidaVilao]);

    // Reiniciar jogo
    const reiniciar = () => {
        setVidaHeroi(100);
        setVidaVilao(100);
        setMensagem('O combate recomeçou! Terraplanista, sua vez!');
        setDefesaHeroi(false);
        setDefesaVilao(false);
        setTurno('jogador');
        setGameOver(false);
    };

    return (
        <div className={styles.container}>
            <Vilao vida={vidaVilao} />

            <div className={styles.acoes}>
                <h3>{turno === 'jogador' ? 'Sua vez!' : 'Vez do Evolucionista...'}</h3>

                <div className={styles.botoes}>
                    <button
                        onClick={atacar}
                        className={styles.btnAtacar}
                        disabled={turno !== 'jogador' || gameOver}
                    >
                        Atacar
                    </button>

                    <button
                        onClick={defender}
                        className={styles.btnAtacar}
                        disabled={turno !== 'jogador' || gameOver}
                    >
                        Defender
                    </button>

                    <button
                        onClick={usarPocao}
                        className={styles.btnAtacar}
                        disabled={turno !== 'jogador' || gameOver}
                    >
                        Usar Poção
                    </button>
                </div>

                <div className={styles.resultado}>
                    <p>{mensagem}</p>
                    {gameOver && (
                        <button onClick={reiniciar} className={styles.btnReiniciar}>
                            Jogar Novamente
                        </button>
                    )}
                </div>
            </div>

            <Heroi vida={vidaHeroi} />
        </div>
    );
}