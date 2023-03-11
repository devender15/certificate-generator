import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import template1 from "../../assets/cert_templates/Template1.png";
import template2 from "../../assets/cert_templates/Template2.png";
import template3 from "../../assets/cert_templates/Template3.png";
import template4 from "../../assets/cert_templates/Template4.jpeg";
import template5 from "../../assets/cert_templates/Template5.png";
import template6 from "../../assets/cert_templates/Template6.png";
import template7 from "../../assets/cert_templates/Template7.png";
import template8 from "../../assets/cert_templates/Template8.png";
import template9 from "../../assets/cert_templates/Template9.gif";
import template10 from "../../assets/cert_templates/Template10.jpg";
import template11 from "../../assets/cert_templates/Template11.png";

const templates = [
  {
    id: 1,
    name: "Template 1",
    src: template1,
  },
  {
    id: 2,
    name: "Template 2",
    src: template2,
  },
  {
    id: 3,
    name: "Template 3",
    src: template3,
  },
  {
    id: 4,
    name: "Template 4",
    src: template4,
  },
  {
    id: 5,
    name: "Template 5",
    src: template5,
  },
  {
    id: 6,
    name: "Template 6",
    src: template6,
  },
  {
    id: 7,
    name: "Template 7",
    src: template7,
  },
  {
    id: 8,
    name: "Template 8",
    src: template8,
  },
  {
    id: 9,
    name: "Template 9",
    src: template9,
  },
  {
    id: 10,
    name: "Template 10",
    src: template10,
  },
  {
    id: 11,
    name: "Template 11",
    src: template11,
  },
];

export default function Template({ setStep, setSelectedTemplate }) {
  const [showTemplates, setShowTemplates] = useState(false);

  const handleShowTemplates = () => {
    setShowTemplates(true);
  };

  const handleNextPage = () => {
    setStep((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    setStep(1);
  }, [])

  return (
    <div className="basis-1/2">
      <div className="text-center">
        <h2 className="py-2 text-xl md:text-3xl font-bold">Select template</h2>
      </div>

      <div className="flex flex-col space-y-3 mt-10 w-1/2 mx-auto">
        {!showTemplates ? (
          <>
            <button className="btn btn-primary" onClick={handleShowTemplates}>
              Existing template
            </button>
            <button className="btn btn-accent">Create new template</button>
          </>
        ) : null}
      </div>

      {showTemplates && (
        <>
          <section className="relative p-2 border-2 border-purple-800 grid grid-cols-1 md:grid-cols-2 gap-2 h-[25rem] overflow-y-auto px-4">
            {templates.map((template) => {
              return (
                <div
                  key={template?.id}
                  className="card w-full m-1 bg-base-100 shadow-xl"
                >
                  <img
                    src={template?.src}
                    loading="lazy"
                    alt={template?.name}
                    onClick={() => setSelectedTemplate(template?.src)}
                    className="h-full w-full object-cover cursor-pointer"
                  />
                </div>
              );
            })}
          </section>
          <div className="mt-3 w-full flex justify-center">
            <Link to="/create/enter-details" className="btn btn-info" onClick={handleNextPage}>
              Next
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
