import styles from './InitialPage.module.scss';
import hourglass from '../../assets/images/hourglass.png';
import Form from '../../components/Form/FormEmail';
import videoBackground from '../../assets/background.mp4';
import backgroundFallback from '../../assets/images/background.png';

export default function InitialPage() {
    return (
        <div className={styles.container}>
            <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
                <source src={videoBackground} type="video/mp4" />
                <img src={backgroundFallback} alt="Background Fallback" className={styles.backgroundImage} />
            </video>
            <div className={styles.content}>
                <div className={styles.content__logo}>
                    <h1 className={styles.content__title}>ChronoMail</h1>
                    <img src={hourglass} className={styles.content__image} alt="hourglass" />
                </div>
                <div className={styles.texts}>
                    <p>Agende seus e-mails. Acerte o momento.</p>
                    <p>Você pode escrever e-mails e agendar a entrega deles para uma data futura. Simples e rápido.</p>
                </div>
                <Form />
            </div>
        </div>
    );
}
