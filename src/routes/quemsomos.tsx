import React from 'react';

import styles from '../styles/sobre.module.css'

import Navigation from '../components/header'
import Footer from '../components/footer'
import logotipo from '../assets/Logotipo.png'

export default function contato() {

    return (
        <>
            <Navigation />
                <main className={styles.main}>
                    <div>
                        <img src={logotipo} alt="logotipo natuarte" />
                    </div>
                    <div>
                        <h1>Quem somos</h1>
                        <p>
                            Era uma vez, em uma pequena cidade do interior do Brasil, uma jovem chamada Ana. Ana era uma menina sonhadora, que desde pequena sempre se interessou por natureza. Ela adorava passar os dias na floresta, observando os animais e as plantas.Quando Ana cresceu, decidiu que queria trabalhar com algo que envolvesse a natureza. Ela se formou em agronomia e começou a trabalhar em uma fazenda orgânica. Lá, ela aprendeu a cultivar plantas e a produzir alimentos de forma sustentável.Anos depois, Ana decidiu abrir sua própria empresa. Ela queria criar uma empresa que produzisse produtos artesanais feitos com ingredientes naturais. Assim, nasceu a Natuarte.
                        </p>
                        <p>
                            O objetivo da Natuarte é promover um estilo de vida mais sustentável. A empresa acredita que é possível viver de forma saudável e em harmonia com a natureza.

                            Os produtos da Natuarte são feitos com ingredientes naturais, como frutas, vegetais, ervas e especiarias. Eles são produzidos de forma artesanal, com cuidado e atenção aos detalhes.

                            A Natuarte oferece uma variedade de produtos, incluindo:
                        </p>
                        <ol>
                            <li>Cosméticos naturais</li>
                            <li>Produtos de higiene pessoal</li>
                            <li>Alimentos orgânicos</li>
                            <li>Decoração e acessórios</li>
                        </ol>
                        <p>
                            Os produtos da Natuarte estão disponíveis em lojas físicas e online. A empresa também oferece cursos e workshops sobre como viver de forma mais sustentável.
                        </p>
                        <p>
                            A Natuarte rapidamente se tornou um sucesso. Os produtos da empresa são conhecidos por sua qualidade, sabor e benefícios para a saúde.

                            A Natuarte é uma empresa comprometida com a sustentabilidade e com o bem-estar das pessoas. Ela está ajudando a promover um estilo de vida mais saudável e em harmonia com a natureza.

                            O Futuro da Natuarte

                            A Natuarte tem planos de expansão. A empresa quer abrir novas lojas físicas e ampliar sua linha de produtos.

                            A empresa também quer continuar a promover a sustentabilidade. A Natuarte quer inspirar as pessoas a viver de forma mais saudável e em harmonia com a natureza.
                        </p>
                    </div>
                </main>
            <Footer />
        </>
    )
}