const Testimonials = () => {
    const TestiMonials = [
        {
            imageUrl:require("../../../images/test-img1.png"),
            description:'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.',
            title:'Nat Revnolds',
            content:'Chief Accountant'
        },
        {
            imageUrl:require("../../../images/test-img2.png"),
            description:'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar.',
            title:'Nat Revnolds',
            content:'Chief Accountant'
        },
        {
            imageUrl:require("../../../images/test-img3.png"),
            description:'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar.',
            title:'Nat Revnolds',
            content:'Chief Accountant'
        },
        {
            "imageUrl":require("../../../images/test-img4.png"),
            "description":'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar.',
            "title":'Nat Revnolds',
            "content":'Chief Accountant'
        }
    ]
    return(
        <div className="container py-5 text-center">
            <span className="text-black">TESTIMONIALS</span>
            <h5 class="display-6 m-3 text-green fw-bold">What Clients Says</h5>
            <p class=" pb-3 text-black">We place huge value on strong relationship and have seen the benefit they<br /> bring to our business. Customer feedback is vital in helping us to get it right.</p>
            <div className="row customer-testimonials">
                {TestiMonials.length > 0 && TestiMonials.map((item, index) => {
                  return(
                    <div key={index} className="col-lg-3 pb-4 col-md-6 col-sm-12">
                        <div className="rounded px-4 py-3 testimonials-item">
                            <img src={`${item.imageUrl}`} alt="img" className="mb-3" />
                            <p className="test_desc"><i class="bi bi-quote"></i> {item.description} <i class="bi bi-quote quote-reverse"></i></p>
                            <h6 className="text-green pt-4">{item.title}</h6>
                            <span className="test_label">{item.content}</span>
                        </div>
                    </div>
                  )
                })}
                <p class="text-gray-50">Image from <span className='text-decoration-underline'>Freepik</span></p>
            </div>
        </div>
    )
}
export default Testimonials;