import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';
import LoadingPage from './shared/Loading';
import Navbar from './shared/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<main className='min-h-[100vh]'>
				<Suspense fallback={<LoadingPage />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
			<Toaster position='top-center' />
		</>
	);
}
export default App;
