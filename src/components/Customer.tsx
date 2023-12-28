import React, {useEffect, useState} from "react";
import axios from "axios";



interface Customer{
    _id:string,
    nic:string
    name:string,
    address:string,
    salary:number,
}



const Customer: React.FC = () => {


    const [customers,setCustomers]=useState<Customer[]>([])



    const [nic, setNic] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState<number | "">('')



    const deleteCustomer= async (data:string)=>{
        console.log(data)
        const response=await  axios.delete('http://localhost:3000/api/v1/customers/delete/'+data)
        findAllCustomer()
        console.log(response)
    }


    useEffect(()=>{
        findAllCustomer()
    },[])

    const findAllCustomer=async ()=>{
    const response= await  axios.get('http://localhost:3000/api/v1/customers/find-all?searchText=&page=1&size=10')
      // console.log(response.data)
       setCustomers(response.data)




    }

    const saveCustomer = async () => {
        console.log(nic, name, address, salary)
        try {
            const response = await axios.post('http://localhost:3000/api/v1/customers/create', {
                nic, name, address, salary
            });
            console.log(response)
            findAllCustomer()

            setNic('')
            setName('')
            setAddress('')
            setSalary('')

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

                            <input type="text" className="form-control" id='customerNic' value={nic}
                                   onChange={(e) => setNic(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Name</label>

                            <input type="text" className="form-control" id='customerName' value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text" className="form-control" id='customerAddes' value={address}
                                   onChange={(e) => setAddress(e.target.value)}/>


                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerSalary">Customer Salary</label>

                            <input type="text" className="form-control" id='customerSalary' value={salary}
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
                                <th>#Nic</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((data,index)=>{

                                return   <tr key={data._id}>
                                    <td>{index}</td>
                                    <td>{data.nic}</td>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.salary}</td>
                                    <td>
                                        <button className='btn btn-outline-danger btn-sm' onClick={(e)=>{
                                            if(confirm('are you sure delete')) {
                                               deleteCustomer(data._id)
                                            }
                                        }}>Delete</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-outline-success btn-sm'>Update</button>
                                    </td>

                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Customer;