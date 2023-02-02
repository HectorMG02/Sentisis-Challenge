import React, { useEffect, useState } from 'react';
import { TableDataInterface } from '../interfaces/TableData.interface';
import TableComponent from '../components/Table/TableComponent';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import * as dataActions from '../redux/actions/data.actions';
import ModalComponent from '../components/Modal/ModalComponent';

async function getData(){
	const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets';
	const response = await fetch(url);
	return await response.json();
}


export default function Home() {
	const dispatch = useDispatch();
	const [data, setData] = useState<TableDataInterface[]>();
	const [productSelected, setProductSelected] = useState<TableDataInterface>();
	const [openProductInfoDialogue, setOpenProductInfoDialogue] = useState<boolean>(false);

	const savedData = useSelector((state: RootState) => state.tableData.data);


	const loadData = (data: TableDataInterface[]) => {
		setData(savedData.length ? savedData : data);
	};

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
	};

	const selectData = (id: string) => {
		const product: TableDataInterface | undefined = data?.find((item: TableDataInterface) => item.id === id);
		setProductSelected(product);
		setOpenProductInfoDialogue(true);
	};

	const handleSelectModalUnit = (id: string) => {
		const product: TableDataInterface | undefined = data?.find((item: TableDataInterface) => item.id === id);

		if(product){
			const quantity: number = product?.quantity || 0;
			handleUnitChange(quantity + 1, id);
			setOpenProductInfoDialogue(false);
		}
	};

	useEffect(() => {
		getData().then((data) => {
			const orderedData = data.sort((a: any, b: any) => {
				const dateA = new Date(a.releaseDate);
				const dateB = new Date(b.releaseDate);
				return dateB.getTime() - dateA.getTime();
			});

			orderedData.map((item: TableDataInterface) => item.quantity = 0);
			loadData(orderedData);
		});
	}, []);

	return (
		<>
			<h1> Sentisis Front-End Challenge by Héctor Matías González </h1>

			{
				productSelected && (<ModalComponent open={openProductInfoDialogue} handleClose={() => setOpenProductInfoDialogue(false)} handleSelectModalUnit={handleSelectModalUnit} data={productSelected} />)
			}


			{
				data ? (<TableComponent tableData={data} handleUnitChange={handleUnitChange} selectData={selectData} /> ) : (<p>Loading...</p>)
			}
		</>
	);
}
