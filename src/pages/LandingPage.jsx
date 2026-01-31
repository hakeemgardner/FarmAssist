import { Header } from "../Components/Header";
import hero from "../assets/images/hero.jpg";
import ai from "../assets/images/ai.jpg";
import farm from "../assets/images/farm.jpg";
import vege from "../assets/images/Vege.jpg";
export const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section
          className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="text-center px-4 max-w-4xl text-white">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-shadow">
              Smart Farming Powered by AI
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-shadow">
              FarmWise AI empowers farmers with intelligent tools for crop
              disease detection, personalized fertilizer recommendations, and
              weather-based farming insights.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 text-sm font-bold bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-md cursor-pointer hover:scale-105">
                Get Started Free
              </button>
              <button className="px-6 py-3 text-sm font-bold bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full hover:bg-white/30 transition-colors cursor-pointer hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center max-w-mxl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-earth-dark">
                Intelligent Farming Tools
              </h2>
              <p className="mt-4 text-lg text-accent">
                Discover AI-powered features designed to optimize your harvest
                and make smarter farming decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-secondary/30">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${ai}')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-earth-dark">
                    Disease Detection
                  </h3>
                  <p className="mt-2 text-base text-accent">
                    Upload photos of your crops and get instant AI-powered
                    disease identification with treatment recommendations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-secondary/30">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${vege}')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-earth-dark">
                    Fertilizer Advisor
                  </h3>
                  <p className="mt-2 text-base text-accent">
                    Get personalized fertilizer recommendations based on your
                    soil type, crop, and growing conditions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-secondary/30">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${farm}')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-earth-dark">
                    Weather Insights
                  </h3>
                  <p className="mt-2 text-base text-accent">
                    Access real-time weather data and AI-driven forecasts to
                    plan your farming activities effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-earth-dark text-white">
          <div className="container mx-auto px-6 lg:px-10 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">FarmWise AI</span>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  className="text-sm text-secondary hover:text-white transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
                <a
                  className="text-sm text-secondary hover:text-white transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-sm text-secondary hover:text-white transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <p className="text-sm text-secondary mt-4 text-center md:text-left">
              © 2025 FarmWise AI. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};
