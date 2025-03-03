import Header from "./components/header";
import { SignatureTreatmentsTable, PickMixTable, LimitedTimeOffers } from "./components/massage-tables"
import styles from "./packages.module.css"

function HomePage() {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <main className={styles.main}>
        <section className={styles.introSection}>
          <h2 className={styles.title}>Premium Massage & Facial Packages</h2>
          <p className={styles.description}>
            At Divine Touch by Ola, we offer expert massage and advanced facial treatments tailored to relieve stress,
            enhance well-being, and promote deep relaxation.
          </p>
        </section>

        <section className={styles.treatmentSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sparkle}>✨</span>
            <h2 className={styles.sectionTitle}>Signature Treatment Packages</h2>
          </div>
          <div className={styles.card}>
            <SignatureTreatmentsTable />
            <p className={styles.note}>All packages are valid for one year. Book a package of 6 and save 10%!</p>
          </div>
        </section>

        <section className={styles.treatmentSection}>
          <h2 className={styles.sectionTitle}>Pick & Mix – Your Custom Wellness Plan</h2>
          <div className={styles.card}>
            <PickMixTable />
            <p className={styles.description}>
              Create a bespoke treatment plan by selecting from our wide range of services—perfect for relaxation,
              recovery, and rejuvenation.
            </p>
          </div>
        </section>

        <section className={styles.treatmentSection}>
          <h2 className={styles.sectionTitle}>Limited-Time Offers</h2>
          <div className={styles.card}>
            <LimitedTimeOffers />
            <p className={styles.description}>
              All packages are valid for one year, giving you complete flexibility to schedule your treatments.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage

