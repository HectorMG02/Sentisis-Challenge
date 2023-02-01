import React, { useEffect, useState } from 'react';
import TableComponent from '../components/TableComponent';
import { TableDataInterface } from '../interfaces/TableData.interface';


async function loadData(){
	const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets';
	const response = await fetch(url);
	return await response.json();
}


const Home: React.FC = () => {
	const [ data, setData ] = useState<TableDataInterface[]>();

	useEffect(() => {
		loadData().then((data) => {
			const orderedData = data.sort((a: any, b: any) => {
				const dateA = new Date(a.releaseDate);
				const dateB = new Date(b.releaseDate);
				return dateB.getTime() - dateA.getTime();
			});

			setData(orderedData);
			console.log(orderedData);
		});
	}, []);

	return (
		<>
			<h1> Sentisis Front-End Challenge by Héctor Matías González </h1>

			{
				data ? (<TableComponent tableData={data} />) : (<p>Loading...</p>)
			}


		</>
	);
};

export default Home;
