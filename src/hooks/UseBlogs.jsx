import axios from 'axios';
import { useEffect, useState } from 'react';

const UseBlogs = () => {
	const [refetch, setRefetch] = useState(false);
	const [allBlogs, setAllBlogs] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`${import.meta.env.VITE_SERVER_URL}/blogs`);
				setAllBlogs(response.data);
			} catch (error) {
				// Handle error
				console.error(error);
			}
		})();
	}, [refetch]);
	return [allBlogs, refetch, setRefetch];
};

export default UseBlogs;
