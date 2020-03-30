import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ViewProductItem from './ViewProductItem.js';

const ViewProducts = (props) => {
    //TODO: find a way to eliminate setProcutJSX
    const [product, setProducts] = useState([]);
    const [productsJSX, setProductsJSX] = useState([]);

    const productItem = (item, letter) => {
        if(! (item.name.toUpperCase()[0] == letter.letter)){
            letter.letter = item.name.toUpperCase()[0];
            console.log("new letter:" + item.name);
            return(
                <div className="name-letter card">
                    <h5>{letter.letter}</h5>
                    <a href = {"/product/" + item.name} className="text-secondary">{item.name}</a>
                </div>
            );
        }
        else{
            return(<div><a href = {"/product/" + item.name} className="text-secondary">{item.name}</a></div>);
        }
    }


    const doesContain = (name, product) => {
        let contains = false;
        product.forEach( (item) => {
            if(item.name === name){
                contains = true;
            }
        });
        return contains;
    }

    const getItem = () => {
        if(!props.name){
            return <div style={{backgroundColor: "white"}} className="list-unstyled card-columns glossary">{productsJSX}</div>;
        }
        else if (productsJSX.size === 0){
            return <p>Loading Products Items...</p>
        }
        else if(doesContain(props.name, product) === false && product.length>0){
            document.location = "/product"
            return (<div><h3>Item not found</h3><p>Redirecting..</p></div>);
        }
        else{
            return <ViewProductItem name= {props.name}/>;
        }
    }

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_product`)
        .then(res => {
            const items = res.data;

            const compare = (a,b) => {
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1
                }
                return 0;
            }

            items.sort( compare );

            const lastLetter = {letter : ""}
            setProducts(items);
            setProductsJSX(items.map(item => productItem(item, lastLetter)));
        })
    }, []);

    return getItem();

};
export default ViewProducts;
