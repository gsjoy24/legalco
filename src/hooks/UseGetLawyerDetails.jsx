import axios from 'axios';
import { useEffect, useState } from 'react';

const UseGetLawyerDetails = (id) => {
	const [lawyerDetails, setLawyerDetails] = useState(null);
	const [control, setControl] = useState(true);
	const refetch = () => {
		setControl(!control);
	};
	useEffect(() => {
		(async () => {
			const res = await axios(`/api/lawyer/${id}`);
			if (res?.data) {
				setLawyerDetails(res?.data);
			}
		})();
	}, [id, control]);
	return { lawyerDetails, refetch };
};

export default UseGetLawyerDetails;
