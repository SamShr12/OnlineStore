"use client"
import axios from "@/api/axios";
import { Nav } from "@/components/Nav";
import {useParams} from 'next/navigation'
import { useEffect, useState } from "react";

interface StoreData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function View() {
  const params = useParams()
  const [product, setProduct] = useState<StoreData | null>(null)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await axios.get<StoreData>(`https://fakestoreapi.com/products/${params.id}`, { signal });
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      console.log("cancelled");
      controller.abort();
    };
  }, [params.id]);

  return (
    <section className="w-10/12 m-auto pt-12">
        <Nav createLink={'Create'} siteTitle={'OnlineStore'} profileLink={'Sam'} searchLink={"Search"}/>
        <div className="product-img my-10">
          <img src={product?.image} alt="" />
          <div className="mt-7 text-3xl font-bold">
            <h2>{product?.title}</h2>
          </div>
          <div>
            <p>Price:{product?.price}</p>
          </div>
          <div>
            <p className="capitalize">{product?.category}</p>
          </div>
          <div>
            <p>{product?.description}</p>
          </div>
          <div>
            <button className="px-4 py-2 bg-[#47baef] text-white font-semibold mt-2">Add to Cart</button>
          </div>
        </div>
    </section>
  )
}
