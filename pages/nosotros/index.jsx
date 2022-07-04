import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/Layout';
import Us from '@/components/Us';

const Nosotros = () => {
    return ( 
        <>
        <Head>
            <title>Lotes Traslasierra | Nosotros</title>
        </Head>
        <MainLayout>
            <Us />
        </MainLayout>
        </>
     );
}
 
export default Nosotros;