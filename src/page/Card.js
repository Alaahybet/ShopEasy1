export default function Card({products}){
    return(
    <div className="card" >
        <img src={products.thumbnail} alt={products.title}/> 
        <h3>{products.title}</h3>
        <p>${products.price}</p> 
    </div>
    );
}