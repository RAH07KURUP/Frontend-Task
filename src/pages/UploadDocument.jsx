import { useState } from "react";

const UploadDocument = ({setUpload}) => {
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();setUpload(false)
    console.log({ documentName, documentType, remarks, file });
  };

  return (
    <div id='upload-modal' className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm  z-20 " onClick={(e) => {
        if (e.target.id === "upload-modal") {
          setUpload(false);
        }}}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96  h-full  absolute right-[0] top-[1%]">
        <div className="flex justify-between items-center mb-4" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-xl font-semibold">Upload Document</h2>
          <button className="text-gray-500" onClick={()=>setUpload(false)}>✖</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Document Name</label>
            <select 
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="doc1">Document 1</option>
              <option value="doc2">Document 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Document Type</label>
            <select 
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="pdf">PDF</option>
              <option value="word">Word Document</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Document Remarks</label>
            <input
              type="text"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Select File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            📄 Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDocument;
