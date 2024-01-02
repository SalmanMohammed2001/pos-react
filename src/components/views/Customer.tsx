import React, {useEffect, useState} from "react";
import AxiosInstance from "../config/axiosInstance.ts";
import {Modal} from "react-bootstrap";





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


    const [selectedCustomerId, setSelectedCustomerId] = useState('')
    const [updateNic, setUpdateNic] = useState('')
    const [updateName, setUpdateName] = useState('')
    const [updateAddress, setUpdateAddress] = useState('')
    const [updateSalary,setUpdateSalary] = useState<number | "">('')


    const [modelstate, setModelstate] = useState<boolean>(false)




    const loadModel= async (id:string)=>{
     const response= await AxiosInstance.get('http://localhost:3000/api/v1/customers/find-by-id/'+id)
        console.log(response.data)
        setSelectedCustomerId(response.data._id)
        setUpdateNic(response.data.nic)
        setUpdateName(response.data.name)
        setUpdateAddress(response.data.address)
        setUpdateSalary(parseFloat(response.data.salary))
        setModelstate(true)
    }

    const updateCustomer = async () => {
        console.log(selectedCustomerId, updateNic, updateAddress, updateName,updateSalary)
       try {
            const response = await AxiosInstance.put('http://localhost:3000/api/v1/customers/update/'+selectedCustomerId, {
                nic:updateNic, address:updateAddress, name:updateName, salary:updateSalary
            });
            console.log(response)
             findAllCustomer()
           setModelstate(false)


        } catch (e) {
            console.log(e)
        }

    }

    const deleteCustomer= async (id:string)=>{
        console.log(id)
        const response=await  AxiosInstance.delete('http://localhost:3000/api/v1/customers/delete-by-id',{params:{id}})
        findAllCustomer()
        console.log(response)
    }


    useEffect(()=>{
        findAllCustomer()
    },[])

    const findAllCustomer=async ()=>{
    const response= await  AxiosInstance.get('http://localhost:3000/api/v1/customers/find-all?searchText=&page=1&size=10')
      // console.log(response.data)
       setCustomers(response.data)




    }

    const saveCustomer = async () => {
        console.log(nic, name, address, salary)
        try {
            const response = await AxiosInstance.post('http://localhost:3000/api/v1/customers/create', {
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
                                    <td>{index+1}</td>
                                    <td>{data.nic}</td>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.salary}</td>
                                    <td>
                                        <button className='btn btn-outline-danger btn-sm' onClick={()=>{
                                            if(confirm('are you sure delete')) {
                                               deleteCustomer(data._id)
                                            }
                                        }}>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>{
                                            loadModel(data._id)
                                        }} className='btn btn-outline-success btn-sm'>Update</button>
                                    </td>

                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            <Modal show={modelstate}>
               <div className="p-4">
                   <h2>Update Customer</h2>

                   <hr/>
                   <div className="col-12 ">
                       <div className="form-group">
                           <input type="text"
                                  onChange={(e)=>{
                                      setUpdateNic(e.target.value)
                                  }}
                                  defaultValue={updateNic} className="form-control" placeholder={"Nic..."}
                          />
                       </div>
                   </div>
                   <br/>
                   <div className="col-12">
                       <div className="form-group">
                           <input
                               onChange={(e)=>{
                                   setUpdateName(e.target.value)
                               }}
                               type="text" defaultValue={updateName}  className="form-control" placeholder={"name..."}
                                 />
                       </div>
                   </div>
                   <br/>
                   <div className="col-12">
                       <div className="form-group">
                           <input type="text"
                                  onChange={(e)=>{
                                      setUpdateAddress(e.target.value)
                                  }}
                                  defaultValue={updateAddress}  className="form-control" placeholder={"address...."}
                                  />
                       </div>
                   </div>
                   <br/>
                   <div className="col-12">
                       <div className="form-group">
                           <input type="number"
                                  onChange={(e)=>{
                                      setUpdateSalary(e.target.value==''?'':parseFloat(e.target.value))
                                  }}
                                  defaultValue={updateSalary}  className="form-control" placeholder={"salary..."}
                                 />
                       </div>
                   </div>
                        <br/>
                   <div className="col-12">
                      <button type="button" className="btn btn-success col-12" onClick={updateCustomer}>Update customer</button>
                       <br/>
                       <br/>
                      <button type="button" className="btn btn-danger col-12" onClick={()=>{
                          setModelstate(false)
                      }}>Close</button>
                   </div>


               </div>
            </Modal>
        </div>
    )


}

export default Customer;