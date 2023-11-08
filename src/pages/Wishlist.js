import { Link } from "react-router-dom";

const Wishlist = () => {

	return (
		<section className="bg-white">
			<div className="container mx-auto">
				<div className="mb-8 flex items-center justify-center sm:mb-10">
					<h1 className="text-center text-lg font-semibold text-heading sm:text-xl">
						My Wishlists
					</h1>
				</div>
				<div className="flex flex-wrap -mx-4">
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
									<tr>
										<td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											<Link to={"#"}>
												Baby Spinach
											</Link>
										</td>
										<td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											<Link to={"#"}>
												<img
													src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75"
												/>
											</Link>
										</td>
										<td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											$75.00
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
											<a
												href="javascript:void(0)"
												className="inline-block px-6 py-2.5 border rounded-md border-red-500 text-red-500 hover:bg-red-600 hover:text-white font-medium"
											>
												Remove
											</a>
										</td>
									</tr>
									<tr>
										<td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											<Link to={"#"}>
												Baby Spinach
											</Link>
										</td>
										<td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											<Link to={"#"}>
												<img
													src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75"
												/>
											</Link>
										</td>
										<td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											$75.00
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
											<a
												href="javascript:void(0)"
												className="inline-block px-6 py-2.5 border rounded-md border-red-500 text-red-500 hover:bg-red-600 hover:text-white font-medium"
											>
												Remove
											</a>
										</td>
									</tr>
									<tr>
										<td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											<Link to={"#"}>
												Baby Spinach
											</Link>
										</td>
										<td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											<Link to={"#"}>
												<img
													src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75"
												/>
											</Link>
										</td>
										<td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
											$75.00
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
											<a
												href="javascript:void(0)"
												className="inline-block px-6 py-2.5 border rounded-md border-red-500 text-red-500 hover:bg-red-600 hover:text-white font-medium"
											>
												Remove
											</a>
										</td>
									</tr>
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