import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";

describe("Hero", () => {
	it("should render the hero section", () => {
		render(<Hero />);
		expect(
			screen.getByText("Different Spice For A Different Taste")
		).toBeInTheDocument();
	}),
		it("should render the hero section", () => {
			render(<Hero />);
			expect(screen.getByText("Get Started")).toBeInTheDocument();
		}),
		it("should render the hero section", () => {
			render(<Hero />);
			expect(
				screen.getByText(
					"Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim posuere quis consequat."
				)
			).toBeInTheDocument();
		});
});
