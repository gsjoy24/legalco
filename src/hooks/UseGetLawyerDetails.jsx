import axios from 'axios';
import { useEffect, useState } from 'react';

const UseGetLawyerDetails = (id) => {
	const [lawyerDetails, setLawyerDetails] = useState([]);
	const [control, setControl] = useState(null);
	const refetch = () => {
		setControl(!control);
	};

	useEffect(() => {
		(async () => {
			const res = await axios(`${import.meta.env.VITE_SERVER_URL}/lawyers/${id}`);
			if (res?.data) {
				setLawyerDetails(res?.data);
			}
		})();
	}, [id, control]);
	return { lawyerDetails, refetch };
};

export default UseGetLawyerDetails;
