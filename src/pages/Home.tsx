import React, { useEffect, useState } from 'react';
import TableComponent from '../components/TableComponent';


async function loadData(){
	const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets';
	const response = await fetch(url);
	return await response.json();
}


const Home: React.FC = () => {
	const [ data, setData ] = useState();

	useEffect(() => {
		loadData().then((data) => {
			setData(data);
			console.log(data);
		});
	}, []);

	return (
		<>
			<h1> Sentisis Front-End Challenge by Héctor Matías González </h1>
			<TableComponent tableData={data} />
		</>
	);
};

export default Home;
