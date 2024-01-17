import Messenger from './components/Home/Messenger';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import LoadingPage from './shared/Loading';

function App() {
	return (
		<>
			<Navbar />
			<main className='min-h-[100vh]'>
				{/* <Suspense fallback={<LoadingPage />}> */}
				<Outlet />
				{/* </Suspense> */}
			</main>
			<Messenger />
			<Footer />
			<Toaster position='top-center' />
		</>
	);
}
export default App;
