import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";


const features = [
    {
        title: "AI code completion",
        description: "Leverage the power of DarveyParsin AI to auto-complete your code snippets seamlessly within the editor.",
        codeSnippet: `function handleSubmit() {
        // AI suggests next line
        onst data = await DarveyParsin.fetchData(apiEndpoint);
        // Auto completed by AI
        }`,
        imagePosition: "left",
    },
    {
        title: "Automated testing",
        description: "Generate comprehensive test cases for your functions with just a click, ensuring robust and reliable code.",
        codeSnippet: `describe(User authentication), () => {
        // Auto generated tests
        it('should login with valid credentials', async() => {
        // Test implementation
            }); 
        });`,

        imagePosition: "right",
    },
    {
        title: "Smart debugging",
        description: "Identify and fix bugs in your code effortlessly using AI-driven debugging suggestions.",
        codeSnippet: `
        // AI suggests fix:
        const result = await fetchData(apiEndpoint);
        // fixed: added await keyword
        `,
        imagePosition: "left",
    },
];


export default function Featureswhatsa() {
    return (
        <section
            id="features"
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">Your complete development</span>
                        <br />
                        <span className="bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">Workflow</span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {features.map((feature, key) => (
                        <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
                            {/* code section */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-green-500/20 rounded-xl sm:rounded-2xl transition-all duration-500"/>
                                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 transition-all duration-300 ">
                                        {/* IDE interface */}
                                        <div className="bg-gray-950 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm">
                                            <div className="flex items-center mb-3 sm:mb-4 spaxe-x-1 sm:space-x-2 ">
                                                <div className="flex items-center space-x-1 sm:space-x-2">
                                                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                                                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-300" />
                                                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                                                </div>
                                                <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
                                            </div>
                                            <div>
                                                <SyntaxHighlighter
                                                    language="javacript"
                                                    style={nightOwl}
                                                    customStyle={{
                                                        margin: 0,
                                                        background: "transparent",
                                                        borderRadius: "8px",
                                                        fontSize: "0.75rem",
                                                        lineHeight: "1.4",
                                                        height: "100%",
                                                        // border: "1px solid #3c3c3c",
                                                    }}
                                                    wrapLines={true}
                                                >
                                                    {feature.codeSnippet}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* text section */}
                            <div className="flex-1 w-full">
                                <div className="max-w-lg mx-auto lg:mg-0 text-center lg:text-left">
                                    <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{feature.title}</h2>
                                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}