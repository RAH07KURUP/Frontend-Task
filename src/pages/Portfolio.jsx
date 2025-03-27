import React, { useState, useEffect, useMemo } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import options from "../json-files/Portfolio-options.json";import loans from "../json-files/Loans.json";
import UploadDocument from "./UploadDocument";

const Portfolio = () => {
  const [search, setSearch] = useState("");
  const [selectedLoans, setSelectedLoans] = useState([]); 
  const [portfolio, setPortfolio] = useState("All");
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);const [upload, setUpload] = useState(false);


  const selectedLoanCounts = useMemo(() => {
    return selectedOptions.reduce((acc, option) => {
      acc[option] = selectedLoans.filter((loan) => loan.portfolio === option).length;
      return acc;
    }, {});
  }, [selectedLoans, selectedOptions]);

  useEffect(() => {
    let filtered = loans;

    if (portfolio !== "All") {
      filtered = loans.filter((loan) => loan.portfolio === portfolio);
    }

    if (search) {
      filtered = filtered.filter((loan) =>
        loan.id.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredLoans(filtered);
  }, [portfolio, search]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const toggleSelection = (loan) => {
    setSelectedLoans((prev) =>
      prev.some((selectedLoan) => selectedLoan.id === loan.id)
        ? prev.filter((selectedLoan) => selectedLoan.id !== loan.id)
        : [...prev, loan]
    );
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>

      <div className="flex space-x-4 mb-4">
        {options.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border rounded-md ${
              portfolio === tab ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setPortfolio(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Loan Number"
          className="border p-2 w-1/3 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="space-x-2 relative">
          <button className="px-4 py-2 border hover:bg-gray-400 rounded-md" onClick={toggleDropdown}>
            Select Columns ▼
          </button>
          {isOpen && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded shadow-md mt-1 z-10 max-h-40 overflow-auto">
              {options.map((option) => (
                <div>{option!="All"&&<li key={option} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleSelect(option)}
                    className="mr-2"
                  />
                  {option}
                </li>}</div>
              ))}
            </ul>
          )}
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md" onClick={()=>setUpload(true)}>
            More Filters
          </button>
        </div>
      </div>
        {upload&&<UploadDocument setUpload={setUpload}/>}
      <div className="mb-[1%] mt-[3%]">
        <div className="border p-2 rounded-md w-full flex flex-wrap gap-2 mt-2">
          {selectedOptions.map((option) => (
            <div key={option} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {`${option} (${selectedLoanCounts[option] || 0})`}
            </div>
          ))}
          <p className=" ml-[3px]">{`${selectedLoans.length} loans selected`}</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left"></th>
              <th className="p-3 text-left">Loan No</th>
              <th className="p-3 text-left">Loan type</th>
              <th className="p-3 text-left">Borrower</th>
              <th className="p-3 text-left">Borrower Address</th>
              <th className="p-3 text-left">Co Borrower</th>
              <th className="p-3 text-left">Sanction Amount</th>
              <th className="p-3 text-left">Region</th>
              <th className="p-3 text-left">CDP</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan) => (
              <tr key={loan.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedLoans.some((selectedLoan) => selectedLoan.id === loan.id)}
                    onChange={() => toggleSelection(loan)}
                  />
                </td>
                <td className="p-3 text-blue-600 cursor-pointer">{loan.id}</td>
                <td className="p-3">{loan.type}</td>
                <td className="p-3">{loan.borrower}</td>
                <td className="p-3">{loan.address}</td>
                <td className="p-3">{loan.coBorrower}</td>
                <td className="p-3">{loan.sanction.toLocaleString()}</td>
                <td className="p-3">{loan.region}</td>
                <td className="p-3">{loan.cdp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-600">Total {filteredLoans.length} results</p>
    </div>
  );
};

export default Portfolio;
