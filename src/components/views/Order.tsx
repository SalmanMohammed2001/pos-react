import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "react-bootstrap";

interface Customer{
    _id:string,
    nic:string
    name:string,
    address:string,
    salary:number,
}


interface Product{
    _id:string
    name:string,
    description:string,
    image:File | string,
    unitePrice:number,
    qtyOnHand:number

}

interface Cart{
    _id:string | undefined,
    description:string| undefined,
    unitePrice:number| undefined,
    qty:number| undefined,
    total:number
}
const Order:React.FC=()=>{
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

    const[customersDetails,setCustomersDetails]=useState<Customer[]>([])
    const[productDetails,setProductDetails]=useState<Product[]>([])
    const[cart,setCart]=useState<Cart[]>([])


    const[customerId,setCustomerId]=useState('')
    const [nic, setNic] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState<number | "">('')


    const [productId,setProductId]=useState('')
    const [description,setDescription]=useState('')
    const [unitePrice,setUnitePrice]=useState<number| undefined>(0)
    const [qtyOnHand,setQtyOnHand]=useState<number | undefined >(0)

    const [selectProduct, setSelectProduct] = useState<Product | null>(null)
    const [selectCustomer, setSelectCustomer] = useState<Customer | null>(null)



    const[userQty,setUserQty]=useState<number >(0)
    const[netToal,setNetTotal]=useState(0)


    useEffect(()=>{
        findAllCustomerAndProduct()

    },[])

    const findAllCustomerAndProduct=async ()=>{
        const customer= await  axios.get('http://localhost:3000/api/v1/customers/find-all?searchText=&page=1&size=10')
        setCustomersDetails(customer.data)

        const products= await  axios.get('http://localhost:3000/api/v1/products/find-all?searchText=&page=1&size=10')
        setProductDetails(products.data)
    }


    const  loadAllCustomerDetails= async (id:string)=>{
        const response= await axios.get('http://localhost:3000/api/v1/customers/find-by-id/'+id)
        setSelectCustomer(response.data)
        setCustomerId(response.data._id)
        setNic(response.data.nic)
        setAddress(response.data.address)
        setSalary(response.data.salary)

    }

    const  loadAllProductDetails= async (id:string)=>{
        const response= await axios.get('http://localhost:3000/api/v1/products/find-by-id/'+id)
        setSelectProduct(response.data)
        setProductId(response.data._id)
      setDescription(response.data.description)
      setUnitePrice(response.data.unitePrice)
      setQtyOnHand(response.data.qtyOnHand)
    }





    const addToCart=(newItem:Cart)=>{
        setCart((prevState)=>[...prevState,newItem])


    }






    const isExist=(id)=>{
        for (let i = 0; i < cart.length; i++) {
            if(cart[i]===id){
                console.log('salman')
                return i;
            }

        }
        return -1;

    }

    let letCart:[];

/*    const addToCart=()=> {
        const cartProduct: Cart = {
            _id: selectProduct?._id,
            description: description,
            unitePrice: unitePrice,
            qty: userQty,
            total: (userQty * (unitePrice ? unitePrice : 0))
        }

        setCart((prevState) => [...prevState, cartProduct])
        setTotal()
    }*/

/*
    const setTotal= ()=>{
       let amount=0

       cart.map((data,index)=>{
           amount+=data.total

       })

        setNetTotal(amount)
       console.log(netToal)
    }
*/

    return(
        <div>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="customer">Select Name</label>
                            <select  id='customer' className='form-control' onChange={(e)=>{
                                loadAllCustomerDetails(e.target.value)
                            }}>
                                <option value={""}>Select Value</option>
                                {customersDetails.map((data,index)=>{
                                        return  <option value={data._id} key={index}>{data.name}</option>
                                    })
                                }

                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Nic</label>
                            <input type="text" value={nic} disabled className="form-control" id='customerNic'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text" value={address}  disabled className="form-control" id='customerAddes'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerSalary">Customer Salary</label>
                            <input type="number" disabled value={salary} className="form-control" id='customerSalary'/>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="product">Select Product</label>
                            <select  id='product' className='form-control' onChange={(e)=>loadAllProductDetails(e.target.value)}>
                                <option value="">Select Product</option>
                                {
                                    productDetails.map((data,index)=>{
                                        return  <option value={data._id} key={index}>{data.name}</option>
                                    })

                                }

                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="description">Product Description</label>
                            <input type="text" value={description} disabled className="form-control" id='description'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">UnitePrice</label>
                            <input type="number" value={unitePrice} disabled className="form-control" id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qtyonHand">qty On Hand</label>
                            <input type="number"  value={qtyOnHand} disabled className="form-control" id='qtyonHand'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">qty</label>
                            <input type="number" className="form-control" id='qty' onChange={(e)=>{setUserQty(parseFloat(e.target.value))}}/>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={()=>{

/*

                           const cartProduct:Cart = {
                                _id:String | undefined,
                                description:String| undefined,
                                unitePrice:Number| undefined,
                                qty:Number| undefined,
                                total:Number
                            }
*/

                            const id=selectProduct?._id;
                            const des=description
                            const price=unitePrice
                            const qty=userQty
                            const total=userQty*unitePrice;
                    //        console.log(id,des,price,qty,total)

                            if(qty>qtyOnHand) {
                                alert('invalid entry');
                                return
                            }



                            const cartProduct:Cart={
                                _id:selectProduct?._id,
                                description:description,
                                unitePrice:unitePrice,
                                qty:userQty,
                                total:(userQty * (unitePrice?unitePrice:0))
                            }


                           addToCart(cartProduct)
                        }}>Add  Product</button>
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

                            {cart.map((data,index)=>{
                                return   <tr key={index}>
                                    <td>{data._id}</td>
                                    <td>{data.description}</td>
                                    <td>{data.unitePrice}</td>
                                    <td>{data.qty}</td>
                                    <td>{data.total}</td>


                                    <td>
                                        <button className='btn btn-outline-danger btn-sm' onClick={(e)=>{
                                            console.log(data._id)
                                           setCart((prevState)=>prevState.filter((cartData)=>cartData._id!==data._id));
                                        }}>Delete</button>
                                    </td>


                                </tr>
                            })}

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
                                <button className='btn btn-primary ' onClick={async ()=>{
                                    await axios.post('http://localhost:3000/api/v1/orders/create',{
                                        date:new Date(),
                                        customerDetails:selectCustomer,
                                        totalCost:1500,
                                        Product:cart
                                    })

                                }}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;