import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import sharingan from './sharingan.png';
import jougan from './jougan.png';
import sannin from './sannin.png';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';



function Cards() {
    const [data, setData] = useState([])
    const [state, setState] = useState(true)
    const [counter, setCounter ] = useState(5)
    const [isDisabled, setIsDisabled] =useState(false)

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
        
    }, [])
        

    const handleIncrement = () => {
        if (counter >= 10) {
          setCounter(10);
          document.getElementById("plus").disabled = true;
        } else {
          setCounter(counter + 1);
          if (counter > 0) {
            document.getElementById("minus").disabled = false;
          }
        }
      };
      
      const handleDecrement = () => {
        if (counter <= 0) {
          setCounter(0);
          document.getElementById("minus").disabled = true;
        } else {
          setCounter(counter - 1);
          if (counter < 10) {
            document.getElementById("plus").disabled = false;
          }
        }
      };
      
     
    return (
        <>
        {/* <button >SSSSSSSSSSSSSSSSSSSSSSSSSSs</button> */}
        <button id="plus" onClick={handleIncrement}>+</button>
        <a>{counter}</a>
        <button id="minus" onClick={handleDecrement}>-</button>

            <Carousel data-bs-theme="dark">
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
            </Carousel>



        </>
    );

}

export default Cards;