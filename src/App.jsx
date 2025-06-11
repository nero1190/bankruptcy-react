import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import AuthSection from "./components/AuthSection";
import Dashboard from "./components/Dashboard";
import Slides from "./components/Slides";
import './App.css'

export default function App() {
  // Form state
  const [propertyType, setPropertyType] = useState("none");
  const [debtAmount, setDebtAmount] = useState("");
  const [delaysCount, setDelaysCount] = useState("");
  const [court, setCourt] = useState("no");
  const [loanCount, setLoanCount] = useState("");
  const [alimony, setAlimony] = useState("no");
  const [fines, setFines] = useState("no");
  const [bankrupt, setBankrupt] = useState("no");
  const [dependents, setDependents] = useState("no");
  const [dependentsCount, setDependentsCount] = useState("");
  const [income, setIncome] = useState("");
  const [region, setRegion] = useState("");

  // Result state
  const [showResult, setShowResult] = useState(false);
  const [bankruptcyChance, setBankruptcyChance] = useState(0);
  const [riskLevel, setRiskLevel] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  // Auth state
  const [activeTab, setActiveTab] = useState("calculator");

  // Effect for property description
  useEffect(() => {
    if (propertyType === "none") {
      setPropertyDescription("Недвижимость отсутствует. Риск ареста отсутствует.");
    } else if (propertyType === "single") {
      setPropertyDescription("Единственное жильё. Практически не подлежит аресту, кроме исключений.");
    } else if (propertyType === "secondary") {
      setPropertyDescription(
        bankruptcyChance >= 70 ? "Высокий риск ареста" : "Умеренный риск ареста"
      );
    } else if (propertyType === "land") {
      setPropertyDescription(
        bankruptcyChance >= 60 ? "Высокий риск ареста" : "Есть шанс сохранить"
      );
    }
  }, [propertyType, bankruptcyChance]);

  // Calculate bankruptcy chance
  const calculateBankruptcy = () => {
    const debt = parseFloat(debtAmount) || 0;
    const delays = parseInt(delaysCount) || 0;
    const courtUsed = court === "yes";
    const loans = parseInt(loanCount) || 0;
    const incomeValue = parseFloat(income) || 0;

    let risk = 0;
    risk += delays * 7;
    if (courtUsed) risk += 25;
    risk += debt / 75000;
    risk -= incomeValue / 40000;
    risk += loans * 3;

    risk = Math.max(0, Math.min(risk, 100));
    const calculatedChance = Math.round(Math.min(Math.max(100 - risk, 0), 100));

    setBankruptcyChance(calculatedChance);
    setRiskLevel(
      risk >= 70 ? "Высокий" :
        risk >= 40 ? "Средний" : "Низкий"
    );

    setShowResult(true);
  };

  return (
    <div className="max-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-emerald-950 text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <Slides />
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeTab === "calculator" && (
          <Calculator
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            debtAmount={debtAmount}
            setDebtAmount={setDebtAmount}
            delaysCount={delaysCount}
            setDelaysCount={setDelaysCount}
            court={court}
            setCourt={setCourt}
            loanCount={loanCount}
            setLoanCount={setLoanCount}
            alimony={alimony}
            setAlimony={setAlimony}
            fines={fines}
            setFines={setFines}
            bankrupt={bankrupt}
            setBankrupt={setBankrupt}
            dependents={dependents}
            setDependents={setDependents}
            dependentsCount={dependentsCount}
            setDependentsCount={setDependentsCount}
            income={income}
            setIncome={setIncome}
            region={region}
            setRegion={setRegion}
            bankruptcyChance={bankruptcyChance}
            riskLevel={riskLevel}
            propertyDescription={propertyDescription}
            showResult={showResult}
            calculateBankruptcy={calculateBankruptcy}
          />
        )}
        {(activeTab === "login" || activeTab === "register") && <AuthSection activeTab={activeTab} setActiveTab={setActiveTab} />}
        {activeTab === "dashboard" && <Dashboard />}
      </main>

      <Footer />
    </div>
  );
}