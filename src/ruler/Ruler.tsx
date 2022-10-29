import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useEventListener } from './use-event-listener';
import throttle from 'lodash/throttle';
import { createHDCanvas, draw2, draw } from './utils';

type Props = {
	style?: React.CSSProperties;
	ruleStyle?: React.CSSProperties;
	children?: any;
	disabled?: boolean;
};
export const Ruler = (props: Props) => {
	const { children, style, ruleStyle, disabled } = props;
	React.Children.only(children);

	const ref = useRef<HTMLDivElement | null>(null);
	const childRef = useRef<HTMLDivElement | null>(null);
	const canvasHorizontalRef = useRef<HTMLCanvasElement | null>(null); // 横
	const canvasVerticalRef = useRef<HTMLCanvasElement | null>(null); // 竖直
	const [width, setWidth] = useState<number>(10);
	const [height, setHeight] = useState<number>(10);
	const [mount, setMout] = useState(false);

	useEffect(() => {
		const width = ref.current?.clientWidth || 10;
		const height = ref.current?.clientHeight || 10;
		setWidth(width);
		setHeight(height);
		setMout(true);
	}, []);
	useEffect(() => {
		if (mount) {
			drawHorizontal(0);
			drawVertical(0);
		}
	}, [mount]);
	const drawVertical = throttle((start: number) => {
		const ctx2 = createHDCanvas(canvasVerticalRef.current, 30, height + 10);
		draw2(ctx2, { width: 30, height: height + 10, size: 7000, x: 30, y: 10 - start, w: 5, h: 10 });
	}, 100);
	const drawHorizontal = throttle((start: number) => {
		const ctx = createHDCanvas(canvasHorizontalRef.current, width + 10, 30);
		draw(ctx, { height: 30, width: width + 10, size: 7000, x: 10 - start, y: 30, w: 5, h: 10 });
	}, 100);
	const onScroll = (e: any) => {
		const scrollTop = e.target.scrollTop;
		const scrollLeft = e.target.scrollLeft;
		const top = scrollTop;
		const left = scrollLeft;
		drawVertical(top);
		drawHorizontal(left);
	};

	useEventListener('scroll', onScroll, childRef.current);
	const ChildNodes = React.Children.map([props.children], (child: any, index) => {
		const { props } = child;
		const { style } = props;
		const cloneChild = React.cloneElement(child, {
			...child,
			ref: childRef,
			style: {
				...style,
				position: 'absolute',
				width: '100%',
				height: '100%',
				overflow: 'auto',
				left: 30,
				top: 30,
			},
		});
		return cloneChild;
	});
	const { background } = style || {};
	if (disabled) {
		return <>{children}</>;
	}
	return (
		<>
			<div style={{ background: '#fff', ...style, position: 'absolute', width: '100%', height: '100%' }} ref={ref}>
				<div
					style={{
						width: 30,
						height: 30,
						position: 'absolute',
						left: 0,
						top: 0,
						background: 'white',
						zIndex: 1,
					}}
				></div>
				<canvas
					width={width + 10}
					height='30'
					style={{
						position: 'absolute',
						left: 20,
						background: background ? background : '#fff',
						...ruleStyle,
					}}
					ref={canvasHorizontalRef}
				></canvas>
				<canvas
					width='30'
					height={height + 10}
					style={{
						position: 'absolute',
						top: 20,
						background: background ? background : '#fff',
						...ruleStyle,
					}}
					ref={canvasVerticalRef}
				></canvas>
				{ChildNodes}
			</div>
		</>
	);
};
