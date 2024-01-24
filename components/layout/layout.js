import Link from 'next/Link'
import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h1>
                        MIRZAEE CAR
                    </h1>
                    <p>You can choose your car to buy.</p>

                </Link>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                Mirzaee  learn
                <a href="http://botostart.ir"> Next.js </a>
                | MIRZAEE CAR
            </footer>
        </>
    )
}
