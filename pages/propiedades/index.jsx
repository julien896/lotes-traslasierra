import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/Layout';
import LandsList from '@/components/LandsList';

const Propiedades = () => {
    return ( 
        <>
        <Head>
            <title>Lotes Traslasierra | Propiedades</title>
        </Head>
        <MainLayout>
            <LandsList />
        </MainLayout>
        </>
     );
}
 
export default Propiedades;