import React from 'react';
import { Table } from 'react-bootstrap';

const numberStatisticsTable = ({data, number}) => {

	const tbody = data.slice(0, number).map((value, index) => (
		<tr key={index}>
			<td>{value[0]}</td>
			<td>{value[1]}</td>
			<td />
			<td />
		</tr>
	));

	return (
		<Table responsive="sm">
			<thead>
			<tr>
				<th>#</th>
				<th>húzások száma</th>
				<th>első húzás dátuma</th>
				<th>utolsó húzás dátuma</th>
			</tr>
			</thead>
			<tbody>
				{tbody}
			</tbody>
		</Table>
	)
}

export default numberStatisticsTable;