import React from 'react';
import {
	BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const diagram = ({data}) => {
	return (
		<div style={{ width: '100%', height: 300 }}>
			<ResponsiveContainer>
				<BarChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 5, right: 30, left: 20, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="number"/>
					<YAxis/>
					<Tooltip />
					<Legend />
					<Bar dataKey="drawCount" name="Húzások száma" fill="#93cf2c" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default diagram;