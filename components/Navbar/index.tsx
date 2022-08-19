import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, Cart } from "../Icons";
import styles from "./navbar.module.scss";
import { Minus, Plus } from "../Icons";
import { useCart } from "react-use-cart";

const Navbar = () => {
	const {
		isEmpty,
		cartTotal,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
	} = useCart();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={styles.container}>
			<Logo />

			<ul className={styles.links}>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>

				<li>
					<Link href="/#form">
						<a>Form</a>
					</Link>
				</li>

				<li>
					<Link href="/#menu">
						<a>Menu</a>
					</Link>
				</li>
			</ul>

			<div className={styles.cartSection}>
				<div className={styles.cart} onClick={() => setIsOpen(!isOpen)}>
					<Cart />
					<p className={styles.cartTotal}>{isEmpty ? 0 : totalUniqueItems}</p>
				</div>

				<button className={styles.button}>Log In</button>
			</div>

			{isOpen && (
				<div className={styles.cartMenu}>
					<h1 className={styles.cartMenuTitle}>Cart</h1>

					{items.map((item: any, index: number) => (
						<div key={index}>
							<div className={styles.cartMenuItem}>
								<div className={styles.cartMenuItemImg}>
									<Image
										src={item.image}
										alt={item.title}
										width={110}
										height={85}
									/>
								</div>

								<div className={styles.cartMenuItemInfo}>
									<p className={styles.cartMenuItemName}>{item.title}</p>

									<div className={styles.cartMenuItemActions}>
										<button
											className={styles.cartMenuItemButton}
											onClick={() =>
												updateItemQuantity(item.id, item.quantity - 1)
											}
										>
											<Minus />
										</button>

										<p className={styles.cartMenuItemQuantity}>
											{item.quantity}
										</p>

										<button
											className={styles.cartMenuItemButton}
											onClick={() =>
												updateItemQuantity(item.id, item.quantity + 1)
											}
										>
											<Plus />
										</button>

										<p className={styles.cartMenuItemPrice}>
											{item.currency} {item.price}
										</p>
									</div>
								</div>
							</div>

							<button
								className={styles.cartMenuItemRemove}
								onClick={() => removeItem(item.id)}
							>
								Remove
							</button>
						</div>
					))}

					<button className={styles.cartMenuItemCheckout}>
						Check Out
						<span className={styles.cartMenuItemCheckoutTotal}>
							{cartTotal}
						</span>
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
