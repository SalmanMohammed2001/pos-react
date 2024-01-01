
import axios from "axios";
import {Modal} from "react-bootstrap";
import {ChangeEvent, useEffect, useState} from "react";

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
    const [image,setImage]=useState("")

    //const [updateImage,setUpdateImage]=useState<File | null>(null)

    const [modelState, setModelState] = useState<boolean>(false)


    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [unitePrice,setUnitePrice]=useState<number|''>('')
    const [qtyOnHand,setQtyOnHand]=useState<number | ''>('')


    const [selectedUpdateId,setSelectedUpdateId]=useState('')
    const [updateName,setUpdateName]=useState('')
    const [updateDescription,setUpdateDescription]=useState('')
    const [updateUnitePrice,setUpdateUnitePrice]=useState<number | ''>('')
    const [updateqtyOnHand,setUpdateQtyOnHand]=useState<number | ''>('')




   const handleImage=(e:ChangeEvent<HTMLInputElement>)=> {
       if (e.target.files && e.target.files[0]) {
           setImage(e.target.files[0])
       }
   }
    useEffect(()=>{
        findAllProduct()
    },[])


   const updateProduct = async () => {
        console.log(selectedUpdateId, updateName, updateqtyOnHand, updateUnitePrice,updateDescription)
        /*try {
            const response = await axios.put('http://localhost:3000/api/v1/customers/update/'+selectedCustomerId, {
                nic:updateNic, address:updateAddress, name:updateName, salary:updateSalary
            });
            console.log(response)
            findAllCustomer()
            setModelstate(false)


        } catch (e) {
            console.log(e)
        }*/

    }

    const findAllProduct=async ()=>{
        const response= await  axios.get('http://localhost:3000/api/v1/products/find-all?searchText=&page=1&size=10')
         console.log(response.data)
        setProducts(response.data)

    }

   const deleteProduct= async (id:string)=>{
        if(confirm('are you delete product'))
        console.log(id)
        const response=await  axios.delete('http://localhost:3000/api/v1/products/delete-by-id/'+id,)
        findAllProduct()
        console.log(response)
    }

    const loadModel= async (id:string)=>{
        const response= await axios.get('http://localhost:3000/api/v1/products/find-by-id/'+id)
      setSelectedUpdateId(response.data._id)
        setUpdateName(response.data.name)
        setUpdateQtyOnHand(parseFloat(response.data.qtyOnHand))
        setUpdateUnitePrice(response.data.unitePrice)
        setUpdateDescription(response.data.description)
        setModelState(true)
    }
    console.log(selectedUpdateId,updateName,updateDescription,updateUnitePrice,updateqtyOnHand)


    const saveProduct= async ()=>{
        const imageurl='https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/overtime-group-plp.png'
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

          const formData=  new FormData();
          formData.append('name',name);
          formData.append('description',description);
          formData.append('image',image);
          formData.append('unitePrice',unitePrice);
          formData.append('qtyOnHand',qtyOnHand);

            const response = await axios.post('http://localhost:3000/api/v1/products/create', formData);
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
                            <input type="number" className="form-control" id='qty' value={qtyOnHand}
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
                                            <button className='btn btn-outline-danger btn-sm' onClick={()=> deleteProduct(data._id)}>Delete</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-outline-success btn-sm' onClick={()=>{
                                                loadModel(data._id)
                                            }}>Update</button>
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

            <Modal show={modelState}>
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>Update Product</h2>
                        </div>
                        <div className={"col-12"}>
                            <div className="form-group">
                                <input type="text" className={"form-control"} defaultValue={updateName} onChange={(e)=>{
                                    setUpdateName(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className={"col-12"}>
                            <div className="form-group">
                                <input type="text" className={"form-control"} defaultValue={updateUnitePrice} onChange={(e)=>{
                                    setUpdateUnitePrice(parseFloat(e.target.value))
                                }}/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className={"col-12"}>
                            <div className="form-group">
                                <input type="text" className={"form-control"} defaultValue={updateqtyOnHand} onChange={(e)=>{
                                    setUpdateQtyOnHand(parseFloat(e.target.value))
                                }}/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className={"col-12"}>
                            <div className="form-group">
                                <textarea  cols={6} className={"form-control"} defaultValue={updateDescription} onChange={(e)=>{
                                    setUpdateDescription(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className={"col-12 mb-3"}>
                            <button className={"btn btn-success col-12"} onClick={updateProduct}>Update</button>
                            <br/>
                            <br/>
                            <button className={"btn btn-danger col-12"} onClick={()=>{
                                setModelState(false)
                            }}>Close</button>
                        </div>
                    </div>
                </div>

            </Modal>

        </div>
    )
}

export default Product;