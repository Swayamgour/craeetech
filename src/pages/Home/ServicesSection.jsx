import { motion } from "framer-motion";
import styles from "../../style/ServicesSection.module.css";

const services = [
    {
        title: "Online Reputation Management",
        icon: "/assets/service-icon2.png",
    },
    {
        title: "Business Growth Strategy",
        icon: "/assets/service-icon2.png",
    },
    {
        title: "Search Engine Optimization",
        icon: "/assets/service-icon2.png",
    }
];

const ServicesSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.topGrid}>
                <motion.div
                    className={styles.imageBox}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/assets/service-img.png" alt="Creative team" />
                </motion.div>

                <div className={styles.headerContent}>
                    <span className={styles.subTitle}>✱ Creative Services</span>
                    <h2 className={styles.mainTitle}>
                        We deliver versatile end to <br /> end digital services
                    </h2>
                </div>

                <div className={styles.arrows}>
                    <button className={styles.arrowBtn}>←</button>
                    <button className={styles.arrowBtn}>→</button>
                </div>
            </div>

            <div className={styles.cardsGrid}>
                {/* Special Intro Card */}
                <motion.div className={styles.introCard}>
                    <img src="/assets/iconss.png" alt="star" className={styles.introIcon} />
                    <p>
                        Nexella is a dynamic best digital marketing agency
                        dedicated to empowering businesses through innovative online.
                    </p>
                    <div className={styles.btnWrapper}>
                        <button className={styles.exploreAll}>Explore All Services</button>
                        <div className={styles.smallArrow}>↗</div>
                    </div>
                </motion.div>

                {/* Service Cards */}
                {services.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.serviceCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className={styles.serviceIcon}>
                            <img src={item.icon} alt="icon" />
                        </div>
                        <h3>{item.title}</h3>
                        <div className={styles.cardFooter}>
                            <span>Explore More</span>
                            <div className={styles.footerArrow}>↗</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;