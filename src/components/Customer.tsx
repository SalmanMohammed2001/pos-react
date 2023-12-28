import React, {useState} from "react";
import axios from "axios";


/*
interface Customer{
    id:string,
    name:string,
    address:string,
    salary:number,
}
*/


const Customer: React.FC = () => {
    const [nic, setNic] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState<number | "">('')


    const saveCustomer = async () => {
        console.log(nic, name, address, salary)
        try {
            const response = await axios.post('http://localhost:3000/api/v1/customers/create', {
                nic, name, address, salary
            });
            console.log(response)

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Nic</label>

                            <input type="text" className="form-control" id='customerNic'
                                   onChange={(e) => setNic(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Name</label>

                            <input type="text" className="form-control" id='customerName'
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text" className="form-control" id='customerAddes'
                                   onChange={(e) => setAddress(e.target.value)}/>


                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerSalary">Customer Salary</label>

                            <input type="text" className="form-control" id='customerSalary'
                                   onChange={(e) => setSalary(e.target.value == '' ? '' : parseFloat(e.target.value))}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={saveCustomer}>Save Customer</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form action="" className='col-12'>
                            <input type="search" className='form-control' placeholder='Search Customer'/>
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
                                <th>Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Delete</th>
                                <th>Update</th>
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
                            </tr>
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
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Customer;