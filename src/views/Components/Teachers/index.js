import React from 'react';
import Crud from '../../../components/Crud';

//identificación, nombres, apellidos y género.

const config = {
	title: 'Docentes',
	state: 'teachers',
	search: 'identificacion',
	singular: 'Docente',
	pathname: '/Teacher',
	columns: [
		{ name: 'identificacion', text: 'Identificación', props: {width: 100} },
		{ name: 'nombres', text: 'Nombres' },
		{ name: 'apellidos', text: 'Apellidos' },
		{ name: 'genero', text: 'Género', props: {width: 100} },
	]
};

export default props => <Crud {...props} {...config} />;