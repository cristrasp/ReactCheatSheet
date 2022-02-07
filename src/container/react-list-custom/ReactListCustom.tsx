import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import mock_data from './../../mock/mock_list.json';
import List from "./components/List";


function ReactListCustom() {


    return (
        <div>
            <h2>React List Custom </h2>

            <List dataList={mock_data} />
        </div>
    )
}

export default ReactListCustom