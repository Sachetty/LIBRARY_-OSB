import React from 'react';
import './App.css';

import { Title }from "./components/title/";
import { Input } from "./components/input";
import { Button } from "./components/button/";
import { List } from "./components/list";
import { NotFound } from "./components/notFound"

import Api from './services/Api';

function App() {

  const [data, setData] = React.useState([])
  const [text, setText] = React.useState("")
  const [notFound, setNotFound] = React.useState("")

  async function searchRequest(){
    await Api.get(text).then((response)=>{
       setData(response.data.hits);
       if(response.data.hits.length === 0){
         setNotFound("Nenhum registro encontrado")
       }
       console.log(data)
     }).catch((error)=>{
        console.log(error)
     })
   
     console.log(data)

   }

  return (
    <div className="containerHome">
    <div className="titlePageHome">
      <Title text="Biblioteca OSB"/>
      </div>
        <div className="inputHomePage">
          <Input setText={setText} />
          <Button onClick={searchRequest}/>
        </div>
        <div className="listHomePage">
          {data.length ?
          data.map((response:any, key:any) => (
            <List author={response.author ? response.author : "Autor não informado"} 
            title={response.title ? response.title : "Titulo não informado"} 
            url={response.url ? response.url : "Url não informada"} 
            key={key} />
          )): <NotFound title={notFound} />}
        </div>

    </div>
  );
}

export default App;
