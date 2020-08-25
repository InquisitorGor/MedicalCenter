'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import { ExtButton } from '@sencha/ext-react-modern';
import { FormPanel, CheckBoxField } from '@sencha/ext-react-modern';

// tag::vars[]
const React = require('react'); // <1>
//const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
// end::vars[]

// tag::app[]
class MainApp extends React.Component { // <1>


	getButton(){
		return (
			//<EmployeeList employees={this.state.employees}/>
			<ExtButton text="click me"></ExtButton>
		)
	}

	render() { // <3>
		// return (
		// 	//<EmployeeList employees={this.state.employees}/>
		// 	<ExtButton text="click me"></ExtButton>
		// )
		return (
			<FormPanel shadow layout={{type: 'vbox', align: 'left'}} bodyPadding="10">
				<CheckBoxField boxLabel="Checked"/>
				<CheckBoxField boxLabel="Checked" checked/>
				<CheckBoxField boxLabel="Disabled" checked/>
				<CheckBoxField boxLabel="Disabled (checked)" disabled checked/>
			</FormPanel>

		)
	}
}
class ButtonExm extends React.Component {
	render() { // <3>
		return (
			//<EmployeeList employees={this.state.employees}/>
			<ExtButton text="click me"></ExtButton>
		)
	}
}


const Ext = window['Ext'];
Ext.onReady(() => {
	ExtReactDOM.render(<ButtonExm />, document.getElementById('react'));
	ExtReactDOM.render(<MainApp />, document.getElementById('draw'));
});
// end::render[]

