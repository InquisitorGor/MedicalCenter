'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import {ExtButton} from '@sencha/ext-react-modern';
import {FormPanel, CheckBoxField, Panel, Container} from '@sencha/ext-react-modern';


const React = require('react');


class MainApp extends React.Component {

    render() {
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
    render() {
        return (
            <ExtButton text="click me"></ExtButton>
        )
    }
}

class DockBottom extends React.Component {
    render() {
        return (
            <Panel shadow layout="fit">
                <Panel
                    title="Dock Left"
                    docked="left"
                    width={200}
                    height={1000}
                    layout="center"
                    collapsible="left"
                    resizable={{
                        split: true,
                        edges: 'east',
                        dynamic: true
                    }}
                >
                    <code>dynamic: true</code>
                </Panel>
                <Panel
                    docked="top"
                    title="Dock Top"
                    flex={3}
                    resizable={{
                        split: true,
                        edges: 'south'
                    }}
                />
                <Panel
                    docked="bottom"
                    title="Dock Bottom"
                    flex={1}
                    layout="center"
                    resizable={{
                        split: true,
                        edges: 'north',
                        snap: 50
                    }}
                >
                    <code>snap: 50</code>
                </Panel>
            </Panel>
        )
    }
}


const styles = {
    panelBody: {
        fontSize: '18px',
        color: '#777'
    }
}

const Ext = window['Ext'];
Ext.onReady(() => {
    ExtReactDOM.render(<DockBottom/>, document.getElementById('bottomPanel'));

});


