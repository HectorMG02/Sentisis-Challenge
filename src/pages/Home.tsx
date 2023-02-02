import React, { useEffect, useState } from 'react';
import { TableDataInterface } from '../interfaces/TableData.interface';
import TableComponent from '../components/Table/TableComponent';


async function loadData(){
	const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets';
	const response = await fetch(url);
	return await response.json();
}


export default function Home() {
	const [ data, setData ] = useState<TableDataInterface[]>();


	const handleUnitChange = (value: number, id: string) => {
		if(value < 0) return;

		const newData = data?.map((item: TableDataInterface) => {
			if (item.id === id) {
				item.unitSelector = value;
			}
			return item;
		});

		setData(newData);
	};

	useEffect(() => {
		loadData().then((data) => {
			const orderedData = data.sort((a: any, b: any) => {
				const dateA = new Date(a.releaseDate);
				const dateB = new Date(b.releaseDate);
				return dateB.getTime() - dateA.getTime();
			});

			orderedData.map((item: TableDataInterface) => item.unitSelector = 0);

			setData(orderedData);
			console.log(orderedData);
		});
	}, []);

	return (
		<>
			<h1> Sentisis Front-End Challenge by Héctor Matías González </h1>

			{
				data ? (<TableComponent tableData={data} handleUnitChange={handleUnitChange} /> ) : (<p>Loading...</p>)
			}
		</>
	);
}

