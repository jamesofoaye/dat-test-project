import styles from "./payment.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";

type UserSubmitForm = {
	name: string;
	email: string;
	password: string;
};

const PaymentSection = () => {
	// form validation schema
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.required("Email is required")
			.email("Enter valid email address"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters")
			.max(40, "Password must not exceed 40 characters"),
	});

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<UserSubmitForm>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = async (data: UserSubmitForm) => {
		// post request to the server
		const request = await fetch("http://54.169.31.224:3000/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const response = await request.json();

		console.log(response);
	};

	return (
		<section className={styles.container}>
			<div>
				<h1 className={styles.title}>Receive payments quickly from anywhere</h1>
				<p className={styles.subtitle}>
					Why kept very ever home mrs. Considered sympathize ten uncommonly
					occasional assistance sufficient not. Letter of on become he tended
					active enable to.
				</p>
			</div>

			<div className={styles.paymentForm}>
				<h3 className={styles.paymentFormHeader}>Get Started for Free</h3>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.paymentFormElement}>
						<input
							type="text"
							placeholder="Name"
							className={styles.paymentFormInput}
							{...register("name")}
						/>

						{errors.name && (
							<p className={styles.errorMessage}>{errors.name.message}</p>
						)}
					</div>

					<div className={styles.paymentFormElement}>
						<input
							type="email"
							placeholder="Email Address"
							className={styles.paymentFormInput}
							{...register("email")}
						/>

						{errors.email && (
							<p className={styles.errorMessage}>{errors.email.message}</p>
						)}
					</div>

					<div className={styles.paymentFormElement}>
						<input
							type="password"
							placeholder="Password"
							className={styles.paymentFormInput}
							{...register("password")}
						/>

						{errors.password && (
							<p className={styles.errorMessage}>{errors.password.message}</p>
						)}
					</div>

					<button className={styles.button}>
						{isSubmitting ? (
							<Bars color="#fff" height={25} width={50} />
						) : (
							"Get Started"
						)}
					</button>
				</form>
			</div>
		</section>
	);
};

export default PaymentSection;
