import React from 'react';
import { NavLink } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { BsInstagram, BsFacebook, BsPaypal } from "react-icons/bs";
import { SiVisa, SiKlarna, SiGooglepay } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";

const Footer = () => {
        return (
            <div>
                <div className="contacts-wrapper">
                <div className="contacts-header">
                    <h2>Contacts</h2>
                </div>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <NavLink to="contact-info">Contact info</NavLink>
                            </li>
                            <li>
                                <NavLink to="disclaimer">Disclaimer</NavLink >
                            </li>
                            <li>
                                <NavLink  to="returns">Return policy</NavLink >
                            </li>
                        </ul>
                    </nav>
                    <div className="some-wrapper">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink  to="Instagram">
                                    <BsInstagram className="some-icon" />
                                    </NavLink >
                                </li>
                                <li>
                                    <NavLink  to="Facebook">
                                    <BsFacebook className="some-icon" />
                                    </NavLink >
                                </li>
                                <li>
                                    <NavLink  to="Mail" >
                                    <BiEnvelope className="some-icon" />
                                    </NavLink >
                                </li>
                            </ul>
                        </nav>
                    </div>
                        <div className="payment-wrapper">
                            <nav>
                                <ul>
                                    <li>
                                        <SiVisa className="payment-icon" />
                                    </li>
                                    <li>
                                        <SiKlarna className="payment-icon" />
                                    </li>
                                    <li>
                                        <SiGooglepay className="payment-icon" />
                                    </li>
                                    <li>
                                        <BsPaypal className="payment-icon" />
                                    </li>
                                    <li>
                                        <FaApplePay className="payment-icon" />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                <p className="copyright"><small>Copyright &copy; The GitMen 2021</small></p>
                </div>
            </div>
            
        );
    }


export default Footer;