import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MdArrowBackIos } from 'react-icons/md';
import Container from '../Common/Container';
import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
	const blog = useLoaderData();
	const [suggestedBlogs, setSuggestedBlogs] = useState([]);

	useEffect(() => {
		async function fetchSuggestedBlogs() {
			try {
				const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
				if (response.data) {
					const filteredBlogs = response.data.filter((suggestedBlog) => suggestedBlog._id !== blog?._id);
					setSuggestedBlogs(filteredBlogs);
				}
			} catch (error) {
				console.error('Error fetching suggested blogs:', error);
			}
		}
		fetchSuggestedBlogs();
	}, [blog]);

	return (
		<div className="min-h-screen py-2 md:py-5 -mt-[120px] mb-20">
			<div className="h-72 bg-white blog-details-bg"></div>
			<Container>
				<div className="flex justify-center mt-8">
					<div className="max-w-screen-xl p-6">
						<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 space-y-4">
							<div className="col-span-2">
								<h1 className="text-xl md:text-2xl mb-3 lg:mb-5 font-semibold">{blog?.title}</h1>
								<img src={blog?.image} alt={blog?.title} className="w-full mb-4 rounded-md" width={1000} height={400} />
								<p className="text-gray-400 text-center">{blog?.subtitle}</p>
								<p className="mt-4 mb-10 text-gray-800">{blog?.content}</p>

								<Link
									to="/blogs"
									className="flex justify-center items-center w-1/6 bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300"
								>
									<MdArrowBackIos className="text-xl" />
									<span>Back</span>
								</Link>
							</div>

							{/*============ blog suggestion section ============*/}
							<div className="sticky top-24 h-fit">
								<h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
								{Array.isArray(suggestedBlogs) && suggestedBlogs.length > 0 ? (
									<ul className="space-y-4">
										{suggestedBlogs.slice(0, 5).map((suggestedBlog) => (
											<li key={suggestedBlog.id} className="flex space-x-4">
												<div className="flex-shrink-0 w-[100px] h-[60px]">
													<img
														src={suggestedBlog.image}
														alt={suggestedBlog.title}
														className="rounded-lg"
														width={100}
														height={60}
													/>
												</div>
												<div className="flex-1">
													<Link className="text-blue-600 hover:text-cyan-700" to={`/blogs/${suggestedBlog?._id}`}>
														{suggestedBlog.title.split(' ').slice(0, 7).join(' ')}
													</Link>
												</div>
											</li>
										))}
									</ul>
								) : (
									<p>No suggested blogs available!</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default BlogDetails;
