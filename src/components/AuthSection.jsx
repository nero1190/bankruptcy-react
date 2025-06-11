// src/components/AuthSection.jsx
import React from "react";

export default function AuthSection({ activeTab, setActiveTab }) {
  const renderLogin = () => (
    <section className="auth-section">
      <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-emerald-900 to-green-900 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Вход в аккаунт</h2>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-emerald-100 mb-1">
              Электронная почта
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Введите ваш email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-emerald-100 mb-1">
              Пароль
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Введите пароль"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-emerald-200">
              <input
                type="checkbox"
                className="rounded border-emerald-700 text-emerald-500 focus:ring-emerald-500 h-4 w-4 mr-2"
              />
              Запомнить меня
            </label>
            <a href="#" className="text-emerald-300 hover:text-white text-sm">
              Забыли пароль?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50"
          >
            Войти
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-emerald-200">
            Нет аккаунта?{" "}
            <button
              onClick={() => setActiveTab("register")}
              className="text-white font-medium hover:text-emerald-200 transition-colors"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </section>
  );

  const renderRegister = () => (
    <section className="auth-section">
      <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-emerald-900 to-green-900 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Создать аккаунт</h2>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Имя и фамилия */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="reg-firstname" className="block text-sm font-medium text-emerald-100 mb-1">
                Имя
              </label>
              <input
                id="reg-firstname"
                type="text"
                placeholder="Введите имя"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="reg-lastname" className="block text-sm font-medium text-emerald-100 mb-1">
                Фамилия
              </label>
              <input
                id="reg-lastname"
                type="text"
                placeholder="Введите фамилию"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="reg-email" className="block text-sm font-medium text-emerald-100 mb-1">
              Электронная почта
            </label>
            <input
              id="reg-email"
              type="email"
              placeholder="Введите ваш email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Пароль */}
          <div>
            <label htmlFor="reg-password" className="block text-sm font-medium text-emerald-100 mb-1">
              Пароль
            </label>
            <input
              id="reg-password"
              type="password"
              placeholder="Придумайте пароль"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Подтверждение пароля */}
          <div>
            <label htmlFor="reg-confirm-password" className="block text-sm font-medium text-emerald-100 mb-1">
              Подтвердите пароль
            </label>
            <input
              id="reg-confirm-password"
              type="password"
              placeholder="Повторите пароль"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Кнопка регистрации */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50"
          >
            Зарегистрироваться
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-emerald-200">
            Уже есть аккаунт?{" "}
            <button
              onClick={() => setActiveTab("login")}
              className="text-white font-medium hover:text-emerald-200 transition-colors"
            >
              Войти
            </button>
          </p>
        </div>
      </div>
    </section>
  );

  return activeTab === "login" ? renderLogin() : renderRegister();
}