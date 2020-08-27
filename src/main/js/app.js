'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import {Panel} from '@sencha/ext-react-modern';


const React = require('react');



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
const Ext = window['Ext'];
Ext.onReady(() => {
    ExtReactDOM.render(<MainView/>, document.getElementById('bottomPanel'));

});


