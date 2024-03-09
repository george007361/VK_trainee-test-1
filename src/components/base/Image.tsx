import * as React from 'react';

// Создать строку длиной 10 из 9 случайных a-z и 0-9
const genClassName = (() => {
	// Алфавит
	const chars = [];
	for (let i = 0; i < 9; ++i) {
		// Случайные a-z символы
		chars.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97));
		// Цифры
		chars.push(i);
	}

	return () => {
		let class_name = chars[0]; // Имя класса не может начинаться с цифры
		for (let i = 0; i < 9; ++i) {
			class_name += chars[Math.floor(Math.random() * chars.length)];
		}
		return class_name;
	}
})();

export default (props) => {
	const { src, ...rest } = props;
	const class_name = genClassName();

	return (
		<>
			<style>
				{`.${class_name}{content: url(${src});}.${class_name}:hover{transform: scale(1.02);}`}
			</style>
			<div className={class_name} {...rest} />
		</>
	);
};
