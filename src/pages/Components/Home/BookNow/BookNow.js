import React from 'react';
import toast from 'react-hot-toast';

const BookNow = ({ selectedProduct, setSelectedProduct, refetch }) => {
    const { buyer, email, item, price, img } = selectedProduct;


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const buyer = form.buyer.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const order = {
            buyer,
            email,
            item,
            price,
            img,
            phone,
            location
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order confirmed successfully')
                    setSelectedProduct(null)
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="booking-product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid gap-3 mt-10'>
                        <input name='buyer' defaultValue={buyer} disabled type="text" className="input input-bordered w-full" />
                        <input name='email' defaultValue={email} disabled type="email" className="input input-bordered w-full" />
                        <input name='item' defaultValue={item} disabled type="text" className="input input-bordered w-full" />
                        <input name='price' defaultValue={price} disabled type="text" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" required />
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;