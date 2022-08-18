import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.container}>
			Copyright @ {new Date().getFullYear()} abcd. All Right Reserved.
		</footer>
	);
};

export default Footer;
