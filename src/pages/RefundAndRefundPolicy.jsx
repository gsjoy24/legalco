import Container from '../Common/Container';
import PageMetaData from '../Common/PageMetaData';
import contact from '../assets/contactus.jpg';

const RefundAndRefundPolicy = () => {
	return (
		<div className="banner-image bg-[#35878b18] pb-12">
			<PageMetaData
				title="Return and Refund Policy"
				description="Review LegalCO Limited's Return and Refund Policy for a transparent understanding of our commitment to customer satisfaction. Our policy outlines the terms and conditions regarding product returns and refunds, providing clarity on eligibility criteria and procedures. At LegalCO, we prioritize your experience and aim to ensure a fair and straightforward process for handling returns and refunds. Explore our policy to make informed decisions and feel confident in your interactions with our services."
			/>
			<img className="h-96 object-cover -mt-[100px]" src={contact} alt="Banner" />
			<Container>
				<div className=" ">
					<h1 className="text-3xl text-center font-bold mt-14 mb-10">Our Website Return and Refund Policy</h1>
					<p className="  mb-4 mt-5 ">
						We appreciate your presence with us. We commend your desire to avail the services we offer. When you
						explore, evaluate, and make purchases from our services, we want to ensure that you have a rewarding
						experience. Just like any purchasing endeavor, there are applicable terms and conditions within our company.
						Our attorneys will condense as much as you allow. The key point to remember is that by placing an order or
						engaging in a transaction with us, you agree to adhere to the terms of our privacy policy. If, for any
						reason, you find yourself less than fully satisfied with any service we provide, hesitate not to reach out,
						and you can discuss any issues you may have with our services.
					</p>

					<p className="text-justify font-semibold">Customer Information</p>
					<p className="text-justify mb-4">
						We express our gratitude for your purchase of services or products via our app/ website, www.legalco.com.bd,
						hereinafter referred to as LegalCO. Please carefully review this policy and the LegalCO terms and
						conditions, as they offer crucial insights into your rights and responsibilities as our customer concerning
						any purchase or service we extend to you.
					</p>

					<p className="text-justify mb-4">
						We exert our best efforts to deliver services according to the specifications and timelines specified for
						each purchased service or product from LegalCO. However, if, due to unforeseen circumstances, we are unable
						to provide the service or product you acquired, you shall be eligible for a refund, subject to the following
						conditions:
					</p>

					<p className="text-justify mb-4">
						- A refund will only be considered if there is a clear, evident deficiency in the purchased service or
						product from LegalCO. - Should a customer pay for a service and subsequently request a refund solely due to
						a change of mind, the refund wont be processed, as no fault or defect lies with LegalCO. - Refund requests
						wont be accommodated after the work has been shared with you in cases of a change of mind. However, you will
						have the option to apply the paid amount towards an alternative LegalCO service of equal value, partially or
						wholly. - Refund requests raised 30 days after the completion of a service or product purchase, and after
						communication indicating completion, will be considered invalid.
					</p>

					<p className="text-justify mb-4">
						Once LegalCO approves a refund request, you will receive an email notification. The refund process might
						take a minimum of 7 business days and will be credited to your bank account. We handle this process
						meticulously, ensuring your money is returned promptly.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default RefundAndRefundPolicy;
