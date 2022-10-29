import { useEffect, useRef, useState } from 'react';
// ResizeObserver
type Position = {
	width: number;
	height: number;
};
type Noop = () => any;

export const useResizeObserver = (target: HTMLDivElement, listenr: Noop) => {
	const ResizeObserver = window.ResizeObserver;
	const ref = useRef<ResizeObserver | null>(null);
	const [lastValue, setLastValue] = useState<Position | null>(null);

	useEffect(() => {
		if (!target) return;
		const observer = new ResizeObserver((ResizeList) => {
			const width = target.clientWidth;
			const height = target.clientHeight;
			if (!lastValue) {
				setLastValue({ height, width });
				return;
			}
			if (width !== lastValue.width || height !== lastValue.height) {
				listenr?.();
				setLastValue({ width, height });
			}
		});
		observer.observe(target);
		ref.current = observer;
		return () => {
			if (ref.current) {
				ref.current?.disconnect();
			}
		};
	}, [target]);
};
