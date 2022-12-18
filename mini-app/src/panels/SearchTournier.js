import React from 'react';
import PropTypes from 'prop-types';

import persik from '../img/persik.png';
import './Persik.css';

const SearchTournier = props => (
  <Panel id={props.id}>        
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Поиск турниров
		</PanelHeader>
		<Group></Group>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);  
  
SearchTournier.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SearchTournier;