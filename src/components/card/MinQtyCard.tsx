import React from "react";

interface productsProps{
  image:string,
  description:string,
  name:string
}

function MinQtyCard(props:productsProps){
    const style:React.CSSProperties={
        maxWidth:'100%',
        marginBottom:'10px'

    }
    return(
        <div className="card" style={style}>
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>

                </div>
        </div>
    )

}

export default MinQtyCard
