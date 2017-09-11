import React from 'react';
import Crud from '../../../components/Crud';

//identificación, nombres, apellidos y género.

const config = {
	title: 'Cursos',
	state: 'courses',
	search: 'codigo',
	singular: 'curso',
	pathname: '/Course',
	columns: [
		{ name: 'codigo', text: 'Código', require: true, props: {width: 100} },
		{ name: 'nombre', text: 'Nombre', require: true },
		{ name: 'observaciones', text: 'Observaciones', type: 'textarea' }
	]
};

export default props => <Crud {...props} {...config} />;