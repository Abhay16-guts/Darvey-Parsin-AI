import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Roadmap", "ChangeLog"],
    Company: ["About", "Blogs", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Community", "Tutorials", "Support", "API Reference"],
    Legal: ["privacy policy", "Terms of service", "Cookie policy", "Security"],
};


export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* main footer content - hidden on mobile */}
                <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                    <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
                            <div className="rounded-lg">
                                <img
                                    src="/Chinchila.png"
                                    alt="DarveyAI Logo"
                                    className="h-10 w-10 sm:h-14 sm:w-14"
                                />
                            </div>
                            <span className="text-lg sm:text-xl font-bold">
                                <span className="text-white">Darvey</span>
                                <span className="text-blue-400">Parsin</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
                            Transform your workflow with AI-powered tools and automation. Built for modern developers.
                        </p>
                        <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                            <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Github className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                    {/* footer links - visible on sm and above */}
                    <div className="sm:col-span-3 lg:col-span-4">
                        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                            {Object.entries(footerLinks).map(([category, Links]) => (
                                <div key={category}>
                                    <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                                        {category}
                                    </h3>
                                    <ul space-y-2 sm:space-y-3>
                                        {Links.map((link)=>(
                                            <li key={link}>
                                                <a 
                                                href="#" 
                                                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm leading-loose"
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-xs text-center text-gray-400 hover:text-gray-300 cursor-pointer">@ Copyright DarveyParsin AI. All rights reserved</p>
            </div>
        </footer>
    );
}