
import { Link } from "react-router-dom";
import Container from "../Common/Container";
import cyber from "../assets/Image/8905236.png";

const Cyberbullies = () => {
   return (
      <div className="bg-[#d1e0dc98] pt-2 pb-10 mb-14">
         <Container>
            <div className="flex items-center justify-center">
               <div className="md:p-8 md:flex md:items-center">
                  <div className="md:w-1/2 flex justify-end md:order-2 md:mt-8 mx-auto">
                     <img
                        src={cyber}
                        alt="Mobile Image"
                        className="max-w-full mx-auto"
                     />
                  </div>

                  <div className="md:w-1/2 md:order-1 mx-auto lg:ml-20">
                     <h2 className="text-3xl lg:text-4xl  mb-5 text-[#2B565A] font-extrabold">
                        HOW TO PREVENT IT AND PROTECT
                     </h2>
                     <p className="text-[18px] text-gray-500 mb-4">
                        Cyberbullies, Abuse, Harassment and Rape: Legal Insights and Solution
                     </p>
                     <div className="flex mt-3">
                        <Link
                           href="/appointment"
                           className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300"
                        >
                           Get Consultancy
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Cyberbullies;