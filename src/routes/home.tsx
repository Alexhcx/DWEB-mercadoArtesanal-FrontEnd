import Produtos from '../components/produtos'

import homeStyles from '../styles/home.module.css'
import Navigation from '../components/header'
import Footer from '../components/footer'

export default function home() {

    return (
        <>
            <Navigation />
                <main className={homeStyles.main}>
                    <Produtos />
                </main>
            <Footer />
        </>
    )
}