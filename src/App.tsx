import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoute';
import './app.module.scss';
const kevisual: any = document.getElementById('kevisual');

const basename = WEBPACK_SERVE ? '' : '/kevisual';
export const App = () => {
	return (
		<Router basename={basename}>
			<Routes>
				<Route path='/*' element={<MainRoutes />}></Route>
			</Routes>
		</Router>
	);
};

// Create a root.
const root = createRoot(kevisual);

root.render(<App />);
