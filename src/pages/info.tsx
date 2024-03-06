import React from 'react'
import Nav from '../utils/nav';
const Info: React.FC = () => {
    const mainFAQs = [
        {
            question: "Can I request additional features to be added to my webapp/website after it's built?",
            answer: "Yes, we are open to discussing and implementing additional features to enhance your webapp further. Additional feature requests will be evaluated based on their complexity and feasibility."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept payments via various methods including bank transfer, credit/debit cards, PayPal, and other secure online payment gateways. The preferred payment method can be discussed during the project initiation."
        },
        {
            question: "What stack would the webapp/website be made on?",
            answer: "The stacks are discussed within the Stack section in orders page."
        },
        {
            question: "How much time could it take to build my webapp/website?",
            answer: "Depends, on the complexity, scalability and optimization to be implied on the particular project. On an average this could take about 20 days."
        },
        {
            question: "Can I adjust the rates?",
            answer: "Except Suggestions and Bug fixing, no rates are to be negotiated."
        },


    ];


    return (<>
        <div className="w-screen h-screen bg-black opacity-85 p-4">
            <div className="flex justify-center">

                <div className="px-4 py-2 space-y-4 text-center w-full max-w-[700px] overflow-y-auto rounded-xl bg-black opacity-85">

                    {

                        mainFAQs && mainFAQs.map((element, index) => (
                            <div className="space-y-1 hover:scale-70 transform" key={index}>
                                <span className="font-bold pro-1 text-sm text-gray-200">{element.question}</span><br />
                                <span className='text-gray-700 text-sm text-white'>{element.answer}</span><br />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
        <Nav />
    </>)
}
export default Info;
