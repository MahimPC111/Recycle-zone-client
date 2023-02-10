import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './Checkout';

const Payment = () => {
    const order = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    const { buyer, item, price } = order;

    console.log(order)

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-yellow-100 p-6 md:p-8 lg:p-12'>
                <h3 className='text-center text-2xl md:text-3xl lg:text-4xl mb-2'>Hello {buyer}!!!</h3>
                <p className='lg:text-lg'>Your have ordered <b>{item}</b>. Please pay <b>${price}</b> for your order!!</p>
                <div className='w-auto mt-10 mx-auto'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;