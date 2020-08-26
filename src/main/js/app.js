'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import {ExtButton} from '@sencha/ext-react-modern';
import {FormPanel, CheckBoxField, Panel, Container, Grid, Column} from '@sencha/ext-react-modern';


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
// class UsersGrid extends React.Component {
//
//     store = Ext.create('Ext.data.Store', {
//         fields: ['name', 'email'],
//         data: [
//             { name: 'Tim Smith', email: 'tim101@gmail.com' },
//             { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
//         ]
//     })
//
//     render() {
//         return (
//             <Grid title="Users" store={this.store}>
//                 <Column text="Name" dataIndex="name"/>
//                 <Column text="Email" dataIndex="email"/>
//             </Grid>
//         )
//     }
//
// }

class ButtonExm extends React.Component {
    render() {
        return (
            <ExtButton text="click me"></ExtButton>
        )
    }
}

class MainView extends React.Component {
    render() {
        return (
            <Panel fullscreen='true'>
                <Panel
                    title="Разделы"
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
                    <Panel><code>Раздел "Врачи"</code></Panel>
                    <Panel><code>Раздел "Направления"</code></Panel>
                    <Panel><code>Раздел "Расписание"</code></Panel>
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


// const styles = {
//     panelBody: {
//         fontSize: '18px',
//         color: '#777'
//     }
// }@babel/plugin-proposal-class-properties

const Ext = window['Ext'];
Ext.onReady(() => {
    ExtReactDOM.render(<MainView/>, document.getElementById('bottomPanel'));

});


