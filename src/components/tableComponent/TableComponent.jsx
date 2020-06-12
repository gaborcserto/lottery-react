import React from 'react';
import {Table} from 'react-bootstrap';

class DataTable extends React.Component {
	render() {
		return (
			<Table striped bordered hover size="sm">
				<thead>
				<tr>
					<th>#</th>
					<th>First title</th>
					<th>Second title</th>
					<th>Third title</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1</td>
					<td>item</td>
					<td>item</td>
					<td>item</td>
				</tr>
				<tr>
					<td>2</td>
					<td>item</td>
					<td>item</td>
					<td>item</td>
				</tr>
				<tr>
					<td>3</td>
					<td>item</td>
					<td>item</td>
					<td>item</td>
				</tr>
				</tbody>
			</Table>
		);
	}
}

export default DataTable;