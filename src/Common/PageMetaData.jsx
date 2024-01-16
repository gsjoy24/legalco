import { Helmet } from 'react-helmet';

const PageMetaData = ({ title, description }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Helmet>
	);
};

export default PageMetaData;
