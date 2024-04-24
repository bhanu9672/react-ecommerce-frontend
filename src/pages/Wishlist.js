import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeToWishlistItem } from "../store/slices/wishlistSlice";

const Wishlist = () => {
	const dispatch = useDispatch();
	const wishlists = useSelector((state) => state.Wishlist.wishlistItems)
	console.log(wishlists)

	const WishlistProduct = wishlists.length > 0 && wishlists.map(function (product) {
		if (product.img) {
			const blob = new Blob([Int8Array.from(product.img.data.data)], { type: product.img.contentType });
			var image = window.URL.createObjectURL(blob);
		}
		return (
			<>
				<tr key={product.id}>
					<td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
						<Link to={"#"}>
							{product.name}
						</Link>
					</td>
					<td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
						<Link to={"#"}>
							{
								product.img &&
								<img
									src={image}
									alt="Product"
									className=""
								/>
							}
						</Link>
					</td>
					<td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
						${product.price}
					</td>
					<td className="text-dark border-b border-r border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
						<a
							href="javascript:void(0)"
							className="inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium"
						>
							Add to cart
						</a>
					</td>
					<td className="text-dark border-b border-r border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
						<button
							type="button"
							onClick={() => dispatch(removeToWishlistItem(product._id))}
							className="inline-block px-6 py-2.5 border rounded-md border-red-500 text-red-500 hover:bg-red-600 hover:text-white font-medium"
						>
							Remove
						</button>
					</td>
				</tr>
			</>
		);
	})
	console.log(WishlistProduct)
	return (
		<section className="bg-white">
			<div className="container mx-auto">
				<div className="mb-8 flex items-center justify-center sm:mb-10">
					<h1 className="text-center text-lg font-semibold text-heading sm:text-xl">
						My Wishlists
					</h1>
				</div>
				<div className="flex flex-wrap -mx-4 mb-5">
					<div className="w-full px-4">
						<div className="max-w-full overflow-x-auto">
							<table className="w-full table-auto">
								<thead>
									<tr className="text-center bg-primary">
										<th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">
											Name
										</th>
										<th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">
											Image
										</th>
										<th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">
											Price
										</th>
										<th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">
											Add To Bag
										</th>
										<th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">
											Remove
										</th>
									</tr>
								</thead>
								<tbody>
									{
										WishlistProduct
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Wishlist;