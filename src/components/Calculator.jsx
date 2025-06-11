// src/components/Calculator.jsx
import React, { useState, useEffect } from "react";

export default function Calculator({
  propertyType,
  setPropertyType,
  debtAmount,
  setDebtAmount,
  delaysCount,
  setDelaysCount,
  court,
  setCourt,
  loanCount,
  setLoanCount,
  alimony,
  setAlimony,
  fines,
  setFines,
  bankrupt,
  setBankrupt,
  dependents,
  setDependents,
  dependentsCount,
  setDependentsCount,
  income,
  setIncome,
  region,
  setRegion,
  bankruptcyChance,
  riskLevel,
  propertyDescription,
  showResult,
  calculateBankruptcy
}) {
  return (
    <section className="calculator-section">
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-emerald-900 to-green-900 rounded-xl shadow-2xl">
        <h1 className="text-6xl font-bold text-center mb-6 text-white">Функционал калькулятора банкротства 
          </h1>
        <p className="text-center text-emerald-200 mb-10">
        Введите данные — и получите оценку, сможете ли вы сохранить имущество и списать долги.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="debt-amount" className="block text-sm font-medium text-emerald-100 mb-1">
                Сумма долгов (в ₽)
              </label>
              <input
                id="debt-amount"
                type="number"
                value={debtAmount}
                onChange={(e) => setDebtAmount(e.target.value)}
                placeholder="Введите сумму долгов"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="delays-count" className="block text-sm font-medium text-emerald-100 mb-1">
                Количество просрочек (в месяцах)
              </label>
              <input
                id="delays-count"
                type="number"
                value={delaysCount}
                onChange={(e) => setDelaysCount(e.target.value)}
                placeholder="Введите количество просрочек"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="region" className="block text-sm font-medium text-emerald-100 mb-1">
              Регион
            </label>
            <input
              id="region"
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              list="region-list"
              placeholder="Введите регион"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <datalist id="region-list">
              <option value="Москва"></option>
              <option value="Московская область"></option>
              <option value="Санкт-Петербург"></option>
              <option value="Ленинградская область"></option>
              <option value="Новосибирск"></option>
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-emerald-100 mb-1">
              Тип недвижимости
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { id: "none", label: "Нет" },
                { id: "single", label: "Единственное жилье" },
                { id: "secondary", label: "Вторичное жилье" },
                { id: "land", label: "Дом с землей" }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setPropertyType(type.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    propertyType === type.id
                      ? "bg-emerald-600 text-white"
                      : "bg-white/10 text-emerald-200 hover:bg-white/20"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="court-checkbox" className="block text-sm font-medium text-emerald-100 mb-1">
                Были ли суды с кредиторами?
              </label>
              <select
                id="court-checkbox"
                value={court}
                onChange={(e) => setCourt(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>

            <div>
              <label htmlFor="loan-count" className="block text-sm font-medium text-emerald-100 mb-1">
                Количество кредитов
              </label>
              <input
                id="loan-count"
                type="number"
                value={loanCount}
                onChange={(e) => setLoanCount(e.target.value)}
                placeholder="Введите количество кредитов"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="alimony-checkbox" className="block text-sm font-medium text-emerald-100 mb-6">
                Имеются ли алименты?
              </label>
              <select
                id="alimony-checkbox"
                value={alimony}
                onChange={(e) => setAlimony(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>

            <div>
              <label htmlFor="fines-checkbox" className="block text-sm font-medium text-emerald-100 mb-6">
                Имеются ли штрафы?
              </label>
              <select
                id="fines-checkbox"
                value={fines}
                onChange={(e) => setFines(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>

            <div>
              <label htmlFor="bankrupt-checkbox" className="block text-sm font-medium text-emerald-100 mb-1">
                Признавались ли вы банкротом в течение 5 лет?
              </label>
              <select
                id="bankrupt-checkbox"
                value={bankrupt}
                onChange={(e) => setBankrupt(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dependents-select" className="block text-sm font-medium text-emerald-100 mb-1">
                Имеются ли иждивенцы?
              </label>
              <select
                id="dependents-select"
                value={dependents}
                onChange={(e) => setDependents(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>

            {dependents === "yes" && (
              <div>
                <label htmlFor="dependents-count" className="block text-sm font-medium text-emerald-100 mb-1">
                  Количество иждивенцов
                </label>
                <input
                  id="dependents-count"
                  type="number"
                  value={dependentsCount}
                  onChange={(e) => setDependentsCount(e.target.value)}
                  placeholder="Введите количество иждивенцов"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="income" className="block text-sm font-medium text-emerald-100 mb-1">
              Сумма официального дохода (в ₽)
            </label>
            <input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Введите сумму дохода"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={calculateBankruptcy}
              className="w-full px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md"
            >
              Рассчитать
            </button>
          </div>
        </form>

        {showResult && (
          <div className="mt-10 p-6 bg-emerald-800/50 backdrop-blur-sm rounded-lg animate-fadeIn">
            <h3 className="text-xl font-bold text-white mb-4">Результаты оценки</h3>
            <p className="text-emerald-200 mb-2">
              <span className="font-semibold">Регион:</span> {region || "Не указан"}
            </p>
            <p className="text-emerald-200 mb-2">
              <span className="font-semibold">Шанс признания банкротства:</span>{" "}
              <span className="text-xl font-bold text-white">{bankruptcyChance}%</span>
            </p>
            <p className="text-emerald-200 mb-4">
              <span className="font-semibold">Общий уровень риска:</span>{" "}
              <span className="font-bold">
                {riskLevel === "Высокий" && (
                  <span className="text-red-400">{riskLevel}</span>
                )}
                {riskLevel === "Средний" && (
                  <span className="text-yellow-300">{riskLevel}</span>
                )}
                {riskLevel === "Низкий" && (
                  <span className="text-green-300">{riskLevel}</span>
                )}
              </span>
            </p>
            <p className="text-emerald-200">
              <span className="font-semibold">Оценка риска ареста имущества:</span>
            </p>
            <ul className="list-disc list-inside mt-2 text-emerald-200 ml-4">
              <li>{propertyDescription}</li>
            </ul>
          </div>
        )}

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-emerald-200 mb-4">Ищете способ избавиться от долгов? Узнайте, как стать банкротом физическому лицу в 2025 году. Получите пошаговое руководство, советы по сохранению имущества и бесплатную консультацию юриста.</h2>
          <a
            href="https://t.me/r1pp3rr" 
            className="inline-block px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md"
          >
            Перейти к партнёру
          </a>
        </div>
      </div>
    </section>
  );
}