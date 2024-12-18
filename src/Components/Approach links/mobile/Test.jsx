import React from 'react';

const Test = () => {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            gap: 1em;
            flex-wrap: wrap; 
          }

          .info {
            text-align: left;
            width: 65%;
            font-size: 20px;
            text-align: justify;
            margin-right: 2em;
          }

          .card {
            width: 300px;
            height: 400px;
           border-radius: 20px;
            overflow: hidden;
          }

          .card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .heading {
            text-align: center;
            margin-bottom: 1em;
          }

          .container {
            flex-direction: row;
          }

          .info {
            order: 1; 
          }

          .card {
            order: 2; 
          }

          /*iPhone SE (max-width: 375px) */
        @media (max-width: 768px) {
            .container {
              flex-direction: column; 
              text-align: center;
            }

            .info {
              width: 100%; 
              font-size: 16px; 
              margin-bottom: 1em; 
              order: 2; 
            }

            .card {
              width: 100%; 
              height: 300px; 
              margin-bottom: 1em; 
              order: 1; 
            }

            .card-img {
              max-height: 300px; 
            }
          }

          /*iPhone SE (max-width: 375px) */
          @media (max-width: 375px) {
            .container {
              flex-direction: column; 
              text-align: center;
            }

            .info {
              width: 100%; 
              font-size: 14px; 
              margin-bottom: 1em;
              order: 2; 
            }

            .card {
              width: 100%; 
              height: 250px; 
              margin-bottom: 1em; 
              order: 1; 
            }

            .card-img {
              max-height: 250px; 
            }
          }

          /*small devices (max-width: 360px) */
          @media (max-width: 360px) {
            .container {
              flex-direction: column; 
              text-align: center;
            }

            .info {
              width: 100%; 
              font-size: 14px; 
              margin-bottom: 1em; 
              order: 2; 
            }

            .card {
              width: 100%; 
              height: 250px; 
              margin-bottom: 1em; 
              order: 1; 
            }

            .card-img {
              max-height: 250px;
            }
          }
        `}
      </style>

      <div className="heading">
        <h1>Testing Phase</h1>
      </div>

      <div className="container">
        <div className="info">
          <p>
            Testing for companies is an essential component of ensuring that
            products, services, and systems meet high-quality standards and
            deliver value to customers. It involves a series of carefully planned
            stages, beginning with functional testing to verify that all product
            features work as expected. Usability testing is conducted to identify
            design flaws and improve user experience, while performance testing
            evaluates the product’s ability to handle various loads and traffic,
            ensuring that it performs well under stress. Security testing is
            critical for identifying and addressing vulnerabilities, safeguarding
            user data, and preventing breaches. Compatibility testing ensures that
            the product functions across different devices, operating systems, and
            browsers, providing a seamless experience for all users. Regression
            testing is performed to ensure that new changes or updates don’t
            introduce issues in existing functionality. Market testing, such as beta
            testing and focus groups, provides valuable insights from real customers,
            allowing companies to fine-tune the product based on real-world feedback.
            A/B testing is often used to compare different versions of a product or
            feature, helping to identify the most effective design or marketing
            approach. Quality assurance (QA) plays a key role in detecting and
            addressing defects before the product reaches customers, and continuous
            testing throughout the development cycle helps companies quickly adapt to
            any issues.
          </p>
        </div>

        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/software-developer-concept-idea-programming-coding-system-development-digital-technology-software-developing-company-writing-code-isolated-vector-illustration_613284-3389.jpg?ga=GA1.1.683707051.1708259243&semt=ais_hybrid"
            alt="Card Image"
            className="card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;