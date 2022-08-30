import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3u3f3cc', 'template_03q4ah9', form.current, 'YHVuZcyGvY9D6XFmc')
            .then((result) => {
                toast.success("Email Received");
            }, (error) => {
                toast(error.text);
            });
    };
    return (
        <div id="contact" className="bg-gray-900">
            <div className="py-1 mt-5">
                <div data-aos="zoom-in-up" data-aos-duration="500"  className="my-5 max-w-7xl mx-auto">
                    <div className="relative flex items-center justify-center mt-10  mb-20">
                        <h1 className='about-outline uppercase text-7xl lg:text-9xl text-gray-900 font-extra-bold'>Contact</h1>
                        <h2 className='absolute uppercase font-bold text-3xl lg:text-4xl text-white uppercase'>Get In Touch</h2>
                    </div>
                    {/* Email Form */}
                    <div className="mx-10 mb-20">
                        <form className="email-form" ref={form} onSubmit={sendEmail}>
                            <div className="flex">
                                <input className="w-full" placeholder='Name' required type="text" name="name" />
                                <input className="w-full" placeholder='Email' required type="email" name="email" />
                            </div>
                            <div className="flex">
                                <input className="w-full" placeholder='Phone Number' required type="text" name="phone" />
                                <input className="w-full" placeholder='Subject' required type="text" name="subject" /> 
                            </div>
                            <textarea className="w-full h-200" placeholder='Message' required type="text" name="message" /> <br />
                            <input className="emailSendButton" type="submit" value="Send" />
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;