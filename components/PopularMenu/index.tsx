import styles from "./popular-menu.module.scss";
import Image from "next/image";
import { useFetchData } from "../../Hooks/useFetchData";
import { Cart, Next, Previous } from "../Icons";
import { Bars } from "react-loader-spinner";
import { useCart } from "react-use-cart";
import toast, { Toaster } from "react-hot-toast";

const PopularMenu = () => {
	const { addItem } = useCart();

	const { data, error } = useFetchData("category");
	const { data: pizza, error: errorPizza } = useFetchData("category/pizza");
	// const { data: fries, error: errorFries } = useFetchData("category/fries");
	// const { data: burger, error: errorBurger } = useFetchData("category/burger");
	// const { data: drinks, error: errorDrinks } = useFetchData("category/drinks");

	console.log("data", data);
	//console.log("pizza", pizza);
	// console.log("fries", fries);
	// console.log("burger", burger);
	// console.log("drinks", drinks);

	return (
		<section className={styles.container} id={"menu"}>
			{/** Toast Notification */}
			<Toaster />

			<h1 className={styles.title}>Our Popular Menu</h1>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet
				tempus
				<br />
				dolor sed auctor. Volutpat facilisi in imperdiet quam penatibus ut.
			</p>

			<div className={styles.menuTabs}>
				{!data ? (
					<Bars color="#FDC913" height={50} width={50} />
				) : (
					data.data.map((category: any, index: number) => {
						return (
							<div key={index} className={styles.menuItem}>
								<input
									type="radio"
									id={category.slug}
									value=""
									checked={index === 0}
									onChange={() => {
										console.log("category", category);
									}}
								/>

								<label htmlFor={category.name} className={styles.menuItemText}>
									<div className={styles.menuItemImg}>
										<Image
											src={category.icon}
											alt={category.name}
											width={36}
											height={36}
										/>
									</div>

									<span className={styles.menuItemName}>{category.name}</span>
								</label>
							</div>
						);
					})
				)}
			</div>

			{/** Pizza Tab Content */}
			<div id="pizzaContent" className={styles.foodContainer}>
				<span className={styles.foodNavButton}>
					<Previous />
				</span>

				{/** Grid Tab Content */}
				<div className={styles.foodGrid}>
					{!pizza ? (
						<Bars color="#FDC913" height={50} width={50} />
					) : (
						<>
							{/** show the first 4 elements in the pzza array */}
							{pizza.data.slice(0, 4).map((food: any, index: number) => {
								return (
									<div key={index} className={styles.foodItem}>
										<Image
											src={food.image}
											alt={food.name}
											width={250}
											height={250}
											className={styles.foodItemImg}
										/>

										<div className={styles.foodItemInfo}>
											<h3 className={styles.foodItemName}>{food.title}</h3>
											<div className={styles.foodItemPrice}>
												<span className={styles.foodItemPriceCurrency}>
													{food.currency}
												</span>
												<span className={styles.foodItemPriceText}>
													{food.price.toFixed(2)}
												</span>
											</div>

											<button
												className={styles.foodItemPriceButton}
												onClick={() => {
													addItem(food);
													toast.success(`${food.title} added to cart`);
												}}
											>
												Add to Cart
												<span className={styles.foodItemPriceButtonIcon}>
													<Cart />
												</span>
											</button>
										</div>
									</div>
								);
							})}
						</>
					)}
				</div>

				<span className={styles.foodNavButton}>
					<Next />
				</span>
			</div>

			{/** Display error Message Incase there is an error when fetching category information */}
			{error && (
				<div>
					<p className={styles.center}>Cannot retrieve Category Details</p>
					<p className={styles.center}>Reason: {error?.message}</p>
				</div>
			)}

			{/** Display error Message Incase there is an error when fetching pizza information */}
			{errorPizza && (
				<div>
					<p className={styles.center}>Cannot retrieve Pizza Details</p>
					<p className={styles.center}>Reason: {error?.message}</p>
				</div>
			)}
		</section>
	);
};

export default PopularMenu;
