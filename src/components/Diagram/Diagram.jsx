import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const diagram = ({data, size}) => {
	const values = data.map(obj => { return obj.drawCount; });
	const min = Math.min(...values);
	const max = Math.max(...values);

	const round10 = number => {
		return Math.ceil(number / 10) * 10;
	}

	const minNumber = round10(min - 40);
	const maxNumber = round10(max + 10);

	return (
		<div style={{ width: '100%', height: size * 10 }}>
			<ResponsiveContainer>
				<BarChart
					data={data}
					layout="vertical"
					margin={{
						top: 5, right: 30, left: 20, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis dataKey="number" type="number" domain={[0, size]}/>
					<XAxis type="number" domain={[minNumber, maxNumber]}/>
					<Tooltip />
					<Legend />
					<Bar dataKey="drawCount" name="Húzások száma" fill="#93cf2c" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default diagram;