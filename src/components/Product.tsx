import React, {useState} from "react";


interface Product{
    name:string,
    description:string,
    image:string,
    unitePrice:number,
    qtyOnHand:number
}



const Product:React.FC=()=>{

    const [name,setName]=useState()
    const [description,setDescription]=useState()
    const [image,setImage]=useState()
    const [unitePrice,setUnitePrice]=useState()
    const [qtyOnHand,setQtyOnHand]=useState()

    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }

    return(
        <div>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" className="form-control" id='productName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">UnitePrice</label>
                            <input type="text" className="form-control" id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">qty On Hand</label>
                            <input type="text" className="form-control" id='qty'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" className="form-control" id='image'/>
                        </div>
                    </div>
                    <div className="col-12" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea rows={5} className="form-control" id='description'/>
                        </div>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12'>Save Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form action="" className='col-12'>
                            <input type="search" className='form-control' placeholder='Search Product'/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>unite Price</th>
                                <th>Delete</th>
                                <th>Update</th>
                                <th>See More</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>nimal</td>
                                <td>colombo</td>
                                <td>5000.00</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-sm'>Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-outline-info btn-sm'>View</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;