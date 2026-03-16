import React from "react";
import { Button } from "primereact/button";

const Home = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className="flex align-items-center justify-content-center text-center px-4 py-8">
                <div className="max-w-30rem">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Build Modern Apps Faster 🚀
                    </h1>
                    <p className="text-lg text-color-secondary mb-5">
                        Enterprise-level architecture powered by PrimeReact.
                        Secure. Scalable. Beautiful.
                    </p>
                    <div className="flex justify-content-center gap-3">
                        <Button label="Start Free" size="large" />
                        <Button label="Live Demo" outlined size="large" />
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-4 md:px-8 py-8 surface-50">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                    <p className="text-color-secondary mt-2">
                        Designed like real MNC-level SaaS products.
                    </p>
                </div>

                <div className="grid">
                    {[
                        {
                            icon: "pi pi-shield",
                            title: "Secure",
                            desc: "JWT, interceptors and protected routes."
                        },
                        {
                            icon: "pi pi-bolt",
                            title: "Fast",
                            desc: "Optimized structure with reusable hooks."
                        },
                        {
                            icon: "pi pi-cog",
                            title: "Scalable",
                            desc: "Domain-driven enterprise architecture."
                        }
                    ].map((item, index) => (
                        <div key={index} className="col-12 md:col-4">
                            <div className="p-4 text-center shadow-2 border-round h-full">
                                <i className={`${item.icon} text-4xl mb-3 text-primary`} />
                                <h3>{item.title}</h3>
                                <p className="text-color-secondary">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-8 px-4">
                <h2 className="text-3xl font-bold mb-3">
                    Ready to Level Up?
                </h2>
                <p className="text-color-secondary mb-4">
                    Join thousands of developers building enterprise apps.
                </p>
                <Button label="Create Free Account" size="large" />
            </section>
        </>
    );
};

export default Home;