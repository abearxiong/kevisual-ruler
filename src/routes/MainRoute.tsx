import { Route, Routes } from 'react-router-dom';
import { Demo1 } from '@/pages/demo';

export const MainRoutes = () => {
	return (
		<Routes>
			<Route index element={<Demo1 />}></Route>
		</Routes>
	);
};
