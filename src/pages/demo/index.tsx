import { useEffect, useRef, useState } from 'react';
import { CanvasTest } from './CanvasTest1';
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
const draw = (ctx, config: any = defaultConfig) => {
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
	ctx.font = 12;
	for (let i = 0; i < size; i++) {
		// 开始一条路径
		ctx.beginPath();
		// 移动到指定位置
		ctx.moveTo(x + i * w, y);
		// 满10刻度时刻度线长一些 并且在上方表明刻度
		if (i % 10 == 0) {
			// 计算偏移量
			// 顶点位置
			// offset = (String(i / 10).length * 6) / 2;
			// ctx.fillText((i / 10) * 50, x + i * w - offset, y - h * 2.5);

			offset = (String(i / 10).length * 6) / 2;
			ctx.fillText((i / 10) * 50, x + i * w - offset + 9, y - h * 1.2);
			// 画刻度尺
			ctx.lineTo(x + i * w, y - h * 2);
		} else {
			// 满5刻度时的刻度线略长于1刻度的
			ctx.lineTo(x + i * w, y - (i % 5 === 0 ? 1.5 : 1) * h);
		}
		// 画出路径
		ctx.stroke();
	}
};
const defaultConfig2 = {
	width: 30,
	height: 600 + 10,

	// 刻度尺相关
	size: 7000, // 刻度尺总刻度数
	x: 30, // 刻度尺x坐标位置
	y: 10, // 刻度尺y坐标位置
	w: 5, // 刻度线的间隔
	h: 10, // 刻度线基础长度[高度]
};
const draw2 = (ctx: CanvasRenderingContext2D, config: any = defaultConfig2) => {
	const size = (config.size || 100) * 10 + 1;
	const x = config.x || 0;
	const y = config.y || 0;
	const w = config.w || 5;
	const h = config.h || 10;
	const offset = 3; // 上面数字的偏移量
	// 画之前清空画布
	ctx.clearRect(0, 0, config.width, config.height);
	// 设置画笔属性
	ctx.strokeStyle = '#666';
	ctx.lineWidth = 1;
	ctx.font = '12px';
	for (let i = 0; i < size; i++) {
		// 开始一条路径
		ctx.beginPath();
		// 移动到指定位置
		ctx.moveTo(x, y + i * w);
		// 满10刻度时刻度线长一些 并且在上方表明刻度
		if (i % 10 == 0) {
			// 画刻度尺
			ctx.lineTo(x - h * 2, y + i * w);
		} else {
			// 满5刻度时的刻度线略长于1刻度的
			ctx.lineTo(x - (i % 5 === 0 ? 1.5 : 1) * h, y + i * w);
		}
		// 画出路径
		ctx.stroke();
	}
	for (let i = 0; i < size; i++) {
		ctx.save();
		if (i % 10 == 0) {
			if (i === 0) continue;
			// 计算偏移量
			const text = (i / 10) * 50 + '';
			const textWxith = ctx.measureText(text).width;
			const _x = x + i * w;
			ctx.translate(0, 0);
			ctx.rotate((-90 * Math.PI) / 180);
			ctx.fillText(i * 5 + '', -_x + textWxith + 10, 18);
			ctx.restore();
		}
	}
};
export const Demo1 = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const canvas2Ref = useRef<HTMLCanvasElement | null>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const div = ref.current;
		const width = div?.clientWidth || 0;
		setWidth(width);

		const canvas = canvasRef.current!;
		const ctx = canvas.getContext('2d');
		draw(ctx);

		const canvas2 = canvas2Ref.current!;
		const ctx2 = canvas2.getContext('2d')!;
		draw2(ctx2);
	}, []);
	return (
		<>
			<div style={{ width: '600px', height: '600px', position: 'absolute', marginLeft: 400, marginTop: 200 }}>
				<div style={{ position: 'absolute', width: '100%', height: '100%' }} ref={ref}>
					<canvas
						width='610'
						height='30'
						//
						style={{ position: 'absolute', top: -30, left: -10 }}
						ref={canvasRef}
					></canvas>
					<canvas
						width='30'
						height='610'
						//
						style={{ position: 'absolute', top: -10, left: -30 }}
						ref={canvas2Ref}
					></canvas>
				</div>
				<div
					style={{
						position: 'absolute',
						//
						// background: 'red',
						width: '100%',
						height: '100%',
					}}
				>
					demo2: {width}
				</div>
				{/* <div style={{ position: 'absolute', top: 600, left: 600 }}>
					<CanvasTest />
				</div> */}
			</div>
		</>
	);
};
