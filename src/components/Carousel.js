import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://patelbakery.in/wp-content/uploads/2021/06/chocolate-pastry-2-new.jpg" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.idupfWFzwDFW6nTIqwWXTAHaF8?rs=1&pid=ImgDetMain" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
