const ContactInfo = () => {
    return(
        <div className="bg-light py-5 contact-info position-relative">
            <div className="container">
                <div className="row contact-info-in p-lg-5 ps-md-3 pe-md-3 p-3 m-auto w-75 align-items-center bg-white rounded">
                     <div className="col-sm-12 col-md-6 col-lg-5 pb-4">
                        <h5 className="text-black fw-bold">Contact Info</h5>
                        <a href="tel:2345678910" className="d-flex text-black text-decoration-none py-2"><i class="bi bi-telephone text-green me-2"></i> +1 (234) 567-8910</a>
                        <a href="mailto:contact@yourmail.com" className="d-flex text-black text-decoration-none"><i class="bi bi-envelope text-green  me-2"></i> contact@yourmail.com</a>
                        <address className="py-2"><i class="bi bi-geo-alt text-green  me-2"></i>203, asabs, Behind Alis Steet,<br /> Australia</address>
                        <div className="row ms-0 social_icons">
                            <a href="/" className="w-auto px-1"><i class="bi bi-facebook text-green"></i></a>
                            <a href="/" className="w-auto px-1"><i class="bi bi-twitter text-green"></i></a>
                            <a href="/" className="w-auto px-1"><i class="bi bi-instagram text-green"></i></a>
                            <a href="/" className="w-auto px-1"><i class="bi bi-youtube text-green"></i></a>
                        </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-lg-7">
                        <form class="needs-validation" novalidate>
                            <div className="mb-2">
                                <input type="text" class="form-control border-0 btn-gray text-gray rounded-0" id="validationTooltip01" placeholder="Enter your Name" required />
                                <div class="invalid-feedback">
                                    Please enter valid name
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="email" class="form-control border-0 btn-gray text-gray rounded-0" id="validationTooltip01" placeholder="Enter a valid email address" required />
                                <div class="invalid-feedback">
                                    Please enter valid email
                                </div>
                            </div>
                            <div className="mb-2">
                                <textarea class="form-control border-0 btn-gray text-gray rounded-0" style={{height:'100px'}} id="validationTextarea" placeholder="Enter your message" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-green text-white w-100 text-center rounded-0" type="submit">Submit</button>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo;