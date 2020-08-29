'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import {Panel, TitleBar, Container, Button, Menu, MenuItem, Image} from '@sencha/ext-react-modern';


const React = require('react');



class MainView extends React.Component {

    render() {
        return (
            <Container platformConfig={{
                phone: {
                    titleAlign: 'center'
                },
                "!phone":{
                    titleAlign: 'center',
                    width: '100%',
                    height: '900px',
                    margin: '0'
                }
            }}>
                <TitleBar title="Medical Center" docked="top"
                          platformConfig={{
                              phone: {
                                  titleAlign: 'center'
                              }
                          }}
                >
                    <Button align="left">
                        {Ext.os.is.Phone && (
                            <Menu>
                                <MenuItem text="Inbox" iconCls="x-fa fa-inbox"/>
                                <MenuItem text="Profile" iconCls="x-fa fa-user"/>
                            </Menu>
                        )}
                    </Button>

                    {!Ext.os.is.Phone && (
                        <Button align="right" iconCls="x-fa fa-home" text="Home"/>
                    )}
                    {!Ext.os.is.Phone && (
                        <Button align="right" iconCls="x-fa fa-heartbeat" text="Doctors"/>
                    )}
                    {!Ext.os.is.Phone && (
                        <Button align="right" iconCls="x-fa fa-notes-medical" text="Doctor's notes"/>
                    )}
                    {!Ext.os.is.Phone && (
                        <Button align="right" iconCls="x-fa fa-calendar-plus" text="Schedule"/>
                    )}

                </TitleBar>
                <Panel
                    docked="bottom"
                    title="Common information"
                    height={250}
                    layout="hbox"
                    style={styles.heading}
                >
                    <Panel docked="left" layout="vbox" style={{margin: '10px'}}>
                        <div><b>Contacts</b></div>
                        <div>(4922)32-21-29 - Registry</div>
                        <div>root@gp2stud@gmail.com</div>
                    </Panel>
                    <Panel docked="left" layout="vbox" style={{margin: '10px'}}>
                        <div><b>Working hours</b></div>
                        <div>Mn-Fr: 7:30 a.m - 7:00 p.m</div>
                        <div>St: 8:00 a.m - 4:00 p.m Sun: 9:00 a.m - 3:00 p.m</div>
                    </Panel>
                    <Image docked="left"
                        height="191"
                        width="505"
                        src="img/map.jpg"
                    />
                </Panel>
            </Container>
        )
    }

}
const styles = {
    heading: {
        fontSize: '13px',
        fontFamily: 'Menlo, Courier',
    }
}
const cardDefaults = {
    fontSize: '16px',
    padding: '10px'
};

const Ext = window['Ext'];
Ext.onReady(() => {
    ExtReactDOM.render(<MainView/>, document.getElementById('bottomPanel'));

});


