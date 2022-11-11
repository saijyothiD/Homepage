import '../../../../src/Variable.css';

const Topbar = () => {
    return(
            <div className='container'>
                <nav class="navbar navbar-light">
                    <a href='/' class="navbar-brand text-gray p-0 m-0">logo</a>
                    <div class="d-md-flex flex-md-row-reverse justify-md-content-end align-items-center">
                        <div className='icons'>
                            <a href="/" className="px-1 text-green"><i class="bi bi-facebook"></i></a>
                            <a href="/" className="px-1 text-green"><i class="bi bi-twitter"></i></a>
                            <a href="/" className="px-1 text-green"><i class="bi bi-instagram"></i></a>
                        </div>
                        <button class="btn pe-1 fw-bold p-0 h-0 o-0 menu_btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" type="button">
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                </nav>
                <div class="offcanvas offcanvas-end text-center bg-light" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <button type="button" class="btn-close text-reset m-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Services</a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
export default Topbar;