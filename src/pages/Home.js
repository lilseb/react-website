import React, { Fragment } from 'react';
import Navigation from '../components/Navigation.js'

// images
import img1 from '../img/img_1.jpg'

function Home() {
    return (
        <Fragment>
            <Navigation/>
            <h1 className='text-center'>Home</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>
                    <div className='col-4'>
                        <div className='photo'>
                            <h4>Nature</h4>
                            <button>More photo</button>
                        </div>
                        <img src={img1} alt="nature"/>
                    </div>


                </div>

            </div>
        </Fragment>
    );
}

export default Home;