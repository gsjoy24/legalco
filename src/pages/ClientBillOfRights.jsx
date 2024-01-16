import Container from '../Common/Container';
import PageMetaData from '../Common/PageMetaData';
import contact from '../assets/contactus.jpg';

const ClientBillOfRights = () => {
	return (
		<div className="banner-image bg-[#35878b18] pb-12">
			<PageMetaData
				title="Client Bill of Rights | LegalCO"
				description="Explore LegalCO Limited's Client Bill of Rights for a transparent commitment to your satisfaction. Our Client Bill of Rights outlines the principles guiding our client relationships, ensuring fairness, transparency, and respect. Discover the rights and privileges you can expect as a valued client of LegalCO. Trust in our dedication to uphold your rights and provide a positive experience as you navigate legal services through our app and web-enabled platform."
			/>

			<img className="h-96 object-cover -mt-[100px]" src={contact} alt="Banner" />
			<Container>
				<div className=" ">
					<h1 className="text-3xl text-center font-bold mt-14 mb-10">Our Website Client Bill of Rights</h1>
					<p className="  mb-4 mt-5 ">
						At LegalCO, we are committed to ensuring that you, as our valued client, are empowered and informed
						throughout your legal journey. We believe in open communication, active involvement, and the protection of
						your legal rights.
					</p>

					<p className="text-justify font-semibold mb-3">Your Rights:</p>
					<p className="text-justify mb-4">
						1. Right to Proper Legal Advice: You have the right to receive accurate and appropriate legal guidance.
					</p>

					<p className="text-justify mb-4">
						2. Right to Information and Understanding: You can ask questions and gain a clear understanding of your
						legal rights.
					</p>

					<p className="text-justify mb-4">
						3. Right to Overcome Barriers: We respect your preferred communication medium, striving to break down
						language and cultural barriers.
					</p>

					<p className="text-justify mb-4">
						4. Right to Personal Values: We provide caring, considerate, and respectful assistance, acknowledging your
						personal values, beliefs, and cultural practices.
					</p>
					<p className="text-justify mb-4">
						5. Right to Privacy and Confidentiality: Your privacy and confidentiality are upheld during legal
						consultations and document reviews.
					</p>
					<p className="text-justify mb-4">
						6. Right to Valuable Protection: You will be informed about the safeguarding of your valuables in accordance
						with LegalCO policies.
					</p>
					<p className="text-justify mb-4">
						7. Right to Control Service: You have the authority to decline, halt, or seek refunds for services as agreed
						upon.
					</p>
					<p className="text-justify mb-4">
						8. Right to Express Concerns: Your concerns, complaints, or grievances are welcomed at any time.
					</p>
					<p className="text-justify mb-4">
						9. Right to Informed Consent: Before consenting to legal actions on your behalf, you will receive
						comprehensive information.
					</p>
					<p className="text-justify font-semibold mb-3">Your Responsibilities:</p>
					<p className="text-justify mb-4">
						1. Provide Accurate Information: Furnish complete and precise details, including name, address, contact
						information, and legal requests.
					</p>
					<p className="text-justify mb-4">2. Respect LegalCO Staff: Treat our staff with respect and consideration.</p>
					<p className="text-justify mb-4">
						3. Meet Financial Obligations: Fulfill financial commitments related to your legal requests promptly.
					</p>
					<p className="text-justify mb-4">
						4. Adhere to Appointments: Be punctual for appointments or inform LegalCO in advance if changes are needed.
					</p>
					<p className="text-justify mb-4">
						5. Voice Concerns: Feel free to ask questions or share concerns by contacting ……………….. or
						info@legalco.com.bd.
					</p>
					<p className="text-justify font-semibold mb-3">Dispute Resolution:</p>
					<p className="text-justify mb-4">
						This Policy emphasizes Alternate Dispute Resolution (ADR) for conflict resolution. Parties will first
						attempt amicable mediation. If unresolved within thirty (30) days, disputes will move to arbitration, with
						an arbitrator chosen by the Company. The arbitrators decision is binding. Parties will bear their own
						proceedings costs, with the arbitrator having the option to assign costs. The arbitration seat is in Dhaka,
						Bangladesh.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default ClientBillOfRights;
