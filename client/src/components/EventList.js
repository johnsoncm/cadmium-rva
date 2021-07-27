import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({
   date,
   time, 
   name,
   description,
   locationName,
   locationAddress,
   image,
   link,
   contributor,
   category

}) => {
    if (!name.length) {
        return <h3>No Events Yet</h3>;
    }
    return (
        <div>
            {{}}
        </div>
    )
}