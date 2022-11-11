import '../../Assessment3/styles.css';
import '../../../../src/Variable.css';

const HoistingSolution = () => {
    return(
        <div className="bg-light">
            <div className="container">
                <div class=" py-5 px-3 position-relative click_main align-items-center">
                    <div class="hoisting_bnfts position-absolute top-50 translate-middle-y left-0 pe-3">
                        <div className='click_solutions'>
                            <h5 class="display-6 mb-4 text-green fw-bold">Hoisting solutions with benefits.</h5>
                            <p class="aa mb-4 pb-3 text-black">Turn your ideas into reality with Static.<br /> With a lot of powerful features, we guarantee simplicity and clarity.</p>
                        </div>
                        <div class="d-lg-flex">
                            <a href="/" class="btn btn-green px-4 text-white">read more</a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-10 col-lg-7 ps-md-5 ms-auto align-items-center text-center">
                        <div class="row flex-wrap">
                            <div class="col-md-6 p-2">
                                <div class="card py-3 mb-3 border-0">
                                    <div class="card-body">
                                        <i class="bi bi-lock text-green d-flex align-items-center justify-content-center rounded-circle m-auto"></i>
                                        <div className='card-btn py-3'>
                                           <a href="/" class="btn rounded-pill btn-green text-white">FREE</a>
                                        </div>
                                        <h5 class="card-title text-green">SSL Certificate</h5>
                                        <p class="card-text m-auto w-75">Duis aute irure dolor in rephrehenderit in voluptate velit esse cilum dolore eu fugiat nulla pariatur</p>
                                        <a href='/' className='text-black text-decoration-none'>MORE</a>
                                    </div>
                                </div>
                                <div class="card py-3 border-0">
                                    <div class="card-body">
                                        <i class="bi bi-code-slash text-green d-flex align-items-center justify-content-center rounded-circle m-auto"></i>
                                        <h5 class="card-title pt-3 text-green">Code Editor</h5>
                                        <p class="card-text m-auto w-75">Duis aute irure dolor in rephrehenderit in voluptate velit esse cilum dolore eu fugiat nulla pariatur</p>
                                        <a href='/' className='text-black text-decoration-none'>MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 p-2">
                                <div class="card mb-3 py-3 border-0">
                                    <div class="card-body">
                                        <i class="bi bi-lock text-green d-flex align-items-center justify-content-center rounded-circle m-auto"></i>
                                        <h5 class="card-title pt-3 text-green">Personal Domain</h5>
                                        <p class="card-text m-auto w-75">Duis aute irure dolor in rephrehenderit in voluptate velit esse cilum dolore eu fugiat nulla pariatur</p>
                                        <a href='/' className='text-black text-decoration-none'>MORE</a>
                                    </div>
                                </div>
                                <div class="card py-3 border-0">
                                    <div class="card-body">
                                        <i class="bi bi-lock text-green d-flex align-items-center justify-content-center rounded-circle m-auto"></i>
                                        <div className='card-btn py-3'>
                                           <a href="/" class="btn rounded-pill btn-green text-white">FREE</a>
                                        </div>
                                        <h5 class="card-title text-green">Media Storage</h5>
                                        <p class="card-text m-auto w-75">Duis aute irure dolor in rephrehenderit in voluptate velit esse cilum dolore eu fugiat nulla pariatur</p>
                                        <a href='/' className='text-black text-decoration-none'>MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HoistingSolution;