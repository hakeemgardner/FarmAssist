import React, { useState } from "react";
import { Sprout, Mail, Lock, User, Phone, MapPin, ArrowRight } from "lucide-react";
import { SignUpUser } from "../../database/auth/SignUpUser";
import { createFarmer } from "../../database/farmer_service/create_farmer";
import { useNavigate } from "react-router";

export const SignUpPage = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    authpassword: '',
    name: '',
    telephone: '',
    parish: ''
  });
  
  function handleOnChange(event){
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }
  
  async function onSubmit(e) {
    e.preventDefault();
    if (formData.authpassword != formData.password) {
      alert("Passwords aren't the same");
      return;
    }
    const data = await SignUpUser({ email: formData.email, password: formData.password });
    console.log("SignUpUser data:", data);
    
    if (data) {
      // Get the user ID from the auth response
      const userId = data.user?.uid || data.user?.id || data.uid || data.id;
      console.log("User ID to be saved:", userId);
      
      await createFarmer({ 
        name: formData.name, 
        email: formData.email, 
        parish: formData.parish, 
        telephone: formData.telephone,
        user_id: userId
      });
      navigate("/login");
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Info Section */}
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

        {/* Right Side - Form */}
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            
            {/* Mobile Logo */}
            <div className="md:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="bg-green-600 p-2 rounded-lg">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AgriAI</h1>
                <p className="text-green-700 text-sm font-medium">Empowering Jamaican Farmers</p>
              </div>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
              <p className="text-gray-600">Join our community of farmers</p>
            </div>

            {/* Form Fields */}
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Name and Phone Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      placeholder="876-555-1234"
                      type="tel"
                      name="telephone"
                      id="telephone"
                      value={formData.telephone}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Parish */}
              <div>
                <label htmlFor="parish" className="block text-sm font-medium text-gray-700 mb-2">
                  Parish
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="e.g., Kingston, St. Andrew"
                    type="text"
                    name="parish"
                    id="parish"
                    value={formData.parish}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
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
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Create a strong password"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="authpassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Retype your password"
                    type="password"
                    name="authpassword"
                    id="authpassword"
                    value={formData.authpassword}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Create Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm mb-4">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Sign in
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