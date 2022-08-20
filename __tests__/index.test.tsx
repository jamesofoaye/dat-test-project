import { render, screen, waitFor, within } from "@testing-library/react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PaymentSection from "../components/Payment";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

describe("Navbar", () => {
	it("should render the navbar", () => {
		render(<Navbar />);
		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Form")).toBeInTheDocument();
		expect(screen.getByText("Menu")).toBeInTheDocument();
		expect(
			screen.getByRole("button", {
				name: /log in/i,
			})
		).toBeInTheDocument();
	});
});

describe("Hero", () => {
	it("should render the hero section", () => {
		render(<Hero />);
		expect(
			screen.getByText("Different Spice For A Different Taste")
		).toBeInTheDocument();
		expect(screen.getByText("Get Started")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim posuere quis consequat."
			)
		).toBeInTheDocument();
	});
});

describe("PaymentSection", () => {
	it("should render the payment section", () => {
		render(<PaymentSection />);
		expect(
			screen.getByText("Receive payments quickly from anywhere")
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
			)
		).toBeInTheDocument();
	}),
		it("should render the basic fields", () => {
			render(<PaymentSection />);
			expect(
				screen.getByRole("heading", { name: "Get Started for Free" })
			).toBeInTheDocument();

			expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
			expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
			expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
			expect(
				screen.getByRole("button", {
					name: /get started/i,
				})
			).toBeInTheDocument();
		});
});
