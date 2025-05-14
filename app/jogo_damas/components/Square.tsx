import React from 'react';
import styles from '../styles/Square.module.css';

interface SquareProps {
    dark: boolean;
    children?: React.ReactNode;
}

const Square: React.FC<SquareProps> = ({ dark, children }) => {
    const className = dark ? styles.dark : styles.light;
    return <div className={className}>{children}</div>;
};

export default Square;
