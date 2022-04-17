import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="http://cdn30.us1.fansshare.com/image/wallpapergreen/blue-green-light-background-color-wallpaper-light-blue-279159843.jpg" class="card-img" alt="Background" 
                height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                       <h5 className="card-title display-3 fw-bolder mb-0">
                           New Season Arrivals
                       </h5>
                        <p className="card-text lead fs-2">
                            Check out all the trends
                         </p>
                 </div>
                </div>
            </div>
          <Products/>
        </div>
    );
}

export default Home;