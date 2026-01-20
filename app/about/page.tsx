"use client";

export default function About() {
    const progressData = [
        { label: "DOCUMENTORY", value: 90 },
        { label: "DRAMA", value: 85 },
        { label: "FILM", value: 90 },
    ];

    return (
        <div className="min-h-screen bg-[#111] text-white flex items-center justify-center">
            <div className="max-w-6xl w-full flex gap-16 px-10 py-16">

                {/* LEFT SIDE */}
                <div className="w-1/2 flex items-center justify-center relative">
                    <div className="border border-gray-600 h-[450px] w-[420px] relative">
                        <div className="absolute top-20 left-20 text-[120px] font-bold">
                            13<span className="text-red-600">.</span>
                        </div>
                        <div className="absolute bottom-20 left-24 text-center">
                            <div className="text-xl">Years</div>
                            <div className="text-xl">Experience</div>
                            <div className="text-xl">Working</div>
                        </div>
                        <div className="absolute bottom-12 left-10 w-20 h-[1px] bg-gray-300"></div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-1/2 relative">
                    <h1 className="text-5xl font-semibold mb-10">About Me</h1>

                    <p className="text-gray-400 mb-16 max-w-lg">
                        Fill appear won’t may make moveth signs. Fourth. Good own.
                        Green you’re moveth us, lesser.
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-10">
                        {progressData.map((item) => (
                            <div key={item.label} className="flex items-center justify-between">
                                <span className="text-sm tracking-[0.2em]">{item.label}</span>
                                <span className="text-sm">{item.value}%</span>
                            </div>
                        ))}

                        {progressData.map((item) => (
                            <div key={item.label + "-bar"} className="w-full h-2 bg-white/20 rounded">
                                <div
                                    className="h-full bg-red-600 rounded"
                                    style={{ width: `${item.value}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* Vertical Line */}
                    <div className="absolute right-0 top-0 h-full flex items-center">
                        <div className="w-0.5 bg-white h-full"></div>
                        <div className="w-0.5 bg-red-600 h-1/3 absolute right-0 top-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
