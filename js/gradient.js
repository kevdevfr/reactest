'use strict';

const e = React.createElement;

class GradientForm extends React.Component {
	
	constructor(props) {
		
		super(props);
		this.state = { first: '#BDFFF3', second: '#4AC29A' };
		this.changeGradient();
		
	}
	
	changeGradient() {
		
		var first = this.state.first;
		var second = this.state.second;
		var gradient = "background: " + first + ";background: -moz-radial-gradient(center, ellipse cover, " + first + " 0%, " + second + " 100%);background: -webkit-radial-gradient(center, ellipse cover, " + first + " 0%," + second + " 100%);background: radial-gradient(ellipse at center, " + first + " 0%," + second + " 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + first + "', endColorstr='" + second + "',GradientType=1 );";
		document.body.style = gradient;
		
	}
	

	render() {
		
		/* Formulaire <input/><input/><button/> */
		return e('div', null, null, 
				e(
				'input', 
				{ name: 'first', onChange: (event) => this.setState({first: event.target.value}), value: this.state.first },
				null
				),
				e(
				'input', 
				{ name: 'second', onChange: (event) => this.setState({second: event.target.value}), value: this.state.second },
				null
				),
				e(
				'button',
				{ onClick: () => this.changeGradient() },
				'Go'
				)
			);
		
	}
}

const domContainer = document.querySelector('#gradient_form_container');
ReactDOM.render(e(GradientForm), domContainer);