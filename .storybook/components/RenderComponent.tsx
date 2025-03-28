import * as React from 'react';
import * as Locator from 'smokescreen/Locator';

import Container from '@/components/main/index';

export const locatorMatches = [
	'mimic',

	'wrapper',
	'contacts',
	'content',
	'picture',
	'title',
	'warning',

	'teaser',

	'img'
];

const response = require(`../responses/teaser-2.json`);
const items = response.result.body.direct.ads;

const locator = new Locator({
	enable: true,
	match: locatorMatches,
});

const transform = locator.transform.bind(locator);

const getElementByXpath = path =>
	document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

export default class extends React.Component<any> {

	node: React.RefObject<HTMLDivElement> = React.createRef();

	componentDidMount() {
		const element = this.node.current;

		if (/18\+/.test(element.innerHTML)) {
			console.warn('regexp 18+ HTML found');
		}

		if (/м.*о.*с.*к.*в.*а/i.test(element.innerHTML)) {
			console.warn('regexp м-о-с-к-в-а found');
		}

		if (getElementByXpath('//*[@id="root"]/div//div[contains(text(), "18+")]')) {
			console.warn('xpath 18+ found');
		}

		if (getElementByXpath('//*[@id="root"]/div//img')) {
			console.warn('xpath img found');
		}

		if (/18\+/.test(element.innerText)) {
			console.warn('regexp 18+ TEXT found');
		}

		if (getElementByXpath('//*[@id="root"]/div//div[contains(@class, "img")]')) {
			console.warn('xpath div with class img found');
		}

		if (getElementByXpath('//*[@id="root"]/div//div[@style]')) {
			console.warn('xpath div with style found');
		}
	}

	render() {
		return (
			<div ref={this.node}>
				<Container
					items={items}
					transform={transform}
					locator={locator}
				/>
			</div>
		);
	}
}
