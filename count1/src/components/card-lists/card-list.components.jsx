import React from "react";
import {Card} from "../Card/card.component";
import './card-list.styles.css';


export const CardList = (props) => (
    <div className='card-list'>
        {props.myTokens.map(myToken => ( <Card key={myToken.id} myToken={myToken}> </Card> ))}
    </div>
);
 