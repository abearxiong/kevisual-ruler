type SimpleObject = {
	[key: string | number]: any;
};

type WEBPACK_SERVE = boolean;

declare const WEBPACK_SERVE: string;
declare module '*.css';
declare module '*.less';
declare module '*.sass';
// declare module '*.scss' {
// 	const content: { readonly [key: string]: string };
// 	export default content;
// }
declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare let Babel: any;
declare let System: any;
declare let ruler: any;
declare module 'react-kevisual';
// declare module '*.svg' {
// 	export function ReactComponent(
// 		props: React.SVGProps<SVGSVGElement>,
// 	): React.ReactElement;
// 	const url: string;
// 	export default url;
// }

declare let __webpack_init_sharing__: (arg0: string) => any;
declare let __webpack_share_scopes__: { default: any };
declare let __webpack_public_path__: string;
declare module 'workerize-loader*';
