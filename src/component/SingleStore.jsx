import React from 'react'

function SingleStore(props) {
    const { id, name, city, address, phone, image, rating } = props;
    return (
        <>
            <div class="card" style={{ width: "18rem" ,margin:"10px 0"}}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{address}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{city}</li>
                    <li class="list-group-item">{phone}</li>
                    <li class="list-group-item">
                    {(() => {
                        const stars = [];
                        for (let i = 0; i < rating; i++) {
                          stars.push(<i key={i} className="fa fa-star" style={{color:"goldenrod"}}></i>);
                        }
                        return stars;
                      })()}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SingleStore