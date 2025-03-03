import styles from "./massage-tables.module.css"

// Data from the PDF
const signatureTreatments = [
  {
    id: 1,
    treatment: "Deep Tissue Massage",
    single60: "£80",
    single90: "£115",
    package3_60: "£150",
    package3_90: "£240",
    package6: "£432 (6x60 mins)",
  },
  {
    id: 2,
    treatment: "Personalised Massage",
    single60: "£80",
    single90: "£115",
    package3_60: "£150",
    package3_90: "£240",
    package6: "£432 (6x60 mins)",
  },
  {
    id: 3,
    treatment: "Sports Massage",
    single60: "£85",
    single90: "£120",
    package3_60: "£250",
    package3_90: "£340",
    package6: "£612 (6x60 mins)",
  },
  {
    id: 4,
    treatment: "Aromatherapy Massage",
    single60: "£80",
    single90: "£115",
    package3_60: "£150",
    package3_90: "£240",
    package6: "£432 (6x60 mins)",
  },
  {
    id: 5,
    treatment: "Infrared Tension Relief",
    single60: "£85",
    single90: "£120",
    package3_60: "£250",
    package3_90: "£340",
    package6: "£612 (6x60 mins)",
  },
  {
    id: 6,
    treatment: "Thermal Gun Massage",
    single60: "£80",
    single90: "£115",
    package3_60: "£240",
    package3_90: "£340",
    package6: "£612 (6x60 mins)",
  },
  {
    id: 7,
    treatment: "Sculpting Facial Massage",
    single60: "£80",
    single90: "£115",
    package3_60: "£240",
    package3_90: "£340",
    package6: "£612 (6x60 mins)",
  },
  {
    id: 8,
    treatment: "Celestial EMS Lift & Sculpt",
    single60: "N/A",
    single90: "£120",
    package3_60: "N/A",
    package3_90: "£350",
    package6: "£756 (6x90 mins)",
  },
]

const pickMixPackages = [
  {
    id: 1,
    package: "Pick Any 3 Treatments (60 mins each)",
    price: "£240",
  },
  {
    id: 2,
    package: "Pick Any 6 Treatments (60 mins each)",
    price: "£480",
  },
  {
    id: 3,
    package: "Pick Any 3 Treatments (90 mins each)",
    price: "£350",
  },
  {
    id: 4,
    package: "Pick Any 6 Treatments (90 mins each)",
    price: "£650",
  },
]

const limitedTimeOffers = [
  {
    id: 1,
    offer: "Buy One, Get 50% Off the Second",
    description: "Ideal for first-time clients.",
  },
  {
    id: 2,
    offer: "Buy 3, Get 20% Off the 4th",
    description: "Invest in your well-being and enjoy added savings!",
  },
]

export function SignatureTreatmentsTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>Signature Treatment Packages</caption>
        <thead>
          <tr>
            <th className={styles.th}>Treatment</th>
            <th className={styles.th}>Single 60 mins</th>
            <th className={styles.th}>Single 90 mins</th>
            <th className={`${styles.th} ${styles.hiddenMobile}`}>Package of 3 (60 mins)</th>
            <th className={`${styles.th} ${styles.hiddenMobile}`}>Package of 3 (90 mins)</th>
            <th className={`${styles.th} ${styles.hiddenTablet}`}>Package of 6 (Save 10%)</th>
          </tr>
        </thead>
        <tbody>
          {signatureTreatments.map((treatment) => (
            <tr key={treatment.id} className={styles.tr}>
              <td className={`${styles.td} ${styles.treatmentName}`}>{treatment.treatment}</td>
              <td className={styles.td}>{treatment.single60}</td>
              <td className={styles.td}>{treatment.single90}</td>
              <td className={`${styles.td} ${styles.hiddenMobile}`}>{treatment.package3_60}</td>
              <td className={`${styles.td} ${styles.hiddenMobile}`}>{treatment.package3_90}</td>
              <td className={`${styles.td} ${styles.hiddenTablet}`}>{treatment.package6}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PickMixTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>Pick & Mix Custom Wellness Plans</caption>
        <thead>
          <tr>
            <th className={`${styles.th} ${styles.wide}`}>Pick & Mix Package</th>
            <th className={styles.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {pickMixPackages.map((pkg) => (
            <tr key={pkg.id} className={styles.tr}>
              <td className={`${styles.td} ${styles.packageName}`}>{pkg.package}</td>
              <td className={styles.td}>{pkg.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LimitedTimeOffers() {
  return (
    <div className={styles.offers}>
      <h3 className={styles.offersTitle}>Take advantage of these exclusive deals and make self-care a priority!</h3>
      <div className={styles.offersList}>
        {limitedTimeOffers.map((offer) => (
          <div key={offer.id} className={styles.offerItem}>
            <div className={styles.offerIcon}>
              <span>✨</span>
            </div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerName}>{offer.offer}</h4>
              <p className={styles.offerDescription}>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

