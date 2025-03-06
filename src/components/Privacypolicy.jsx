import { useState } from "react";
import privacyPolicyData from "../utils/PrivacyPolicy";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 mt-4 rounded-lg shadow-md text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">
        {privacyPolicyData.title}
      </h1>

      {/* Introduction */}
      <div className="mb-8">
        {privacyPolicyData.introduction.map((paragraph, index) => (
          <p key={index} className="mb-4 text-blue-100 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Table of Contents */}
      <div className="mb-8 p-4 bg-blue-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {privacyPolicyData.sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="text-blue-200 hover:text-white font-medium"
              >
                {section.id}. {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      {privacyPolicyData.sections.map((section) => (
        <div
          key={section.id}
          id={`section-${section.id}`}
          className={`mb-8 p-4 border-l-4 border-blue-700 ${
            activeSection === section.id ? "bg-blue-800" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            {section.id}. {section.title}
          </h2>

          {section.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-blue-100 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {section.subsections &&
            section.subsections.map((subsection, index) => (
              <div key={index} className="ml-4 mb-4 mt-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-200">
                  {subsection.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {subsection.content}
                </p>
              </div>
            ))}

          {section.conclusion &&
            section.conclusion.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-blue-100 leading-relaxed mt-4"
              >
                {paragraph}
              </p>
            ))}
        </div>
      ))}

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-blue-700 text-center">
        <p className="text-sm text-blue-300">Last Updated: March 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
