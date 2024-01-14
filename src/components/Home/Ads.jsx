import mobile from '../../assets/Image/1095.png';
import qrcode from '../../assets/Image/qr-code (1).png';
import playstore from '../../assets/Image/playstore.png';
import Container from '../../Common/Container';

const Ads = () => {
	return (
		<div className="bg-[#d1e0dc98] pt-2 pb-10">
			<Container>
				<div className="flex items-center justify-center">
					<div className="md:p-8 md:flex md:items-center">
						<div className="md:w-1/2 flex justify-end md:order-2 md:mt-8 mx-auto">
							<img src={mobile} alt="Mobile Image" className="max-w-full mx-auto" />
						</div>

						<div className="md:w-1/2 md:order-1 mx-auto lg:ml-20">
							<h2 className="text-3xl lg:text-4xl font-bold mb-5">
								Get <span className="text-[#2B565A] font-extrabold">LegalCO</span> App
							</h2>
							<p className="text-[18px] text-gray-500 mb-4">
								Download the app for direct video or audio calls with lawyers, enabling seamless communication for legal
								consultations.
							</p>

							{/* QR Saner code */}
							<div className="flex items-center my-5">
								<img src={qrcode} alt="Q&A Code Scan" className="max-w-full w-1/3" />
								<h3 className="text-2xl font-medium ml-10">
									Scan to
									<br />
									Download
								</h3>
							</div>
							<h2 className="text-lg font-semibold">Download App From</h2>

							{/* App download buttons */}
							<div className="flex mt-3">
								<a
									href="https://play.google.com/store/apps/details?id=com.legalco.consultation"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="hover:bg-[#3C686B] hover:text-white flex items-center justify-center pl-2 pr-4 py-2 mr-3 md:mr-5 font-thin text-black-500 border border-[#225559] rounded duration-300">
										<img src={playstore} alt="Google Play Icon" className="w-8 md:w-12 h-8 md:h-12 mb-1 mr-2" />
										<p>
											<span className="block font-medium -ml-7 md:-ml-12">Get it on</span>
											<span className="md:text-xl font-semibold">Google Play</span>
										</p>
									</button>
								</a>
								{/* <button className="hover:bg-[#3C686B] hover:text-white flex items-center justify-center pr-4 md:pr-9 py-2 font-thin text-black-500 border border-[#225559] rounded duration-300">
                           <Image
                              src={ios}
                              alt="Google Play Icon"
                              className="w-9 md:w-14 h-9 md:h-14 mb-1 mr-2"
                           />
                           <p>
                              <span className="block font-medium -ml-7 md:-ml-12">
                                 Get it on
                              </span>
                              <span className="md:text-xl font-semibold">
                                 Apple Store
                              </span>
                           </p>
                        </button> */}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Ads;
