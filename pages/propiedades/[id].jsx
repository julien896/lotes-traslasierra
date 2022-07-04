import Head from 'next/head';
import { data } from '@/utils/fake'
import { useRouter } from "next/router";
import MainLayout from '@/components/Layout';
import Property from '@/components/Property';


export default function PropertyPage() {
    const router = useRouter();
    const property = data().filter(el => el.id === router.query.id)
    return (
    <>
    <Head>
      <title>Lotes Traslasierra | Propiedades</title>
    </Head>
    <MainLayout>
        <Property property={property[0]} /> 
    </MainLayout>
    </>
  )
}

