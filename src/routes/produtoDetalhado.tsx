import filtroStyles from '../styles/produtoDetalhado.module.css'

import Navigation from '../components/header'
import Footer from '../components/footer'
import ProdutoDetalhado1 from '../components/produtoDetalhado'

export default function produtoDetalhado() {

    return (
        <>
            <Navigation />
                <main className={filtroStyles.main}>
                    <ProdutoDetalhado1  />
                </main>
            <Footer />
        </>
    )
}