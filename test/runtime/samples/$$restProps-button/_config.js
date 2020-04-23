export default {
	props: {
		a: 3,
		b: 4,
		c: 5,
		d: 6,
	},
	html: `
		<div>Length: 4</div>
		<div>Values: 4,5,false,1</div>
		<button d="4" e="5" foo="1"></button>
		<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
	`,
	async test({ assert, target, window }) {
		const [extraBtn, btn1, btn2, btn3, btn4, btn5, btn6, btn7] = Array.from(
			target.querySelectorAll("button")
		);
		const clickEvent = new window.MouseEvent("click");

		await btn1.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 4</div>
			<div>Values: 4,5,false,1</div>
			<button d="4" e="5" foo="1"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);

		await btn2.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 4</div>
			<div>Values: 34,5,false,1</div>
			<button d="34" e="5" foo="1"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);

		await btn3.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 4</div>
			<div>Values: 34,5,false,31</div>
			<button d="34" e="5" foo="31"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);

		await btn4.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 5</div>
			<div>Values: 34,5,false,31,2</div>
			<button d="34" e="5" foo="31" bar="2"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);

		await btn5.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 5</div>
			<div>Values: 34,5,true,31,2</div>
			<button d="34" e="5" foo="31" disabled="" bar="2"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);

		await btn6.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 5</div>
			<div>Values: 4,5,true,31,2</div>
			<button d="4" e="5" foo="31" disabled="" bar="2"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);

		await btn7.dispatchEvent(clickEvent);

		assert.htmlEqual(
			target.innerHTML,
			`
			<div>Length: 5</div>
			<div>Values: 4,5,false,31,2</div>
			<button d="4" e="5" foo="31" bar="2"></button>
			<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
		`
		);
	},
};
