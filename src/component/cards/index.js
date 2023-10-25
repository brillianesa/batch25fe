import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import sharingan from './sharingan.png';
import jougan from './jougan.png';
import sannin from './sannin.png';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementBy, decrementBy } from '../../features/counterSlice';



function Cards() {
    const [data, setData] = useState([])
    const [add, setAdd] = useState(0)
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    const [ dataLogin, setDataLogin ] = useState({
        username: '',
        password: ''
    })
    const [state, setState] = useState(true)
    const [counter, setCounter ] = useState(5)
    const [isPlusDisabled, setIsPlusDisabled] =useState(false)
    const [isMinusDisabled, setIsMinusDisabled] =useState(false)
    const [email, setEmail] = useState("")
    const [ role, setRole]= useState("")
    const [fullname, setFullname]=useState("")
    const [ starWars, setStarWars ] =useState([{}])
    const [ currentPage, setCurrentPage ] = useState(1)
    // const [ name, setName ] = useState("")
    // const [ height, setHeight] = useState("")
    // const [ mass, setMass ] = useState("")

    useEffect(()=>{
      fetchData(currentPage)
    },[currentPage])

    const fetchData = (page) =>{
      axios({
        method: "GET",
        url: 'https://swapi.dev/api/people/?page='+page,
        headers: {
          'Content-Type': 'application/json',
      }
      }).then((response) =>{
        console.log(response.data.results)
        setStarWars(response.data.results)
        
      }).catch((error)=>{
        console.log(error)
      })
    }

    const nextPage = () =>{
      setCurrentPage(currentPage+1)
    }

    const prevPage = () =>{
      if(currentPage>1){
        setCurrentPage(currentPage-1)
      }
      
    }

    
    useEffect(()=>{
        setData([
            {
                src: sharingan,
                alt: "First slide"
            },
            {
                src: jougan,
                alt: "Second slide"
            },
            {
                src: sannin,
                alt: "Three slide"
            }
        ])
    }, [])

    useEffect(() =>{
        setIsPlusDisabled(count >= 10)
        setIsMinusDisabled(count <= 0)
    }, [count])
        

    const handleIncrement = () => {
        if (counter < 10) {
          setCounter(counter+1)
        }
      };
      
      const handleDecrement = () => {
        if (counter > 0) {
          setCounter(counter-1)
        }
      };

      const handleChange = (e)=> {
        const {name , value} = e.target;
        setDataLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
      }
      const handleAdd = (e)=> {
        const {angka , value} = e.target;
        setAdd(prevState => ({
            ...prevState,
            angka: parseInt(value)
        }))
      }

      const handleSubmit = () => {
        let object= {
            email: dataLogin.username,
            password: dataLogin.password
        }
        console.log(object)
        axios({
            method: "POST",
            url: "http://localhost:8088/account/authenticate",
            data: object,
            headers: {
                'ContentType': "application/json"
            }
        }).then((response) =>{
            console.log(response.data.token)
            var token = response.data.token
            var decoded = jwt_decode(token)
            console.log(decoded)
            setEmail(decoded.sub)
            setFullname(decoded.fullname)
            setRole(decoded.role)
            localStorage.setItem('fullname', decoded.fullname);
            localStorage.setItem('email', decoded.sub);
            localStorage.setItem('role', decoded.role);
            console.log(localStorage)

        }).catch((error) => {
            console.log(error)
        })
      }
      
      
     
    return (
        <>
        {/* <div>
            <input name="username" type='text' value={dataLogin.username} onChange={handleChange}></input>
            <input name="password" type='password' value={dataLogin.password} onChange={handleChange}></input>
            <button name='submit' onClick={handleSubmit}>Submit</button>
        </div> */}
        {/* <button >SSSSSSSSSSSSSSSSSSSSSSSSSSs</button> */}
        {/* <button id="plus" onClick={() => dispatch(increment())} disabled={isPlusDisabled}>+</button>
        <a>{count}</a> */}
        {/* <button id="minus" onClick={()=> dispatch(decrement())} disabled={isMinusDisabled}>-</button> */}
        {/* <input type='number' id="add"></input> */}
        {/* <input type='number' id="add" onChange={handleAdd}></input> */}
        {/* <input type='number' id="add" onChange={(e)=> (e.target.value)}></input> */}
        {/* <button onClick={()=> dispatch(incrementBy(parseInt(document.getElementById("add").value)))}>Add</button>
        <button onClick={()=> dispatch(decrementBy(add.angka))}>Minus</button> */}

        <table className="table">
            <thead>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Action</th>
                

            </thead>
            <tbody>
                {starWars.map(x => {
                    return (
                        <tr key={x.index}>
                          <td>{x.name}</td>
                            <td>{x.height}</td>
                            <td>{x.mass}</td>
                            <td><button style={{height: "30px", width: "100px"}} class="btn btn-outline-primary btn-sm">Edit</button> <button style={{height: "30px", width: "100px"}} class="btn btn-outline-danger btn-sm">Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button style={{height: "30px", width: "100px"}} class="btn btn-outline-success btn-sm" onClick={nextPage}>Next</button>
        <button style={{height: "30px", width: "100px"}} class="btn btn-outline-success btn-sm" onClick={prevPage}>Previous</button>
        

            {/* <Carousel data-bs-theme="dark">
                {
                    data.map(x => {
                        return (
                            <Carousel.Item>
                                <img 
                                    className="d-block w-100"
                                    src={x.src}
                                    alt={x.alt}
                                    height={"100%"}
                                    width={"10%"}
                                    
                                />
                                <Carousel.Caption>
                                    <h5>{x.alt}</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })

                }
            </Carousel> */}



        </>
    );

}

export default Cards;