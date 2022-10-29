import { Route, Routes } from 'react-router-dom';
import { Demo1 } from '@/pages/demo';
import { Demo3 } from '@/pages/demo3';

export const MainRoutes = () => {
	return (
		<Routes>
			<Route index element={<Demo1 />}></Route>
			<Route path='/demo1' element={<Demo1 />}></Route>
			<Route path='/demo3' element={<Demo3 />}></Route>
		</Routes>
	);
};
