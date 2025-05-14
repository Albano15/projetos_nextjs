import React from 'react';
import Square from './Square';
import Piece from './Piece';
import styles from '../styles/Board.module.css';

const initialPositions: { [key: string]: 'white' | 'black' } = {
    // linha 0 (topo): peças pretas nas casas 1,3,5,7
    '0,1': 'black', '0,3': 'black', '0,5': 'black', '0,7': 'black',
    // linha 1: 0,2,4,6
    '1,0': 'black', '1,2': 'black', '1,4': 'black', '1,6': 'black',
    // linha 6: peças brancas
    '6,1': 'white', '6,3': 'white', '6,5': 'white', '6,7': 'white',
    '7,0': 'white', '7,2': 'white', '7,4': 'white', '7,6': 'white',
};

const Board: React.FC = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const isDark = (row + col) % 2 === 1;
            const key = `${row},${col}`;
            const pieceColor = initialPositions[key] || null;
            squares.push(
                <Square key={key} dark={isDark}>
                    {pieceColor && <Piece color={pieceColor} />}
                </Square>
            );
        }
    }

    return <div className={styles.board}>{squares}</div>;
};

export default Board;
