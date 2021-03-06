import React from 'react';
import './card.styles.css';

export const Card = (props) => (

    <div className='card-container' >

        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=${props.monster.id}&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <p> from {props.monster.address.city} </p>

    </div>

)