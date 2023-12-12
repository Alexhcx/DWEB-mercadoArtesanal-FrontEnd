import styles from '../styles/contato.module.css'

import Navigation from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

export default function contato() {

    return (
        <>
            <Navigation />
                <main className={styles.main}>
                    <div>
                        <h1>Informações</h1>
                        <p>
                            Nome da Empresa: NatuArte
                        </p>
                        <p>
                            Endereço: Rua das Flores, 123, Setor Verdejante, Goiânia, Goiás
                        </p>
                        <p>
                            Telefone: (62) 1234-5678
                        </p>
                        <p>
                            E-mail: contato@natuarte.com.br
                        </p>
                        <p>
                            Website: <Link to="/">www.natuarte.com.br</Link>
                        </p>
                    </div>
                    <div>
                        <iframe className={styles.iframeContainer} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15286.920937927067!2d-49.259819371362276!3d-16.690377503716867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1702251798770!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" allow="no-referrer-when-downgrade"></iframe>
                    </div>
                </main>
            <Footer />
        </>
    )
}