
const testimonials = [
    {
        name: "David putra",
        role: "CEO, TechCorp",
        image: "https://images.pexels.com/photos/31510092/pexels-photo-31510092.jpeg",
        content: "This platform has transformed how we approach AI integration in our business. The intuitive interface and powerful features have significantly improved our productivity."
    },
    {
        name: "Rakesh Pandit",
        role: "Lead Developer, InnovateX",
        image: "https://images.pexels.com/photos/18935827/pexels-photo-18935827.jpeg",
        content: "As a developer, I appreciate the seamless integration and robust capabilities this tool offers. It has become an indispensable part of our development workflow."
    },
    {
        name: "Thorfin karlsefni",
        role: "Product Manager, FutureTech",
        image: "https://images.pexels.com/photos/28086502/pexels-photo-28086502.jpeg",
        content: "The customer support and continuous updates make this platform stand out. It's clear that the team is dedicated to providing the best experience for users."
    },
];


export default function Testimonials() {
    return (
        <section
            id="testimonial"
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
                    {/* left side - header */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left ">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            What <span className="bg-linear-to-br from-blue-500 to-cyan-500 bg-clip-text text-transparent">Users</span> Say About Us
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                            Everything you need to build, test and deploy applications with AI powered development tools.
                        </p>
                    </div>

                    {/* right side - testimonials */}
                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-6 sm:space-y-8">
                            {testimonials.map((testimonial, key) => (
                                <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl group-hover:border-sm hover:border-cyan-500/50 transition-all duration-300">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="shrink-0">
                                            <div className="text-2xl sm:text-3xl lg:text-4xl bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">"</div>
                                        </div>

                                        <div className="grow">
                                            <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 ">
                                                {testimonial.content}
                                            </p>
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
                                                
                                                <div>
                                                    <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                                                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};