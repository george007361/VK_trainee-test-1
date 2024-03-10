import * as React from 'react';

// Создать строку длиной 10 из 9 случайных a-z и 0-9
const genClassName = (() => {
	// Алфавит
	const chars : string[] = [];
	for (let i = 0; i < 9; ++i) {
		// Случайные a-z символы
		chars.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97));
		// Цифры
		chars.push(i.toString());
	}

	return () => {
		let class_name = chars[0]; // Имя класса не может начинаться с цифры
		for (let i = 0; i < 9; ++i) {
			class_name += chars[Math.floor(Math.random() * chars.length)];
		}
		return class_name;
	}
})();


interface IImageProps {
	src: string,
	width: number;
	height: number;
}

export default (props : IImageProps) => {
	const { src, width, height} = props;
	const class_name = genClassName();
	
	return (
		<>
			<style>
				{`.${class_name}{content: url(${src});width:${width}px;height:${height}px;}.${class_name}:hover{transform: scale(1.02);}`} 
			</style>
			<div className={class_name}/>
		</>
	);
};
