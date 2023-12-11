import React from 'react';
import Produtos from '../components/produtosDisplay'

import styles from '../styles/home.module.css'

import Navigation from '../components/header'
import Footer from '../components/footer'

export default function home() {

    return (
        <>
            <Navigation />
                <main className={styles.main}>
                    <Produtos />
                </main>
            <Footer />
        </>
    )
}