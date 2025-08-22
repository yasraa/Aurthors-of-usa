// FAQ.jsx
import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" >
<h3>Frequently Asked Questions</h3>
      {data.map((item, index) => (
        <div
        onClick={() => toggleFAQ(index)}
          key={index}
          style={{
            backgroundColor: "var(--red)",
            padding: "15px 20px",
            width: "75vw",
            borderRadius: "5px",
            color: "var(--pearl)",
            marginBottom: "10px",
          }}
        >
          {/* Question Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span>{item.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <p
              style={{
                marginTop: "5px",
                color: "var(--red)",
                border: "1px solid var(--red)",
                background: "var(--pearl)",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
