import CreateAmazing from '../../../images/create-amazing.png';

const SourceCode = () => {
    return(
        <div className="bg-light amazing_site position-relative py-5">
            <div className="container">
                <div className="open_source position-relative">
                        <div className='amazing_img position-relative w-75 m-auto'>
                            <img src={CreateAmazing} alt="source" className='w-100 me-5' />
                        </div>
                        <div className='website-card col-md-9 col-lg-6 ms-auto'>
                            <div className='web-card_cont ms-3 bg-white rounded px-5 py-3'>
                                <h5 class="display-6 mb-4 text-green fw-bold">Create Amazing Website</h5>
                                <p class=" pb-3 text-black">Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis tincidunt id aliquet risus feugiat in. auctor augue mauris augue neque gravida in fermentum et. Feugiat in fermentum <span className='border-bottom'>posuere</span> urna</p>
                                <p class="pb-3 text-gray-50">Image from <span className='text-decoration-underline'>Freepik</span></p>
                                <a href="/" class="btn btn-green text-white fw-bold me-4 mb-3">learn more</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default SourceCode;