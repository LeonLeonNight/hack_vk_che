import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, FormLayout, FormItem, Input, FormLayoutGroup, Textarea, Checkbox, Button, Link, Select, File } from '@vkontakte/vkui';

const Notifications = props => (
    <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>Persik
		</PanelHeader>
    </Panel>
 );
  
Notifications.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Notifications;