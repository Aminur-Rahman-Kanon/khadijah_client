import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import styles from "./header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Divine Touch by Ola</h1>
        </div>

        <nav className={styles.desktopNav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/services" className={styles.navLink}>
            Services
          </Link>
          <Link to="/packages" className={styles.navLink}>
            Packages
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <div className={styles.mobileNav}>
          <button className={styles.menuButton}>
            <Menu className={styles.menuIcon} />
            <span className={styles.srOnly}>Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

