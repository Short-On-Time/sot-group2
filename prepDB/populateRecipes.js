import * as fs from 'fs'; 
import mongoose from 'mongoose';
import GlossaryModel from '../models/GlossaryModel.js';
import config from '../config/config.js';
import fastcsv from 'fast-csv';

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

var stream=fs.createReadStream('Consider_Herbs_Glossary.csv');
let glossaryData=[];
let index=0;
let csvStream=fastcsv
    .parse()
    .on('data',function(data){
        var glossaryEntry=new GlossaryModel({
            title: data[0],
            definition: data[1],
            usage: data[2],
            is_published: true,
        });
        if (glossaryEntry.title==''){
            glossaryEntry.title='MISSING TITLE';
            glossaryEntry.is_published=false;
        }
        if (glossaryEntry.definition==''){
            glossaryEntry.definition='MISSING DEFINITION';
            glossaryEntry.is_published=false;
        }
        if (glossaryEntry.usage==''){
            glossaryEntry.usage='MISSING USAGE';
            glossaryEntry.is_published=false;
        }
        if (index==0){
            glossaryData.push(glossaryEntry)
            index++;
        }
        else if (glossaryEntry.title!=glossaryData[index-1].title){
            glossaryData.push(glossaryEntry);
            index++;
        }
    })
    .on('end',function(){
        glossaryData.shift();
        //console.log(glossaryData);
        GlossaryModel.insertMany(glossaryData, (err) =>{
            if (err) throw err;
        })
    });

stream.pipe(csvStream);
mongoose.connection.close();
console.log("populated Glossary");