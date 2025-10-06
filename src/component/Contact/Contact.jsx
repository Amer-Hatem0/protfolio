import React from 'react'
import './Contact.css'
import './Contact.js'
export default function Contact() {
    return (

        <div>
            <div className="a   overflow-hidden ">
                <div className="row zz">
                    <div className="col-12   ">
                        <div className="title-sectionz  ">
                            <div className="h11" >
                                <h1  >GET IN <span>TOUCH</span></h1>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="row massg1 my-5 py-5  ">
                    <div className="col-10 ps-5    col-lg-4">
                        <h3 className="text-uppercase  mb-0 ft-wt-700 pb-3 text-white">Don't be shy !</h3>
                        <p className="open-sans-font mb-4 ppp text-white Feel">Feel free to get in touch with me. I am always open to discussing new projects,
                            creative ideas or opportunities to be part of your visions.</p>
                        <p className="open-sans-font custom-span-contact position-relative">
                            <i className="fa fa-map position-absolute" />
                            <span className="d-block">Address Point</span><span className='text-gery'>123 Stree Tulkarem</span>  </p>
                        <p className="open-sans-font custom-span-contact position-relative">
                            <i className="fa fa-envelope-open position-absolute" />
                            <span className="d-block">mail me</span>
                            <a href="mailto:steve@mail.com" style={{}}><span className='text-gery'> amerhatem01@gmail.com</span></a></p>
                        <p className="open-sans-font custom-span-contact position-relative">
                            <i className="fa fa-phone-square position-absolute" />
                            <span className="d-block">call me</span> <a href="Tel: +216 21 184 010" style={{}}> <span className='text-gery'> +970569691385</span></a></p>




                        <ul className="social list-unstyled pt-5 mb-4">
                            <li><a href="https://www.facebook.com/AMeRHATeM20" target="_blank" rel="noreferrer" style={{}}>
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            </li><li><a href="https://www.linkedin.com/in/amer-hatem-53867b247/" target="_blank" rel="noreferrer" style={{}}>
                                <i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/Amer-Hatem0" target="_blank" rel="noreferrer" style={{}}>
                                <i class="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-10 col-lg-6 m-auto ">
                        <form id="myForm" className="contactform">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="YOUR NAME" required style={{}} />
                                    </div>

                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <input type="email" name="user_email" placeholder="YOUR EMAIL" required style={{}} /></div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="subject" placeholder="YOUR SUBJECT" required style={{}} />
                                    </div></div><div className="col-12">
                                    <div className="form-group">
                                        <textarea name="message" placeholder="YOUR MESSAGE" required style={{}} defaultValue={""} /></div>
                                </div>
                                <div className="col-12"><button type="submit" className="button" style={{}}>
                                    <span className="button-text">Send Message</span>
                                    <span className="button-icon fa fa-send" ><i class="fa-solid fa-paper-plane"></i></span>
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>




            </div>
        </div>
          
    )
}
