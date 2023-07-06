"use client"
import axios from '@/api/axios'
import { Nav } from '@/components/Nav'
import StoreItems from '@/components/StoreItems'
import { useEffect, useRef, useState } from 'react'

interface StoreData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  browsingData:string
}

export default function Home() {
  const [products, setProducts] = useState<StoreData[]>([]);
  const browsingData = useRef(null)
  
  const handleScrollP1 = () =>{
    browsingData.current?.scrollIntoView({behavior:"smooth"})
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await axios.get<StoreData[]>('https://fakestoreapi.com/products', { signal });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      console.log("cancelled");
      controller.abort();
    };
  }, []);

  return (
    <main className="w-10/12 m-auto pt-12">
        <Nav createLink={'Create'} siteTitle={'OnlineStore'} profileLink={'Sam'} searchLink={'Search'} />

        <section className=''>
          <div className='height-100'>
            <h1 className='text-6xl font-[900] text-center uppercase padding-center pb-10 text-[#ccc]'>Buy and Sell online from anywhere</h1>
            <p className='text-[#ccc] text-center w-9/12 m-auto'>Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
            <div className='text-center mt-10'>
            <button className='border border-solid border-[#fff] px-4 py-2 rounded-lg uppercase hover:bg-[#fff] hover:text-black font-[700] duration-500' onClick={handleScrollP1}>Start Browsing</button>
            </div>
          </div>
          
          <div className='mt-32 mb-10'>
            <h2 className='font-[600] text-2xl uppercase mb-5' ref={browsingData}>Top Items of 2023</h2>
            <StoreItems product={products} />
            </div>
        </section>
    </main>
  )
}
