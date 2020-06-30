import React from 'react';

const latestLottoNumbers = props =>{
	return (
		<div>
			<table>
				<tr>
					<th>Dátum</th>
					<th>Év</th>
					<th>Hét</th>
					<th colSpan={props.type}>Számok</th>
					{props.type === 7 ? <th colSpan={props.type}>Gépi számok</th> : ''}
				</tr>
				<tr>
					<td>{props.date}</td>
					<td>{props.year}</td>
					<td>{props.week}.</td>
					<td>{props.number1}</td>
					<td>{props.number2}</td>
					<td>{props.number3}</td>
					<td>{props.number4}</td>
					<td>{props.number5}</td>
					{props.type === 6 ? <td>{props.number6}</td> : ''}
					{props.type === 7 ? {
						<td>{props.number6}</td>
						<td>{props.number7}</td>
						<td>{props.number1m}</td>
						<td>{props.number2m}</td>
						<td>{props.number3m}</td>
						<td>{props.number4m}</td>
						<td>{props.number5m}</td>
						<td>{props.number6m}</td>
						<td>{props.number7m}</td>
					}
			 : ''}
				</tr>
			</table>
		</div>
	)
}

export default latestLottoNumbers;