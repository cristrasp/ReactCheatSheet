import React, { useEffect, useState } from "react";
import { Card, CardBody, UncontrolledCollapse, ListGroup, ListGroupItem, Row, Col, Button, Collapse } from "reactstrap";
import SearchBoxCustom from "../../../components/searchbox/SearchBoxCustom";
import { ICar } from "../../../type/models/Car";
import CarDetailCard from "./CarDetailCard";


function List(props: any) {
    const { dataList } = props;
    const [searchCar, setSearchCar] = useState('');
    const [carsData, setCarsData] = useState([]);
    const [collapse, setCollapse] = useState([false]);
    const [car, setCar] = useState(null);

    useEffect(() => {
        setCarsData(dataList);
    }, [])

    const toggleCollapse = (index: number) => {
        let collapseCopy = [...collapse];
        collapseCopy[index] = !collapseCopy[index];
        setCollapse(collapseCopy);
        setCar(null);
    }



    const showDetails = (idCar: number) => {
        if (carsData) {
            let carDetails = carsData.filter((el: ICar) => el.id === idCar);
            setCar(carDetails[0]);
        }
    }

    const handleClick = () => {
        setCar(null);
    }

    const updateInput = async (input: string) => {
        if (input === '') {
            setSearchCar('');
            setCarsData(dataList);
        } else {
            const filtered = carsData.filter((car: ICar) => {
                return car.make.toLowerCase().includes(input.toLowerCase())
            })
            setSearchCar(input);
            setCarsData(filtered);
        }
    }




    return (
        <div>
            <Row style={{ padding: '10px' }}>
                <Col md={{ offset: 3, size: 6 }}>
                    <SearchBoxCustom keyword={searchCar} setKeyword={updateInput} />
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <ListGroup>
                        {carsData.map((item: ICar, index: number) => {
                            return (
                                <ListGroupItem key={index} >
                                    <div onClick={() => toggleCollapse(index)} style={{ cursor: 'pointer' }}>
                                        {item.make}
                                    </div>
                                    <Collapse isOpen={collapse[index]}>
                                        <Card >
                                            <CardBody >
                                                <Row>
                                                    <Col sm='7'>
                                                        <img src={item.image} alt="img" height={150} width={250} />
                                                    </Col>

                                                    <Col sm='5'>
                                                        <div>
                                                            <strong>Type</strong>  : {item.type}
                                                        </div>
                                                        <Button className="mt-4" color="primary" onClick={(e) => showDetails(item.id)}>
                                                            Show {item.type} {item.make} cars
                                                        </Button>
                                                    </Col>
                                                </Row>

                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </ListGroupItem>
                            )
                        })}

                    </ListGroup>
                </Col>
                <Col md='4'>
                    {car ? <CarDetailCard car={car} handleClick={handleClick} /> : null}
                </Col>
            </Row>

        </div >
    )
}

export default List