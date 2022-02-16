import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros" />
          <div>
            <p>
              Nulla a sagittis mauris. Suspendisse sit amet augue vel nunc
              bibendum pretium. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Vestibulum lacinia
              tempor augue non lobortis. Proin posuere scelerisque nisi vitae
              sodales. Sed at vehicula tortor. In venenatis nunc et volutpat
              porta. Morbi aliquet eu nibh quis ultricies. Etiam bibendum
              laoreet ligula, nec pharetra tellus aliquam nec. Donec at
              scelerisque dui. Nam sed tempor justo, quis rhoncus orci. Morbi
              velit leo, auctor nec justo a, tincidunt malesuada nunc.
            </p>
            <p>
              Nulla a sagittis mauris. Suspendisse sit amet augue vel nunc
              bibendum pretium. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Vestibulum lacinia
              tempor augue non lobortis. Proin posuere scelerisque nisi vitae
              sodales. Sed at vehicula tortor. In venenatis nunc et volutpat
              porta. Morbi aliquet eu nibh quis ultricies. Etiam bibendum
              laoreet ligula, nec pharetra tellus aliquam nec. Donec at
              scelerisque dui. Nam sed tempor justo, quis rhoncus orci. Morbi
              velit leo, auctor nec justo a, tincidunt malesuada nunc.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
