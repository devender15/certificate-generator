import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Stepper } from "../../components";

import Template from "./Template";
import Details from "./Details";

export default function Create() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [form, setForm] = useState({
    heading: '',
    participantName: '',
    description: '',
    author: '',
    logo: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="h-screen bg-gradient-to-r from-[#9796f0] to-[#fbc7d4]">
      <main className="flex flex-col md:flex-row md:space-x-3 justify-between px-2 py-8">
        <Routes>
          <Route path="/" element={<Template setStep={setStep} setSelectedTemplate={setSelectedTemplate} />} />

          <Route path="/enter-details" element={<Details setStep={setStep} form={form} setForm={setForm} />} />
        </Routes>

        <div className="p-2 h-[35rem] border-2 border-black bg-white shadow-lg basis-1/2">
          <div className="h-full w-full bg-transparent">
            {selectedTemplate ? (
              <img src={selectedTemplate} alt="certificate" className="h-full w-full object-cover"/>
            ) : (
              <div className="bg-gray-400 h-full w-full flex justify-center items-center text-3xl ">Select a template</div>
            )}
            
          </div>
        </div>
      </main>

      <div className="w-full flex justify-center my-2">
        <Stepper currentStep={step} />
      </div>
    </div>
  );
}
