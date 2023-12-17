import React from "react";
import { FaBitcoin, FaDollarSign, FaChartLine } from "react-icons/fa";

const Home = () => {
    const sectionsData = [
        {
            title: "Welcome to Bixo",
            backgroundColor: "bg-secondary",
            textColor: "text-light",
            content: (
                <div>
                    <header className="text-center mb-5">
                        <h1 className="display-3">Real-time Crypto Signals</h1>
                        <p className="lead">
                            Get accurate predictions and insights for digital currencies to stay ahead of the market.
                        </p>
                    </header>
                    <section className="d-flex justify-content-center mb-5">
                        <img
                            src={require('../assets/images/logo.png')}
                            alt="Welcome"
                            className="text-center"
                        />
                    </section>
                </div>
            ),
        },
        {
            title: "Currency Analysis",
            backgroundColor: "bg-light",
            textColor: "text-dark",
            content: (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <FaBitcoin className="display-4 mb-3 text-primary" />
                                    <p className="card-text">In-depth analysis of Bitcoin trends and market behavior.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <FaDollarSign className="display-4 mb-3 text-success" />
                                    <p className="card-text">Currency trends and their impact on the crypto market.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <FaChartLine className="display-4 mb-3 text-info" />
                                    <p className="card-text">Insights into market trends and chart analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div>
            {sectionsData.map((section, index) => (
                <div key={index} className={`container-fluid ${section.backgroundColor} ${section.textColor} p-5`}>
                    <h2 className="text-center">{section.title}</h2>
                    {section.content}
                </div>
            ))}
        </div>
    );
};

export default Home;
