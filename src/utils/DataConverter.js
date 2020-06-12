import Axios from "axios";
import {proxy, url} from "../config";
import Papa from "papaparse";

export default class DataConverter {
	constructor(file, type) {
		this.file = file;
		this.type = type;
	}

	async getUrl() {
		try {
			const res = await Axios.get(`${proxy}${url}${this.file}`);
			let fields;

			if(this.type === 5) {
				fields = 'year;week;date;winner5;winner5prize;winner4;winner4prize;winner3;winner3prize;winner2;winner2prize;number1;number2;number3;number4;number5\n';
			} else if(this.type === 6) {
				fields = 'year;week;date;winner6;winner6prize;winner51;winner51prize;winner5;winner5prize;winner4;winner4prize;winner3;winner3prize;number1;number2;number3;number4;number5;number6\n';
			} else if(this.type === 7) {
				fields = 'year;week;date;winner7;winner7prize;winner6;winner6prize;winner5;winner5prize;winner4;winner4prize;number1m;number2m;number3m;number4m;number5m;number6m;number7m;number1;number2;number3;number4;number5;number6;number7\n';
			}
			fields.toString();
			res.data = await fields.concat(res.data);

			return res;
		} catch (error) {
			console.log(error);
		}
	}

	async convertToJson (data) {
		let convertedData = {};
		const count = this.getCountData(data);

		Papa.parse(data, {
			header: true,
			fastMode: true,
			complete: (results) => {
				console.log(results);
				for (let i = 0; i < count; i++) {
					convertedData[i] = (Object.assign({}, results.data[i]));
				}
			}
		});

		return convertedData;
	}

	getCountData (data) {
		return (data.match(/\n/g) || '').length + 1;
	}
}