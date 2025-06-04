import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./client/productPage";
import ProductOverviewPage from "./client/productOverview";
import CartPage from "./client/cart";
import CheckoutPage from "./client/checkOut";

export default function HomePage() {
	return (
		<div className="w-full h-screen  flex flex-col items-center">
			<Header />
			<div className="w-full h-[calc(100vh-80px)]  flex flex-col items-center">
				<Routes path="/*">
					<Route
						path="/"
						element={
							<>
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/qChsYFWosJM?si=kAZdTEntE-hCeTNS"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
							</>
						}
					/>
					<Route path="/products" element={<ProductPage />} />
					<Route path="/about" element={<h1>About</h1>} />
					<Route path="/contact" element={<h1>Contact</h1>} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/overview/:id" element={<ProductOverviewPage />} />
					<Route path="/*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</div>
		</div>
	);
}
