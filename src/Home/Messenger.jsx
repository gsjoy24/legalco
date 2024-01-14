import { FacebookProvider, CustomChat } from 'react-facebook';
const Messenger = () => {
	return (
		<div>
			<FacebookProvider appId="127943877076242" chatSupport>
				<CustomChat pageId="122102789786007925" minimized={'true'} />
			</FacebookProvider>
		</div>
	);
};

export default Messenger;
