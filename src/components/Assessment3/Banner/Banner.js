import MainBanner from '../../../images/main-banner-image.png';
import '../../Assessment3/styles.css';
import '../../../../src/Variable.css';

const Banner = () => {
    return(
        <div className='container'>
            <div class="row py-5 px-3 click_main  align-items-center">
                <div class="col-md-6 pe-5 pb-5">
                    <div className='click_solutions w-75'>
                        <h5 class="display-4 mb-4 text-green fw-bold">One-click<br /> solutions for your static website.</h5>
                        <p class="aa mb-4 pb-3 text-gray-50">Image from <span className='text-decoration-underline'>Freepik</span></p>
                    </div>
                    <div class="d-lg-flex">
                        <a href="/" class="btn btn-green text-white fw-bold me-4 mb-3"><i class="bi bi-upload"></i> Upload for Free</a>
                        <a href="/" class="btn btn-gray text-black fw-bold mb-md-3"><i class="bi bi-youtube"></i> Watch Video</a>
                    </div>
                </div>
                <div class="col-md-6 text-lg-right text-center">
                    <div class="banner-phone-image"> <img src={MainBanner} alt="banner" className='w-100' /> </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;