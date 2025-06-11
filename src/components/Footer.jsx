// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-green-900 py-8 border-t border-emerald-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-emerald-200">&copy; 2025 Калькулятор по банкротству. Все права защищены.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://t.me/r1pp3rr"  className="text-emerald-200 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="tel:+1234567890" className="text-emerald-200 hover:text-white transition-colors">
                Телефон
              </a>
              <a href="mailto:info@bankruptcy-help.com" className="text-emerald-200 hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}