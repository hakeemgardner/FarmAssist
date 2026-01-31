import React, { useState } from "react";
import { Sprout, Mail, Lock, ArrowRight } from "lucide-react";
import { LogInUser } from "../../database/auth/LogInUser";
import { useNavigate } from "react-router";
import { UpdateCurrentUser } from "../../database/farmer_service/update_service";

export const LoginPage = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleOnChange(event){
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const auth = await LogInUser({ email: formData.email, password: formData.password });
    if (auth) {
      navigate('/market-place')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        <div className="hidden md:flex flex-col justify-center space-y-6 px-8">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-3 rounded-xl">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">AgriAI</h1>
              <p className="text-green-700 font-medium">Empowering Jamaican Farmers</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-green-100">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">🌱 Smart Crop Planning</h3>
              <p className="text-gray-600 text-sm">AI-powered insights for optimal planting schedules</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-green-100">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">📊 Market Intelligence</h3>
              <p className="text-gray-600 text-sm">Real-time pricing and demand forecasting</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-green-100">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">🤝 Community Network</h3>
              <p className="text-gray-600 text-sm">Connect with farmers and suppliers nationwide</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div  className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            
            <div className="md:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="bg-green-600 p-2 rounded-lg">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AgriAI</h1>
                <p className="text-green-700 text-sm font-medium">Empowering Jamaican Farmers</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center space-x-2 group"
                onClick={onSubmit}
              >
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm mb-4">
                Don't have an account?{" "}
                <button onClick={() => navigate("/sign-up")} className="text-green-600 hover:text-green-700 font-semibold">
                  Sign up for free
                </button>
              </p>
              <p className="text-gray-400 text-xs">
                Made with ❤️ by the Dream Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}