import React from 'react';
import Head from 'next/head';
import Board from './components/Board';
import './styles/globals.css';

const Home: React.FC = () => (
    <>
        <Head>
            <title>Tabuleiro de Dama</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Board />
    </>
);

export default Home;
