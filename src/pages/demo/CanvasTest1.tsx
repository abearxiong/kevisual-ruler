import { useEffect, useRef } from 'react';

const defaultConfig = {
	width: 600 + 10,
	height: 30,

	// 刻度尺相关
	size: 7000, // 刻度尺总刻度数
	x: 10, // 刻度尺x坐标位置
	y: 30, // 刻度尺y坐标位置
	w: 5, // 刻度线的间隔
	h: 10, // 刻度线基础长度[高度]
};
const draw = (ctx: CanvasRenderingContext2D, config: any = defaultConfig) => {
	const size = (config.size || 100) * 10 + 1;
	const x = config.x || 0;
	const y = config.y || 0;
	const w = config.w || 5;
	const h = config.h || 10;
	let offset = 3; // 上面数字的偏移量
	// 画之前清空画布
	ctx.clearRect(0, 0, config.width, config.height);
	// 设置画笔属性
	ctx.strokeStyle = '#666';
	ctx.lineWidth = 1;
	ctx.font = '12px';

	for (let i = 0; i < size; i++) {
		ctx.save();
		if (i % 10 == 0) {
			offset = (String(i / 10).length * 6) / 2;
			const _x = x + i * w;
			ctx.translate(0, 0);
			ctx.rotate((-90 * Math.PI) / 180);
			ctx.fillText((i / 10) * 50 + '', -_x, 30);
			ctx.restore();
		}
	}
};
export const CanvasTest = () => {
	const ref = useRef<HTMLCanvasElement | null>(null);
	useEffect(() => {
		const ctx = ref.current?.getContext('2d');
		draw(ctx!);
	}, []);
	return (
		<div style={{ position: 'absolute', width: '100%', height: '100%' }}>
			<canvas ref={ref} width={600} height={600} />
		</div>
	);
};
