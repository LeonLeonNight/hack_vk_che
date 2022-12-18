import React from 'react';
import PropTypes from 'prop-types';
import { Icon28Search } from '@vkontakte/icons';
import { Icon28GameOutline } from '@vkontakte/icons';
import { Icon28Notifications } from '@vkontakte/icons';
import { Icon28Profile } from '@vkontakte/icons';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, ButtonGroup, IconButton, Text } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => ( 
	<Panel id={id}>
		<PanelHeader>Profile</PanelHeader>
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		
		<Group>
			<Div style={rowStyles}>
				<ButtonGroup  mode="vertical">
					<Button stretched size="l" onClick={go} data-to="profile">
						Редактировать профиль
					</Button>

					<Button stretched size="l" onClick={go} data-to="teams">
						Команды
					</Button>						
				</ButtonGroup>
			</Div>
		</Group>
		<Group>
			<Div style={rowStyles}>	
				<ButtonGroup mode="horizontal">	
						<IconButton style={captionStyles} onClick={go} data-to="searchTournier">
							<Icon28GameOutline style={captionStyles} />
							<Text>Турниры</Text> 
						</IconButton>
						<IconButton style={captionStyles} onClick={go} data-to="notifications">
							<Icon28Notifications style={captionStyles} />							
							<Text>Уведомления</Text> 
						</IconButton>						
						<IconButton style={captionStyles} onClick={go} data-to="profile">
							<Icon28Profile style={captionStyles} />
							<Text>Профиль</Text> 
						</IconButton>						
				</ButtonGroup>
			</Div>
        </Group>
	</Panel>
);

const rowStyles = {
  display: "flex",
  justifyContent: "center",
  gap: 16,
  padding: 16,
};

const captionStyles = {
  marginTop: 8,
  textAlign: "center",
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
