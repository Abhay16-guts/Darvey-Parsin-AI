

export const codeExamples = {
    "App.jsx": `
import { useState } from 'react';
import { DarveyParsin } from "darvey-parsin/AI";

function App() {
    const [code, setCode] = useState('');

    const HandleAICompletion = async() => {
        const suggestion = await DarveyParsin.complete(code);
        setCode(suggestion) ;
        };


    return (
        <div className="app">
            <CodeEditor
                onChange={setCode}
                onAI={handleAICompletion}
            />
        </div>
    );
}`,
    "Hero.jsx": `
import { useState } from 'react';
import { DarveyParsin } from "darvey-parsin/AI";

function Hero({ title, description, onTry }) {
    return (
        <section className="hero">
            <h2>{title}</h2>

            <p>
                {description}
            </p>

            <button onClick={onTry}>
                Try AI Completion
            </button>
        </section>
    );
}

export default Hero;`,
    "Navbar.jsx": `
import { useState } from 'react';
import { DarveyParsin } from "darvey-parsin/AI";

function Navbar({ onGenerate }) {
    return (
        <nav className="navbar">
            <h1 className="brand">
                Darvey<span>AI</span>
            </h1>

            <div className="nav-actions">
                <button onClick={onGenerate}>
                    Generate
                </button>
            </div>
        </nav>
    );
}

export default Navbar;`,
};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI powered code suggestions in real-time."
    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "⚡",
        title: "Auto Animation",
        content: "Dynamic typing effect generated automatically."
    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your project."
    },
};