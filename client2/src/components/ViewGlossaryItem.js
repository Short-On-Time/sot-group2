import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

const ViewGlossaryItem = (props) => {
    const [glossaryItem, setGlossaryItem] = useState({});

    const createGlossaryItem = (item) => {
        const JSX = [
            <h3>{item.title}</h3>,
            <p className="text-primary"><b>Usage: </b> {item.usage}</p>,
            <p className="text-primary"><b>Definition: </b> {item.definition}</p>
        ];
        
        return JSX;
    }

    useEffect( () => {
      axios.get(`http://localhost:${config.server_port}/api/users/get_glossary/${props.title}`)
        .then(res => {
            const item = res.data;
            
            setGlossaryItem(item);
        })
    }, []);

    return (
      <div style={{backgroundColor: "white"}} className="glossary-item">
        { createGlossaryItem(glossaryItem) }
      </div>
    );
    
};
export default ViewGlossaryItem;
