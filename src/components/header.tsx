import styles from '../styles/header.module.css'
import icone from '../assets/icone.png'

import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <nav className={styles.navbar}>
                <ol className={styles.navol}>
                    <li className={styles.title}>
                        <span>
                            <Link to="/">
                                <img src={icone} alt="logo" className={styles.logo} />
                                <span>natuArte</span>
                            </Link>
                        </span>
                    </li>
                    <span className={styles.navcontainer}>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/quemsomos">Quem somos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </span>
                </ol>
            </nav>
        </header>
    )
}