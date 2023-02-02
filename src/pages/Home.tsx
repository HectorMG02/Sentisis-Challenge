import React, { useEffect, useState } from 'react';
import { TableDataInterface } from '../interfaces/TableData.interface';
import TableComponent from '../components/Table/TableComponent';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import * as dataActions from '../redux/actions/data.actions';

async function loadData(){
	const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets';
	const response = await fetch(url);
	return await response.json();
}


export default function Home() {
	const dispatch = useDispatch();
	const [ data, setData ] = useState<TableDataInterface[]>();

	const savedData = useSelector((state: RootState) => state.tableData.data);

	const handleUnitChange = (value: number, id: string) => {
		if(value < 0) return;

		const newData = data?.map((item: TableDataInterface) => {
			if (item.id === id) {
				item.quantity = value;
			}
			return item;
		});

		setData(newData);
		dispatch(dataActions.saveData(newData));
		console.log({savedData});
	};

	useEffect(() => {
		loadData().then((data) => {
			const orderedData = data.sort((a: any, b: any) => {
				const dateA = new Date(a.releaseDate);
				const dateB = new Date(b.releaseDate);
				return dateB.getTime() - dateA.getTime();
			});

			orderedData.map((item: TableDataInterface) => item.quantity = 0);

			setData(orderedData);
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
