import { Ruler } from '@/ruler';
import { useState } from 'react';

export const Demo3 = () => {
	const [text, setText] = useState('sfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfd');

	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div
				style={{
					position: 'absolute',
					left: 400,
					top: 200,
					width: 600,
					height: 600,
				}}
			>
				<Ruler>
					<div
						onClick={() => {
							setText(text + text + '-');
						}}
					>
						{text}
					</div>
				</Ruler>
			</div>
		</div>
	);
};
