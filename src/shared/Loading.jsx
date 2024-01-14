import Lottie from 'lottie-react';
import animation from '../assets/loading.json';
const LoadingPage = () => {
	return (
		<div className="w-[250px] my-20 mx-auto">
			<Lottie animationData={animation} loop={true} />
		</div>
	);
};

export default LoadingPage;
