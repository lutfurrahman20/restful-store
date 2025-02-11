

const About = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
                <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">We love</h1>
                <div className="stats bg-primary shadow">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            restful
                        </div>
                    </div>
                </div>

            </div>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
            At restful, we provide a seamless and secure room booking experience, ensuring the best deals for travelers, while our 24/7 customer support guarantees hassle-free service, making it easier than ever to find budget-friendly stays or luxury suites that match your needs.🚀
            </p>
        </div>
    );
};

export default About;