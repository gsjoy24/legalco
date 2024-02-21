import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Messenger from './components/Home/Messenger';
import Footer from './shared/Footer';

import Navbar from './shared/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<main className='min-h-[100vh]'>
				<Outlet />
			</main>
			<Messenger />
			<Footer />
			<Toaster position='top-center' />
		</>
	);
}
export default App;
