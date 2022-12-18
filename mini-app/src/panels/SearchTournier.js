import React from 'react';
import PropTypes from 'prop-types';

const SearchTournier = props => (
  <Panel id={props.id}>        
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Поиск турниров
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);  
  
SearchTournier.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SearchTournier;