import React from 'react';
import { Table } from 'react-bootstrap';

const table = ({data, number}) => {

	const tbody = data.slice(0, number).map((value, index) => (
		<tr key={index}>
			<td>{value.number}</td>
			<td>{value.ratio}</td>
			<td>{value.drawCount}</td>
		</tr>
	));

	return (
		<Table responsive="sm">
			<thead>
			<tr>
				<th>#</th>
				<th>arány</th>
				<th>húzások száma</th>
			</tr>
			</thead>
			<tbody>
				{tbody}
			</tbody>
		</Table>
	)
}

export default table;