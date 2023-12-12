import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    // const formRef = useRef();
  const [form] = useRef({
    name: "",
    email: "",
    message: "",
  });
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_096g6hi', 'template_fs8mb0v', form.current, 'VEEQUeZlZ37NbwBuI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


return(
    <div className="flex xl:flex-row flex-col-reverse overflow-hidden background-hero shadow-lg min-h-screen justify-center items-center">
        <div className="p-8 content-center rounded-2xl border shadow-lg w-1/2 h-max">
            <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</p>
                <form 
                ref={form}
                onSubmit={sendEmail}
                className='mt-3 flex flex-col gap-2 '>
                    <label className=" flex-col  ">
                        <div className="">
                                <input
                                type='text'
                                name='name'
                                value={form.name}
                                placeholder="Email"
                                className=' py-4 px-6 rounded-lg border shadow-md font-medium bg-transparent'
                            />    
                            {/* <span className="ml-2 place-self-end border">Name*</span> */}
                        </div>
                       
                       </label>
                       <button
                            type='submit'
                            className='py-3 px-8 rounded-xl border-white w-fit font-bold shadow-md shadow-primary  '
                            >
                            {/* {loading ? "Sending..." : "Send"} */}
                            Send
                        </button>
                </form>
        </div>
    </div>
)

};

export default Contact;