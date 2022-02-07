import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import { FaTimes } from 'react-icons/fa'
import { IModel } from "../../../type/models/Car"
import moment from 'moment';

function CarDetailCard({ car, handleClick }: any) {
    console.log(car)

    const formatDate = (date: string) => {
        return date !== '' ? moment(date).format("DD/MM/YYYY") : 'No Availability';
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {car.make}
                        <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={(e) => handleClick()}>
                            <FaTimes style={{ marginTop: '-5px' }} />
                        </button>

                    </div>
                </CardHeader>
                <CardBody>
                    {car.models.map((model: IModel, index: number) => {
                        return (
                            <Card className="mt-2" body key={index}>
                                <CardTitle>
                                    {model.model}
                                </CardTitle>
                                <CardBody>
                                    <div>
                                        <label htmlFor=""><strong>Price : </strong></label>
                                        <span>{model.price}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="date"><strong>Availability date : </strong></label>
                                        <span>{formatDate(model.dateAvailability)}</span>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })}
                </CardBody>
            </Card>
        </div>
    )


}

export default CarDetailCard