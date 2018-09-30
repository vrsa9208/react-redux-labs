import React from 'react';

export default function Checkout() {
    return (
        <section>
            <h2>Checkout</h2>
            <h3>Items</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Movie ticket</td>
                        <td>$30.5</td>
                        <td>1</td>
                        <td>$30.5</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Subtotal</td>
                        <td>$30.5</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Tax</td>
                        <td>$6.5</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>$37</td>
                    </tr>
                </tfoot>
            </table>
            <button>Purchase</button>
            <a href="#">Keep Shopping</a>
        </section>
    );
}