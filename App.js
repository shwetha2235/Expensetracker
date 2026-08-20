import "./App.css";
import { useState } from "react";

import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import MonthlyReport from "./components/MonthlyReport";
import ExportCSV from "./components/ExportCSV";
import ExportPDF from "./components/ExportPDF";

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      {/* Dashboard */}
      <Dashboard />

      {/* Add / Edit Transaction */}
      <TransactionForm
        selectedTransaction={selectedTransaction}
        setSelectedTransaction={setSelectedTransaction}
      />

      {/* Transaction List */}
      <TransactionList
        onEdit={setSelectedTransaction}
      />

      {/* Monthly Report */}
      <MonthlyReport />

      {/* Export Buttons */}
      <ExportCSV />
      <ExportPDF />
    </div>
  );
}

export default App;