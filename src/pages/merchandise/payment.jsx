import React, { useEffect } from 'react';

const RazorpayButton = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PXA6uY10pi4ryq');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};


const RazorpayButton3 = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PXANHrAgPu4NQg');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};
const RazorpayButton4 = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PXAWWNJLRn63bF');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};


export  {RazorpayButton,RazorpayButton3,RazorpayButton4};

