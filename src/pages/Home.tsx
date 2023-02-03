import React, { useEffect, useState } from 'react';
import { TableDataInterface } from '../interfaces/TableData.interface';
import TableComponent from '../components/Table/TableComponent';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import * as dataActions from '../redux/actions/data.actions';
import CartButton from '../components/CartButton/CartButton';
import ProductDataModalComponent from '../components/Modal/ProductDataModalComponent';
import SummaryModalComponent from '../components/Modal/SummaryModalComponent';
import SpinnerComponent from '../components/Loading/SpinnerComponent';

async function getData(){
	const url = 'https://my-json-server.typicode.com/davidan90/demo/tickets';
	const response = await fetch(url);
	return await response.json();
}


const Home = () => {
	const dispatch: any = useDispatch();
	const [data, setData] = useState<TableDataInterface[]>();
	const [productSelected, setProductSelected] = useState<TableDataInterface>();
	const [openProductInfoModal, setOpenProductInfoModal] = useState<boolean>(false);
	const [openSummaryModal, setOpenSummaryModal] = useState<boolean>(false);

	const savedData = useSelector((state: RootState) => state.tableData.data);


	const loadData = (data: TableDataInterface[]) => {
		setData(savedData.length ? savedData : data);
	};

	const handleUnitChange = (value: number, id: string) => {
		if(value < 0) return;

		const newData: TableDataInterface[] = data?.map((item: TableDataInterface) => {
			if (item.id === id) {
				item.quantity = value;
			}
			return item;
		}) || [];

		setData(newData);
		dispatch(dataActions.saveData(newData));
	};

	const selectData = (id: string) => {
		const product: TableDataInterface | undefined = data?.find((item: TableDataInterface) => item.id === id);
		setProductSelected(product);
		setOpenProductInfoModal(true);
	};

	const handleSelectModalUnit = (id: string) => {
		const product: TableDataInterface | undefined = data?.find((item: TableDataInterface) => item.id === id);

		if(product){
			const quantity: number = product?.quantity || 0;
			handleUnitChange(quantity + 1, id);
			setOpenProductInfoModal(false);
		}
	};

	const getProductsSelected = () => {
		const productsSelected = data?.filter((item: TableDataInterface) => item?.quantity > 0);
		if(!productsSelected) return [];

		return productsSelected?.sort((a: TableDataInterface, b: TableDataInterface) => b.quantity - a.quantity);
	};

	const handleOpenSummaryModal = () => {
		setOpenSummaryModal(true);
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
			<h1> Séntisis Front-End Challenge by Héctor Matías González </h1>
			{
				productSelected && (<ProductDataModalComponent open={openProductInfoModal} handleClose={() => setOpenProductInfoModal(false)} handleSelectModalUnit={handleSelectModalUnit} data={productSelected} />)
			}

			{
				openSummaryModal && (<SummaryModalComponent
					open={openSummaryModal}
					handleClose={() => setOpenSummaryModal(false)}
					data={getProductsSelected()}
				/>)
			}

			{
				data ? (<TableComponent tableData={data} handleUnitChange={handleUnitChange} selectDataFunction={selectData} /> ) : (<SpinnerComponent />)
			}

			{
				getProductsSelected().length > 0 && (
					<CartButton onClick={handleOpenSummaryModal} />
				)
			}

		</>
	);
};


export default Home;