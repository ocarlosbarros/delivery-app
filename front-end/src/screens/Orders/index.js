import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsList from '../../components/DetailsList';
import NavBar from '../../components/NavBar';
import OrderList from '../../components/OrdersList';

export default function Orders() {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      {
        id ? (
          <DetailsList />
        ) : (
          <OrderList />
        )
      }
    </>
  );
}
