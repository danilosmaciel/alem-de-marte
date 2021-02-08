import React, { useEffect, useState  } from 'react';
import './style.css';
import { FaThumbsUp } from 'react-icons/fa';

const Card = (props) => {

    const [likes, setLikes] = useState(0);
    const [iLiked, setIliked] = useState(false);

    let likeAction = () => {
       
        if(iLiked){
            setLikes(likes - 1);
        }else{
            setLikes(likes + 1);
        }
       
        setIliked(!iLiked);
    }

    return (
        <article className="card-container" key= { props.id }>
            <div className="card">
                <div>
                    <img src= { props.imgsrc } alt= "imagem"  className="card-img"/>
                </div>
                <div className="card-likes">
                    <button className= { iLiked ? "card-likes-action-liked" : "card-likes-action" } onClick = { () => likeAction() } > Like <FaThumbsUp /> </button>
                    <div className="card-likes-counter"><span> { likes }</span> like{ likes > 1 ? 's' : '' }</div>
                </div>
                <div className="card-desc">
                     <p className="card-desc-area" >{ props.imgdesc }</p>
                </div>
            </div>
        </article>
    )
}



export default Card;