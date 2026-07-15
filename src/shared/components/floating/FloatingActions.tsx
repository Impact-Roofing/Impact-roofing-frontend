'use client';

import { useState, useEffect } from 'react';
import styles from './FloatingActions.module.css';
import { QuoteDrawer } from './Quote/QuoteDrawer';

export const FloatingActions = () => {
    const [mounted, setMounted] = useState(false);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    // Patrón estándar para evitar mismatches de hidratación SSR/CSR — el
    // lint "react-hooks/set-state-in-effect" lo marca porque en general
    // llamar setState directo en un efecto es un anti-patrón, pero este
    // caso puntual (esperar a estar montado en el cliente) es una excepción
    // aceptada y muy común en apps Next.js, no un bug real.
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <QuoteDrawer isOpen={isQuoteOpen} setIsOpen={setIsQuoteOpen} />
            {isQuoteOpen && (
                <div className={styles.drawerOverlay} onClick={() => setIsQuoteOpen(false)} />
            )}
        </>
    );
};