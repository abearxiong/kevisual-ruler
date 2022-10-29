import { useRef, useEffect } from 'react';

type Options = {
	capture?: boolean;
	passive?: any;
	once?: any;
};
export const useEventListener = (eventName, listener, target?: HTMLElement | Window | null, options: Options = {}, deps: React.DependencyList = []) => {
	const savedHandler = useRef<any>();
	const { capture, passive, once } = options || {};
	const element = target || window;
	useEffect(() => {
		savedHandler.current = listener;
	}, [listener]);

	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) {
			return;
		}

		const eventListener = (event: any) => savedHandler.current?.(event);
		const opts = options;
		element.addEventListener(eventName, eventListener, opts);
		return () => {
			element.removeEventListener(eventName, eventListener, opts);
		};
	}, [eventName, element, capture, passive, once, ...deps]);
};
