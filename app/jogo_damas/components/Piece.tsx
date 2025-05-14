import React from 'react';
import styles from '../styles/Piece.module.css';

interface PieceProps {
    color: 'white' | 'black';
}

const Piece: React.FC<PieceProps> = ({ color }) => {
    const className = color === 'white' ? styles.white : styles.black;
    return <div className={className} />;
};

export default Piece;
