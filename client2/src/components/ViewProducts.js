import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ViewProduct from './ViewProduct'
import Error from './Error'

const ViewProducts = (props) => {
    //TODO: find a way to eliminate setProductsJSX
    const [products, setProducts] = useState([]);
    const [productsJSX, setProductsJSX] = useState([]);

    const Product = (product, letter) => {
        if(! (product.name.toUpperCase()[0] === letter.letter)){
            letter.letter = product.name.toUpperCase()[0];
            return(
                <div className="glossary-letter card">
                    <h5>{letter.letter}</h5>
                    <a href = {"/products/" + product.name} className="text-secondary">{product.name}</a>
                </div>
            );
        }
        else{
            return(<div><a href = {"/products/" + product.name} className="text-secondary">{product.name}</a></div>);
        }
    }


    const doesContain = (name, products) => {
        let contains = false;
        products.forEach( (product) => {
            if(product.name === name){
                contains = true;
            }
        });
        return contains;
    }

    const getProduct = () => {
        if(!props.name){
            return <div style={{backgroundColor: "white"}} className="list-unstyled card-columns glossary">{productsJSX}</div>;
        }
        else if (productsJSX.size === 0){
            return <p>Loading Products...</p>
        }
        else if(doesContain(props.name, products) === false && products.length>0){
            document.location = "/products"
            return (<div><h3>Product not found</h3><p>Redirecting..</p></div>);
        }
        else{
            return <ViewProduct name = {props.name}/>;
        }
    }

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_product`)
        .then(res => {
            const products = res.data;

            const compare = (a,b) => {
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1
                }
                return 0;
            }

            products.sort( compare );

            const lastLetter = {letter : ""}
            setProducts(products);
            setProductsJSX(products.map(product => Product(product, lastLetter)));
        })
        .catch(function (e) {
            console.log(e.response)
            if(e){
                setProductsJSX(<Error error={e} returnURL="/"/>)
                setProducts([])
            }
        });
    }, []);

    return getProduct();

};
export default ViewProducts;
