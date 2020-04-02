import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ViewGlossaryItem from './ViewGlossaryItem.js';
import Error from './Error.js';

const ViewGlossary = (props) => {
    //TODO: find a way to eliminate setGlossaryJSX
    const [glossary, setGlossary] = useState([]);
    const [glossaryJSX, setGlossaryJSX] = useState([]);

    const glossaryItem = (item, letter) => {
        const getFirstLetter = (str) => {
            return str.toUpperCase()[0];
        }


        if(getFirstLetter(item.title) === letter.letter || (!isNaN(getFirstLetter(item.title)) && letter.letter==="#")){
            return(<div><a href = {"/glossary/" + item.title} className="text-secondary">{item.title}</a></div>);
        }
        else if(!isNaN(getFirstLetter(item.title)) && letter.letter!="#"){
            letter.letter = "#";
            return(
                <div className="glossary-letter card">
                    <h5 id={letter.letter}>{letter.letter}</h5>
                    <a href = {"/glossary/" + item.title} className="text-secondary">{item.title}</a>
                </div>
            );
        }
        else if(! (getFirstLetter(item.title) === letter.letter)){
            letter.letter = getFirstLetter(item.title);
            return(
                <div className="glossary-letter card">
                    <h5 id={letter.letter}>{letter.letter}</h5>
                    <a href = {"/glossary/" + item.title} className="text-secondary">{item.title}</a>
                </div>
            );
        }
    }


    const doesContain = (title, glossary) => {
        let contains = false;
        glossary.forEach( (item) => {
            if(item.title === title){
                contains = true;
            }
        });
        return contains;
    }

    const getItem = () => {
        if(!props.title){
            return <div style={{backgroundColor: "white"}} className="list-unstyled card-columns glossary">{glossaryJSX}</div>;
        }
        else if (glossaryJSX.size === 0){
            return <p>Loading Glossary Items...</p>
        }
        else if(doesContain(props.title, glossary) === false && glossary.length>0){
            document.location = "/glossary"
            return (<div><h3>Item not found</h3><p>Redirecting..</p></div>);
        }
        else{
            return <ViewGlossaryItem title= {props.title} className="glossary-item"/>;
        }
    }

    useEffect( () => {
      axios.get('/api/users/get_glossary')
        .then(res => {
            const items = res.data;
            const compare = (a,b) => {
                if(a.title.toLowerCase()<b.title.toLowerCase()){
                    return -1
                }
                if(a.title.toLowerCase()>b.title.toLowerCase()){
                    return 1
                }
                return 0;
            }

            items.sort( compare );

            const lastLetter = {letter : ""}
            setGlossary(items);
            setGlossaryJSX(items.map(item => glossaryItem(item, lastLetter)));
        })
        .catch(function (e) {
            console.log(e.response)
            if (e){
                setGlossaryJSX(<Error error={e} returnURL="/"/>)
                setGlossary([])
            }
        });
    }, []);

    return getItem();

};
export default ViewGlossary;
