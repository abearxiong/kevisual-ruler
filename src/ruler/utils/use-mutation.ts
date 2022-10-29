import { useEffect, useRef, useState } from 'react';
// MutationObserver
type Position = {
	width: number;
	height: number;
};
type Noop = () => any;

export const useMutationObserver = (target: HTMLDivElement, listenr: Noop) => {
	const MutationObserver = window.MutationObserver;
	const ref = useRef<MutationObserver | null>(null);
	const [lastValue, setLastValue] = useState<Position | null>(null);

	useEffect(() => {
		if (!target) return;
		const observer = new MutationObserver((mutationList) => {
			for (const mutation of mutationList) {
				console.log(mutation);
			}
			const width = +getComputedStyle(target).getPropertyValue('width');
			const height = +getComputedStyle(target).getPropertyValue('height');
			if (!lastValue) {
				setLastValue({ height, width });
				return;
			}
			if (width !== lastValue.width || height !== lastValue.height) {
				listenr?.();
				setLastValue({ width, height });
			}
		});
		observer.observe(target, {
			// childList: true, // 子节点的变动（新增、删除或者更改）
			attributes: true, // 属性的变动
			// characterData: true, // 节点内容或节点文本的变动
			// subtree: true, // 是否将观察器应用于该节点的所有后代节点
		});
		ref.current = observer;
		return () => {
			if (ref.current) {
				ref.current?.disconnect();
			}
		};
	}, [target]);
};
