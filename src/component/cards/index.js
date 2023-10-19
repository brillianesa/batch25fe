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
    const [isPlusDisabled, setIsPlusDisabled] =useState(false)
    const [isMinusDisabled, setIsMinusDisabled] =useState(false)

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
        setIsPlusDisabled(counter >= 10)
        setIsMinusDisabled(counter <= 0)
    }, [counter])
        

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
      
     
    return (
        <>
        {/* <button >SSSSSSSSSSSSSSSSSSSSSSSSSSs</button> */}
        <button id="plus" onClick={handleIncrement} disabled={isPlusDisabled}>+</button>
        <a>{counter}</a>
        <button id="minus" onClick={handleDecrement} disabled={isMinusDisabled}>-</button>

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