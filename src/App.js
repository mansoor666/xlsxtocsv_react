import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import FileInputs from  './components/FileInput';
import * as XLSX from 'xlsx';
import DataTable from './components/DataTable';

function App() {
    const [items, setItems] = useState([]);

    const readExcel = (file) => {
       
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) =>{
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type:"buffer" } );
                
                const wsname = wb.SheetNames[0];
                
                const ws = wb.Sheets[wsname];

                const data= XLSX.utils.sheet_to_json(ws);
                
                resolve(data);
            };
            
            fileReader.onerror = (error) =>{
                reject(error);
            };
        });
        console.log(promise);
        promise.then((d)=>{
            console.log(d);
            setItems(d);
        });

    };
    console.log(items)

    return (
        <div >
            <input
            type ="file"
            onChange={(e ) => {
                const file = e.target.files[0];
               readExcel(file);
            }}
            />
  <DataTable item={items} /> 
            

        </div>
    );
}

export default App;