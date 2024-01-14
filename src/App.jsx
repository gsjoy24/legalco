import Navbar from './shared/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<main className="min-h-[100vh]">
				<Outlet />
			</main>
		</>
	);
}
export default App;
