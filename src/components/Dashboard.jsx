// src/components/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <section className="dashboard-section">
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-emerald-900 to-green-900 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-emerald-700">
          <div>
            <h1 className="text-2xl font-bold text-white">Добро пожаловать, Иван!</h1>
            <p className="text-emerald-200 mt-1">Ваш личный кабинет пользователя</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-800 text-emerald-100">
              Активный статус
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800 hover:border-emerald-600 transition-colors">
            <div className="text-emerald-300 mb-2">Количество расчетов</div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-sm text-emerald-400 mt-2">за последние 30 дней</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800 hover:border-emerald-600 transition-colors">
            <div className="text-emerald-300 mb-2">Активные консультации</div>
            <div className="text-3xl font-bold text-white">1</div>
            <div className="text-sm text-emerald-400 mt-2">в работе</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800 hover:border-emerald-600 transition-colors">
            <div className="text-emerald-300 mb-2">Ближайшая встреча</div>
            <div className="text-3xl font-bold text-white">-</div>
            <div className="text-sm text-emerald-400 mt-2">нет запланированных встреч</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">История расчетов</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-800">
            <table className="min-w-full divide-y divide-emerald-800">
              <thead className="bg-emerald-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Дата</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Сумма долгов</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Шанс банкротства</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">2025-03-15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">₽ 1,250,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">
                    <span className="font-medium text-green-400">78%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-emerald-400 hover:text-white transition-colors">Просмотр</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">2025-03-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">₽ 875,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">
                    <span className="font-medium text-red-400">32%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-emerald-400 hover:text-white transition-colors">Просмотр</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800">
            <h3 className="text-lg font-medium text-white mb-4">Личные данные</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-emerald-300 mb-1">ФИО</label>
                <div className="text-white">Иван Петров</div>
              </div>
              <div>
                <label className="block text-sm text-emerald-300 mb-1">Email</label>
                <div className="text-white">ivan@example.com</div>
              </div>
              <div>
                <label className="block text-sm text-emerald-300 mb-1">Телефон</label>
                <div className="text-white">+7 (999) 123-45-67</div>
              </div>
              <button className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-sm transition-colors">
                Редактировать
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800">
            <h3 className="text-lg font-medium text-white mb-4">Безопасность</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-emerald-300 mb-1">Последняя активность</label>
                <div className="text-white">2 часа назад, Москва</div>
              </div>
              <div>
                <label className="block text-sm text-emerald-300 mb-1">Двухфакторная аутентификация</label>
                <div className="text-white">Не активирована</div>
              </div>
              <button className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-sm transition-colors">
                Изменить пароль
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}