import React from 'react';
import Nav from '../utils/nav';

const Form: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-4 rounded shadow-md mt-[-50px] w-[60vw] min-w-[380px]">
          <iframe
            className="w-full h-[80vh] md:h-120 border-none"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd2g5oIgXTkBUxOBuYdkxG5atd244F1EzXFi5Lg_crsTJJowA/viewform?embedded=true"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Form;