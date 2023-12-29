import React, {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";

// import {storage} from '../config/firebase.tsx';


interface Product{
    _id:string
    name:string,
    description:string,
    image:string,
    unitePrice:number,
    qtyOnHand:number
}



const Product:React.FC=()=>{

    const [products,setProducts]=useState<Product[]>([])
    const [image,setImage]=useState<File | null>(null)


    const [modelstate, setModelstate] = useState<boolean>(false)


    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [unitePrice,setUnitePrice]=useState<number | ''>('')
    const [qtyOnHand,setQtyOnHand]=useState<number | ''>('')


    const handleImage=(e:ChangeEvent<HTMLInputElement>)=> {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    useEffect(()=>{
        findAllProduct()
    },[])


/*    const updateProduct = async () => {
        console.log(selectedCustomerId, updateNic, updateAddress, updateName,updateSalary)
        try {
            const response = await axios.put('http://localhost:3000/api/v1/customers/update/'+selectedCustomerId, {
                nic:updateNic, address:updateAddress, name:updateName, salary:updateSalary
            });
            console.log(response)
            findAllCustomer()
            setModelstate(false)


        } catch (e) {
            console.log(e)
        }

    }*/

    const findAllProduct=async ()=>{
        const response= await  axios.get('http://localhost:3000/api/v1/products/find-all?searchText=&page=1&size=10')
         console.log(response.data)
        setProducts(response.data)

    }

  /*  const deleteProduct= async (id:string)=>{
        console.log(id)
        const response=await  axios.delete('http://localhost:3000/api/v1/customers/delete-by-id',{params:{id}})
        findAllCustomer()
        console.log(response)
    }
*/
   /* const loadModel= async (id:string)=>{
        const response= await axios.get('http://localhost:3000/api/v1/customers/find-by-id/'+id)
        console.log(response.data)
        setSelectedCustomerId(response.data._id)
        setUpdateNic(response.data.nic)
        setUpdateName(response.data.name)
        setUpdateAddress(response.data.address)
        setUpdateSalary(parseFloat(response.data.salary))
        setModelstate(true)
    }

*/

    const saveProduct= async ()=>{
        const imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LgIPwB4gjYlOy5_YtiC7GSU5VJQVBgwG2w&usqp=CAU'
        console.log(image)
       /* if(image){
            const ref=ref(storage,`images/${Math.random()+'_'+image.name}`)
            ref.put(image).then(()=>{
                ref.getDownloadURL().then((url)=>{
                    console.log(url)
                })
            })
        }*/
        try{

            const response = await axios.post('http://localhost:3000/api/v1/products/create', {
                 name, description,image:imageurl,unitePrice,qtyOnHand
            });
            console.log(response)
            findAllProduct()

            setName('')
            setDescription('')
            setQtyOnHand('')
            setUnitePrice('')


        }catch (e){
            console.log(e)
        }
    }









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
                            <input value={name} type="text" className="form-control" id='productName'
                                   onChange={(e)=>{
                               setName( e.target.value)
                            }}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">UnitePrice</label>
                            <input type="number" className="form-control" id='price' value={unitePrice}
                            onChange={(e=>{
                                setUnitePrice(parseFloat(e.target.value))
                            })}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">qty On Hand</label>
                            <input type="text" className="form-control" id='qty' value={qtyOnHand}
                            onChange={(e)=>{
                                setQtyOnHand(parseFloat(e.target.value))
                            }}/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" className="form-control" id='image'
                            onChange={handleImage}/>
                        </div>
                    </div>
                    <div className="col-12" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea rows={5} className="form-control" id='description' value={description}
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }}/>
                        </div>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={saveProduct}>Save Product</button>
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
                            {
                                products.map((data,index)=>{
                                    return  <tr key={data._id}>
                                        <td>{index+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.qtyOnHand}</td>
                                        <td>{data.unitePrice}</td>
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
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;