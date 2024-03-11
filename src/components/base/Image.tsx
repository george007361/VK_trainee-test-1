import * as React from 'react';
import * as cid from 'smokescreen/Cid';

interface IImageProps {
	src: string,
	width: number;
	height: number;
	className ?: string;
}

export default (props : IImageProps) => {
	const { src, width, height, className: otherClassName} = props;
	const imgClassName : string = cid();
	const classes = [
		imgClassName
	];

	if(otherClassName) {
		classes.push(otherClassName);
	}

	return (
		<>
			<style>
				{`.${imgClassName}{content: url(${src});width:${width}px;height:${height}px;}`} 
			</style>
			<div className={classes.join(' ')}/>
		</>
	);
};
