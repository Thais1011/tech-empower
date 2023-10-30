import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import Banner from "../../components/Banner/Banner";

//aqui dentro nao havera uma pagina de detalhamento de produtos, e sim um modal que abrirá ao clicar em um produto

//estou criando uma API para usar, essa de pokemon não está boa para o que eu quero fazer

export const Products = () => {

    const [products, setProducts] = useState([])

    const onGetProducts = async () => { 
        const response = await fetch('https://pokeapi.co/api/v2/pokemon').then(res=>res.json()).then(json=> {setProducts(json.results)})
       
    }

    useEffect(() => {
        onGetProducts()
      }
        ,[])

    return (
        
            <div className={classes.productPage}>

                <Banner />

                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <img src={product.url} alt={product.name} />
                            <p>Preço x</p>
                        </div>
                    )
                }
                )}
            </div>
        
    )
}