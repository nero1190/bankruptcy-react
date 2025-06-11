import React from "react";

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="py-4 bg-black/30 backdrop-blur-md sticky top-0 z-10 border-b border-emerald-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold text-white">БанкротЛаб</span>
          </div>

          <nav className="flex space-x-1 sm:space-x-4">
            <button 
              onClick={() => setActiveTab("calculator")} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "calculator" 
                  ? "bg-emerald-700 text-white" 
                  : "text-emerald-200 hover:bg-emerald-900/50"
              }`}
            >
              Калькулятор банкротства
            </button>
            <button 
              onClick={() => setActiveTab("calculator")} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "calculator" 
                  ? "bg-emerald-700 text-white" 
                  : "text-emerald-200 hover:bg-emerald-900/50"
              }`}
            >
              Калькулятор рисков
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab !== "calculator" && activeTab !== "dashboard"
                  ? "bg-emerald-700 text-white" 
                  : "text-emerald-200 hover:bg-emerald-900/50"
              }`}
            >
              {activeTab === "calculator" || activeTab === "dashboard" ? "Войти" : "Регистрация"}
            </button>
            <button 
              onClick={() => setActiveTab("dashboard")} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "dashboard" 
                  ? "bg-emerald-700 text-white" 
                  : "text-emerald-200 hover:bg-emerald-900/50"
              }`}
            >
              Личный кабинет
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}