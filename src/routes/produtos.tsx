import Filtro from '../components/produtosFiltrados'
import Produtos from '../components/produtosFiltro'
import filtroStyles from '../styles/filtro.module.css'

import Navigation from '../components/header'
import Footer from '../components/footer'

export default function contato() {

    return (
        <>
            <Navigation />
                <main className={filtroStyles.main}>
                    <Filtro produtosFiltrados={[]} isLoading={false} searched={false} />
                    <Produtos />
                </main>
            <Footer />
        </>
    )
}