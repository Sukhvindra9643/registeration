import React,{useState} from "react";
import MetaData from "../layout/MetaData";
import BreadCrumb from "../layout/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import "./Contacts.css"
const Contacts = () => {
  
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [comments,setComments] = useState("");

  return (
    <div>
      <MetaData title={"Contacts Us"} />
      <BreadCrumb title={"Contacts Us"} />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.0587875221868!2d77.06330915872192!3d28.506110099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d197a7b16c2d7%3A0x6c671181acba3b4e!2sSuhani%20General%20Store%20Mullahera%20sec.22!5e0!3m2!1sen!2sin!4v1678337957740!5m2!1sen!2sin"
                width="600"
                height="450"
                title="myFrame"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper home-wrapper-2 d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="https://getform.io/f/f4e69878-359b-4056-9f65-86ab40a5e176" method="POST" className="d-flex flex-column gap-15">
                    <div className="w-100 py-1">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        className="form-control"
                        placeholder="Name"
                        onChange={(e)=> setName(e.target.value)}
                      />
                    </div>
                    <div className="w-100 py-1">
                      <input
                        type="text"
                        name="email"
                        value={email}
                        className="form-control"
                        placeholder="Email"
                        onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>
                    <div className="w-100 py-1">
                      <input
                        type="text"
                        name="phone"
                        value={phone}
                        className="form-control"
                        placeholder="Phone Number"
                        onChange={(e)=> setPhone(e.target.value)}
                      />
                    </div>
                    <div className="w-100 py-1">
                      <textarea
                        name="comments"
                        cols={30}
                        rows={10}
                        value={comments}
                        className="form-control"
                        placeholder="Comments"
                        onChange={(e)=> setComments(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="w-25">
                      <button className="button border-0 w-100 mt-2 mb-2">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="d-flex gap-2 align-items-center mb-3">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">
                        Village Mullahera Sector 22 Gurgaon Haryana
                        </address>
                      </li>
                      <li className="d-flex gap-2 align-items-center mb-3">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel :- +91 9643315148" className="text-decoration-none">+91 9643315148</a>
                      </li>
                      <li className="d-flex gap-2 align-items-center mb-3">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto :- sukhvindrasngh8670@gmail.com" className="text-decoration-none">

                        sukhvindrasingh8670@gmail.com
                        </a>
                      </li>
                      <li className="d-flex gap-2 align-items-center mb-3">
                        <BsInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Sunday &nbsp; 9AM - 6PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;