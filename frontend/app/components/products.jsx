import ProductCard from "./productcard"

export default async function Products(){
    
    const response = await fetch("http://localhost:3000/api/products", {
        cache: "no-store"
    });
    console.log(response);
    
    const data = await response.json();
    const products = Array.isArray(data) ? data : (data.content ?? []);


    console.log(products);
    
    return (
        <div className="flex">
        { 
        products.map(product =>(   
            <ProductCard key={product.id} product={product}/>
        )) }
        </div>
        )
}