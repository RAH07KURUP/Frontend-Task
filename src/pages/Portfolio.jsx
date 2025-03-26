import React, { useState } from "react";import { ArrowUp, ArrowDown } from "lucide-react";

const Portfolio = () => {
  const [search, setSearch] = useState("");
  const [selectedLoans, setSelectedLoans] = useState([]);

  const loans = [
    { id: "L28UJ3247", type: "Home Loan", borrower: "Vedika Sachar", address: "83 Yogi Gali, Kadapa-058720", coBorrower: "Divit Vora", sanction: 1934068, region: "West", cdp: 91 },
    { id: "L28UJ3243", type: "Car Loan", borrower: "Hrishtaa Agrawal", address: "66/822, Dev Path, Bettampore 841186", coBorrower: "Mahika Tak", sanction: 1824143, region: "North", cdp: 100 },
    { id: "L28UJ3250", type: "Car Loan", borrower: "Priyansh Soman", address: "H.No. 152 Amritsar-471162", coBorrower: "Zaina Dara", sanction: 4537889, region: "East", cdp: 100 },
    { id: "L28UJ3248", type: "Home Loan", borrower: "Priyansh Chinda", address: "24, Rajiv Chowk, Gutsikal 809332", coBorrower: "Zain Ghosh", sanction: 2681712, region: "West", cdp: 100 },
  ];

  const [type,setType]=useState('All')
  
  const filteredLoans = loans.filter((loan) =>
    loan.id.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle loan selection
  const toggleSelection = (id) => {
    setSelectedLoans((prev) =>
      prev.includes(id) ? prev.filter((loan) => loan !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 min-h-screen">

      <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>

      <div className="flex space-x-4 mb-4">
        {["All", "Pre Sarfesi", "NPA", "13(3) Responses", "Symbolic Possession", "DM Order", "Physical Possessions", "Auctions"].map((tab) => (
          <button key={tab} className={`px-4 py-2 border rounded-md ${
            type === tab
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-gray-300"
          }`} onClick={() => setType(tab)}>
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
        <div className="space-x-2">
          <button className="px-4 py-2  border hover:bg-gray-400 rounded-md">Select Columns ▼</button>
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md">More Filters</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left"></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Loan No<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Loan Type<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Borrower<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Borrower Address<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Co Borrower<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Sanction Amount<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">Region<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
              <th className="p-3 text-left"><div className=" inline-flex justify-center content-center">CDP<ArrowUp size={16}/><ArrowDown size={16}/></div></th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan) => (
              <tr key={loan.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedLoans.includes(loan.id)}
                    onChange={() => toggleSelection(loan.id)}
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
