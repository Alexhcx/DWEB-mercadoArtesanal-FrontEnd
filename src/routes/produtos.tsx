import React from 'react';

import styles from '../styles/produtos.module.css'

import Navigation from '../components/header'
import Footer from '../components/footer'

export default function contato() {

    return (
        <>
            <Navigation />
                <main className={styles.main}>
                    <h1>produtos</h1>
                </main>
            <Footer />
        </>
    )
}