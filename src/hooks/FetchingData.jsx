import { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = urlParams => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let URL = null;

	if(urlParams.queryType) URL =`${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_DATA_URL}${urlParams.queryType}.json`;

	useEffect(() => {
		if(URL !== null) {
			const doFetch = async () => {
				setLoading(true);
				try {
					const response = await axios.get(URL);
					setResponse(response.data);
				} catch (error) {
					setError(error)
					console.error("%cData Fetching Error:", "font-size: 18px", error);
				} finally {
					setLoading(false);
				}
			};

			doFetch();
		}
	}, [URL])

	return {response, error, loading};
}

export default FetchingData;