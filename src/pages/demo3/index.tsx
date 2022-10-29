import { Ruler } from '@/ruler';
import { useState } from 'react';

export const Demo3 = () => {
	const [text, setText] = useState('sfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfd');

	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div
				style={{
					position: 'absolute',
					left: 200,
					top: 100,
					width: '40%',
					height: '40%',
					background: 'red',
					overflow: 'hidden',
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
