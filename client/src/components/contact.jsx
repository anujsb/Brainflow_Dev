import React, { useRef, useState } from "react";


const Contact = () => {
    // const formRef = useRef();
  const [form] = useState({
    name: "",
    email: "",
    message: "",
  });


  return (
    <div className="  flex xl:flex-row flex-col-reverse overflow-hidden background-hero shadow-lg">
        <div className="p-8 m-20  rounded-2xl border shadow-lg w-1/3 h-max">
            <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</p>

            <form className='mt-3 flex flex-col gap-2'>
                <label className="flex flex-col ">
                    <span className="font-medium mb-2">Name*</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        placeholder="name"
                        className='py-4 px-6 rounded-lg border shadow-md font-medium bg-transparent'
                    />

                </label>
                <label className="flex flex-col ">
                    <span className="font-medium mb-2">Email*</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        placeholder="name"
                        className='py-4 px-6 rounded-lg border shadow-md font-medium bg-transparent'
                    />

                </label>
                <label className="flex flex-col ">
                    <span className="font-medium mb-2">Phone number*</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        placeholder="name"
                        className='py-4 px-6 rounded-lg border shadow-md font-medium bg-transparent'
                    />

                </label>
                <label className="flex flex-col ">
                    <span className="font-medium mb-2">Firm Size*</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        placeholder="name"
                        className='py-4 px-6 rounded-lg border shadow-md font-medium bg-transparent'
                    />

                </label>

                <button
                    type='submit'
                    className='py-3 px-8 rounded-xl border-white w-fit font-bold shadow-md shadow-primary  '
                    >
                    {/* {loading ? "Sending..." : "Send"} */}
                    Send
                </button>
            </form>
            <div className="flex w-full">
                <div className="h-full w-full">
                    <image
                    src=""
                    alt="VPN Illustrasi"
                    width={612}
                    height={383}
                    >   </image>
                </div>
          </div>
        </div>

        
    </div>
  );
};

export default Contact;
