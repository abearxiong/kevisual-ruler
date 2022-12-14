import React, { useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useEventListener } from './utils/use-event-listener';
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
		resize();
		setMout(true);
	}, []);
	useEffect(() => {
		if (mount) {
			drawHorizontal(0);
			drawVertical(0);
		}
	}, [mount]);
	const resize = () => {
		const width = ref.current?.clientWidth || 10;
		const height = ref.current?.clientHeight || 10;
		setWidth(width);
		setHeight(height);
		return { width, height };
	};

	const drawVertical = throttle((start: number) => {
		const ctx2 = createHDCanvas(canvasVerticalRef.current, 30, height + 10);
		draw2(ctx2, { width: 30, height: height + 10, size: 7000, x: 30, y: 10 - start, w: 5, h: 10 });
	}, 50);
	const drawHorizontal = throttle((start: number) => {
		const ctx = createHDCanvas(canvasHorizontalRef.current, width + 10, 30);
		draw(ctx, { height: 30, width: width + 10, size: 7000, x: 10 - start, y: 30, w: 5, h: 10 });
	}, 50);

	const onScroll = (e: any) => {
		const scrollTop = e.target.scrollTop;
		const scrollLeft = e.target.scrollLeft;
		const top = scrollTop;
		const left = scrollLeft;
		drawVertical(top);
		drawHorizontal(left);
	};

	useEventListener('scroll', onScroll, childRef.current);

	const ChildNodes = React.Children.map(props.children, (child: any, index) => {
		const { props } = child;
		const { style } = props;
		const cloneChild = React.cloneElement(child, {
			...props,
			ref: childRef,
			style: {
				...style,
				position: 'absolute',
				width: '100%',
				height: '100%',
				overflow: 'auto',
				left: !disabled ? 30 : 0,
				top: !disabled ? 30 : 0,
			},
		});
		return cloneChild;
	});
	const { background } = style || {};

	const visibility = disabled ? 'hidden' : 'visible';
	const blankStyle: any = {
		width: 30,
		height: 30,
		position: 'absolute',
		background: 'white',
		zIndex: 1,
	};
	const canvasStyle: any = {
		position: 'absolute',
		zIndex: 2,
		background: background ? background : '#fff',
		...ruleStyle,
		visibility,
	};
	return (
		<>
			<div style={{ background: '#fff', ...style, position: 'absolute', width: '100%', height: '100%' }} ref={ref}>
				<div
					style={{
						left: 0,
						top: 0,
						zIndex: 3,
						...blankStyle,
						visibility,
					}}
				></div>
				<div
					style={{
						left: '100%',
						top: 0,
						zIndex: 1,
						...blankStyle,
						visibility: visibility,
					}}
				></div>
				<div
					style={{
						left: 0,
						top: '100%',
						zIndex: 1,
						...blankStyle,
						visibility: visibility,
					}}
				></div>
				<canvas
					style={{
						left: 20,
						...canvasStyle,
					}}
					ref={canvasHorizontalRef}
				></canvas>
				<canvas
					style={{
						top: 20,
						...canvasStyle,
					}}
					ref={canvasVerticalRef}
				></canvas>
				{ChildNodes}
			</div>
		</>
	);
};
