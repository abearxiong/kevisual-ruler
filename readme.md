# kevisual-ruler

some other demo [ruler](http://mrfrankel.github.io/ruler/)

```
npm i @abearxiong/kevisual-ruler --registry=https://npm.pkg.github.com
```



```jsx
import { Ruler } from '@abearxiong/kevisual-ruler';

export const Demo = () => {
	return (
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
				<div>content</div>
			</Ruler>
		</div>
	);
};
```

## 图片

![预览](https://raw.githubusercontent.com/abearxiong/kevisual-ruler/main/public/kevisual-ruler.png)

