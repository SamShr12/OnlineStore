import Link from "next/link";

interface StoreData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface StoreItemsProps {
  product: StoreData[];
}

export default function StoreItems( {product} : StoreItemsProps ) {
  return (
    <section className="grid-4">
      {product.map(el => (
        <div className="mt-10">
          <Link href={`/user/item/${el.id}`}>
          <img src={el.image} alt={el.title} className="rounded-lg cursor-pointer img-product"  />
          </Link>

          <div className="mt-1">
              <h2 className="font-[800] text-xl px-1">{el.title}</h2>
              <Link href={`/user/item/${el.id}`}>
              <p className="px-1 text-sm">Show more</p>
              </Link>
          </div>
        </div>
        
      ))}
        
    </section>
  )
}
