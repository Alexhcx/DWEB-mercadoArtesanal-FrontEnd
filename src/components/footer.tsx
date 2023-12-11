import styles from '../styles/footer.module.css'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.natuarte}>
                <h3>NATUARTE</h3>
                <ol>
                    <li>Produtos</li>
                    <li>Quem somos</li>
                    <li>Contato</li>
                </ol>
            </div>
            <div className={styles.socialmedia}>
                <h3>Redes Sociais</h3>
                <ol>
                    <li><img src={facebook} alt="facebook" />Facebook</li>
                    <li><img src={instagram} alt="instagram" />Instagram</li>
                    <li><img src={twitter} alt="twwitter" />Twitter</li>
                </ol>
            </div>
        </footer>
    )

}