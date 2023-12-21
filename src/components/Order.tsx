import React from "react";

function Order(){
    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }

    const bottomContext:React.CSSProperties={
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
}
    const totalText:React.CSSProperties={
     color:'red',
        margin:'0'
    }
    return(
        <div>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="customer">Select Customer</label>
                            <select  id='customer' className='form-control'>
                                <option value="#" disabled  defaultValue='Use Option'>Use Option</option>
                                <option value="#">Customer 1</option>
                                <option value="#">Customer 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Name</label>
                            <input type="text" disabled className="form-control" id='customerName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text"  disabled className="form-control" id='customerAddes'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerSalary">Customer Salary</label>
                            <input type="number" disabled className="form-control" id='customerSalary'/>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="product">Select Product</label>
                            <select  id='product' className='form-control'>
                                <option value="#" disabled  defaultValue='Use Option'>Use Option</option>
                                <option value="#">Product 1</option>
                                <option value="#">Product 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="description">Product Description</label>
                            <input type="text" disabled className="form-control" id='description'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">UnitePrice</label>
                            <input type="number" disabled className="form-control" id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qtyonHand">qty On Hand</label>
                            <input type="number" disabled className="form-control" id='qtyonHand'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">qty</label>
                            <input type="number" className="form-control" id='qty'/>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12'>Add  Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>unite Price</th>
                                <th>qty</th>
                                <th>Total</th>
                                <th>Delete</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>product 1</td>
                                <td>250</td>
                                <td>50.00</td>
                                <td>5000.00</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <br/>

                        <div className="bottom-context" style={bottomContext}>

                            <div className="total-outer" style={totalText}>
                                <h1>
                                    Total:2500
                                </h1>
                            </div>
                            <div className="place-order-button-context">
                                <button className='btn btn-primary '>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;