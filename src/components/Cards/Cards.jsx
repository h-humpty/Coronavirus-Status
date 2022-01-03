import react from 'react';
// : { confirmed, recovered, deaths, lastUpdate } 
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    console.log(confirmed)
    return (
        <h1>thisi Cards</h1>
    )
}
export default Cards;