import React, { useState, useEffect } from 'react'
import './style.css';
import Card from '../../Components/Card';
import axios from 'axios';
import { withRouter } from "react-router-dom";

const Pictures = (props) => {

    /*
    let imagem = "https://exame.com/wp-content/uploads/2020/09/Vida-subterranea-em-marte.jpg";
    let descricao = " asdasdadssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"; 
    */

    const [imgList, setImagList] = useState([]);
    const [usuario, setUsuario] = useState("");
    
    useEffect(() => {
        const { id } = props.match.params;
        setUsuario(id);
        getImgs(setImagList);
    }
    , []);

    return (
        <div className="pictures-container">
            <div className="pictures-header">
             <h2> Bem vindo  { usuario }  </h2>
            </div>
            
            { !(imgList.length > 0) ? <div></div> :  

            <div className="pictures-imgs">
             {  imgList.map( elemento => {
                // console.log(elemento);
                    return (
                        <Card key= {elemento.id } imgsrc = { elemento.img_src } imgdesc = { elemento.camera.full_name } />
                    )
                }

             )}
             </div>
           }
        </div>
    )
}

function getImgs(setImagList ){
    
 const apiKey = "5aQgnewWTu9ljiLVmGcDo8jY7ENJJFNMnr16ylU4";
 const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-04-19&api_key=${apiKey}`;
 console.log(url);

 axios.get(url)
 .then( res => {
   // console.log(res.data.photos);
     setImagList(res.data.photos);
 })
 .catch(error => {
     console.log("erro -> " + error);
 })
}

export default withRouter(Pictures);