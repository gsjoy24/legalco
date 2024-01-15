import { useState, useEffect } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import logo from '../assets/logo.jpg';
import grayLogo from '../assets/graylogo.png';
import { IoIosArrowForward } from 'react-icons/io';

import Container from '../Common/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
	const [menu, setMenu] = useState([]);
	console.log(menu);
	// Change navbar color when scrolling
	const [color, setColor] = useState(false);

	useEffect(() => {
		(async () => {
			const res = await axios(`${import.meta.env.VITE_SERVER_URL}/services`);
			if (res?.data) {
				setMenu(res?.data);
			}
		})();
	}, []);

	if (typeof window !== 'undefined') {
		const changeColor = () => {
			if (window?.scrollY >= 110) {
				setColor(true);
			} else {
				setColor(false);
			}
		};
		window.addEventListener('scroll', changeColor);
	}

	return (
		<div className={color ? 'sticky top-0 z-50 duration-300 nav-bg pt-0' : 'duration-300 text-white pt-5'}>
			<Container>
				<div className="drawer">
					<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

					<div className="drawer-content flex flex-col">
						{/* Navbar */}
						<div className="navbar p-0 w-full z-10">
							<div className={`flex-1 text-2xl md:text-3xl font-bold py-1 ${color ? 'text-white' : 'text-[#35868b]'}`}>
								<Link to="/">
									<img src={logo} alt="Logo" width={color ? 110 : 140} />
								</Link>
							</div>

							<div className="lg:hidden flex-none">
								<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost  ">
									<FaBarsStaggered size={18} />
								</label>
							</div>

							<div className="lg:block flex-none hidden">
								<ul className="menu-horizontal flex items-center gap-6 text-[15px] duration-200">
									{/* Navbar menu contents */}
									<div className="text-3xl md:text-3xl font-bold text-[#28676b] lg:hidden">
										<Link to="/">LegalCo</Link>
									</div>

									<li>
										<Link className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase" to="/">
											Home
										</Link>
									</li>

									<li>
										<div className="dropdown dropdown-hover">
											<label
												tabIndex={0}
												className="group text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase flex items-center justify-center gap-3 cursor-pointer"
											>
												<span>Services</span>
												<IoIosArrowForward className="group-hover:rotate-90 duration-200" />
											</label>
											<ul
												tabIndex={0}
												className="dropdown-content bg-[#225559d7] z-[1] menu p-2 shadow rounded-xl w-72"
											>
												{menu ? (
													menu?.map((service) => (
														<Link
															to={`/servicedetails/${service?._id}`}
															key={service?._id}
															className="text-[14px] text-white hover:text-slate-400 hover:bg-[#274244fa] py-[6px] px-4 rounded-md"
														>
															<span>{service?.service}</span>
														</Link>
													))
												) : (
													<div className="col-span-3 flex justify-center">
														<span className="loading loading-dots loading-md text-center py-8"></span>
													</div>
												)}
											</ul>
										</div>
									</li>

									<li>
										<Link className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase" to="/appointment">
											Appointment
										</Link>
									</li>

									<li>
										<Link className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase" to="/blogs">
											Blogs
										</Link>
									</li>
									<li>
										<Link className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase" to="/about-us">
											About Us
										</Link>
									</li>
									<li>
										<Link className="text-[#dff9fc] hover:text-[#b1cbce] duration-200 uppercase" to="/contact-us">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Drawer side menu */}
					<div className="drawer-side z-50">
						<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
						<ul className="w-72 min-h-full py-4 space-y-3 text-[16px] font-semibold text-start duration-200 bg-[#d1e0dc]">
							{/* Sidebar content here */}
							<div className="text-3xl font-bold text-[#35868b] lg:hidden pb-3 border-b border-[#348286]">
								<Link className="block" to="/">
									<img className="mx-5" src={grayLogo} alt="Logo" width={150} />
								</Link>
							</div>

							<li className="text-[#46b2b8] hover:text-[#348286] duration-200 pl-5">
								<Link to="/">Home</Link>
							</li>

							<li className="flex items-center gap-4 pl-5">
								<span className="text-[#46b2b8] hover:text-[#348286]">Services</span>
								<details className="dropdown">
									<summary className="text-[#46b2b8] hover:text-[#348286] duration-150"></summary>

									<ul className="dropdown-content -left-20 border z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
										{menu ? (
											menu?.map((service) => (
												<Link
													to={`/servicedetails/${service?._id}`}
													key={service?._id}
													className="text-[14px] text-[#348286] hover:text-slate-400 hover:bg-[#274244fa] py-[6px] px-4 rounded-md text-start"
												>
													<span>{service?.service}</span>
												</Link>
											))
										) : (
											<div className="col-span-3 flex justify-center">
												<span className="loading loading-dots loading-md text-center py-8"></span>
											</div>
										)}
									</ul>
								</details>
							</li>

							<li className="text-[#46b2b8] hover:text-[#348286] duration-200 pl-5">
								<Link to="/appointment">Appointment</Link>
							</li>
							<li className="text-[#46b2b8] hover:text-[#348286] duration-200 pl-5">
								<Link to="/blogs">Blogs</Link>
							</li>
							<li className="text-[#46b2b8] hover:text-[#348286] duration-200 pl-5">
								<Link to="/about-us">About Us</Link>
							</li>
							<li className="text-[#46b2b8] hover:text-[#348286] duration-200 pl-5">
								<Link to="/contact-us">Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
