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
        <div className='text-center mt-4'>
            <h3 className='text-2xl lg:text-3xl mb-2'>Hello {buyer}!!!</h3>
            <h3 className='text-xl lg:text-2xl'>Your have ordered <b>{item}</b></h3>
            <p>Please pay <b>${price}</b> for your order!!</p>
            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;