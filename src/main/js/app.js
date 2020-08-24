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
class App extends React.Component { // <1>


	render() { // <3>
		// return (
		// 	//<EmployeeList employees={this.state.employees}/>
		// 	<ExtButton text="click me"></ExtButton>
		// )
		return (
			<FormPanel shadow layout={{type: 'vbox', align: 'left'}} bodyPadding="10">
				<CheckBoxField boxLabel="Unchecked"/>
				<CheckBoxField boxLabel="Checked" checked/>
				<CheckBoxField boxLabel="Disabled" disabled/>
				<CheckBoxField boxLabel="Disabled (checked)" disabled checked/>
			</FormPanel>
		)
	}
}

const Ext = window['Ext'];
Ext.onReady(() => {
	ExtReactDOM.render(<App />, document.getElementById('react'));
});
// end::render[]

