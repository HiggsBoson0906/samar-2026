import { useState } from 'react';
import HomeBackground from '../../components/homeBackground.jsx';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add email sending logic or API call here
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <HomeBackground />
            <div className='w-full min-h-screen absolute bg-black bg-opacity-50 text-white'>
                <div className="mt-[80px] px-6 md:px-12 lg:px-24 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="font-audiowide text-5xl sm:text-6xl lg:text-7xl glow-text drop-shadow-[3px_3px_0px_#000] mb-4">
                            CONTACT US
                        </h1>
                        <p className="font-montserrat text-lg sm:text-xl lg:text-2xl tracking-widest drop-shadow-[2px_2px_0px_#000] max-w-2xl mx-auto">
                            Ready to join the ultimate sports extravaganza? Reach out to us!
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-audiowide text-2xl sm:text-3xl mb-6 text-[#8CCCFF] cosmic-text-glow">
                                    GET IN TOUCH
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-[#8CCCFF] bg-opacity-20 rounded-full flex items-center justify-center cosmic-glow">
                                            <svg className="w-6 h-6 text-[#8CCCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-montserrat text-lg">Email</h3>
                                            <p className="text-gray-300">samar@nitrr.ac.in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-[#8CCCFF] bg-opacity-20 rounded-full flex items-center justify-center cosmic-glow">
                                            <svg className="w-6 h-6 text-[#8CCCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-montserrat text-lg">Phone</h3>
                                            <p className="text-gray-300">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-[#8CCCFF] bg-opacity-20 rounded-full flex items-center justify-center cosmic-glow">
                                            <svg className="w-6 h-6 text-[#8CCCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-montserrat text-lg">Location</h3>
                                            <p className="text-gray-300">NIT Raipur, Chhattisgarh, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h2 className="font-audiowide text-2xl sm:text-3xl mb-6 text-[#8CCCFF] cosmic-text-glow">
                                    FOLLOW US
                                </h2>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-[#8CCCFF] bg-opacity-20 rounded-full flex items-center justify-center cosmic-glow hover:bg-[#8CCCFF] hover:bg-opacity-30 transition-all">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-[#8CCCFF] bg-opacity-20 rounded-full flex items-center justify-center cosmic-glow hover:bg-[#8CCCFF] hover:bg-opacity-30 transition-all">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-[#8CCCFF] bg-opacity-20 rounded-full flex items-center justify-center cosmic-glow hover:bg-[#8CCCFF] hover:bg-opacity-30 transition-all">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-.287 0-.574-.043-.855-.128-.562-.172-1.058-.568-1.429-1.102-.371-.534-.562-1.172-.562-1.821s.191-1.287.562-1.821c.371-.534.867-.93 1.429-1.102.281-.085.568-.128.855-.128s.574.043.855.128c.562.172 1.058.568 1.429 1.102.371.534.562 1.172.562 1.821s-.191 1.287-.562 1.821c-.371.534-.867.93-1.429 1.102-.281.085-.568.128-.855.128z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 border border-[#8CCCFF] border-opacity-30">
                            <h2 className="font-audiowide text-2xl sm:text-3xl mb-6 text-[#8CCCFF] cosmic-text-glow">
                                SEND US A MESSAGE
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-montserrat text-sm mb-2 text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black bg-opacity-50 border border-[#8CCCFF] border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8CCCFF] focus:ring-1 focus:ring-[#8CCCFF] transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-montserrat text-sm mb-2 text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black bg-opacity-50 border border-[#8CCCFF] border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8CCCFF] focus:ring-1 focus:ring-[#8CCCFF] transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block font-montserrat text-sm mb-2 text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black bg-opacity-50 border border-[#8CCCFF] border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8CCCFF] focus:ring-1 focus:ring-[#8CCCFF] transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-montserrat text-sm mb-2 text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-black bg-opacity-50 border border-[#8CCCFF] border-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#8CCCFF] focus:ring-1 focus:ring-[#8CCCFF] transition-all resize-none"
                                        placeholder="Tell us what's on your mind..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full border-2 px-8 py-4 text-lg italic border-[#8CCCFF] text-white font-audiowide rounded-tl-3xl rounded-br-3xl hover:bg-[#8CCCFF] hover:text-black hover:rounded-lg hover:scale-[.97] transition-all backdrop-blur-lg cosmic-glow"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;