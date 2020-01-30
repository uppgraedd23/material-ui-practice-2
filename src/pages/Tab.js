import React, {useState, Fragment} from 'react';
import {connect} from "react-redux"
import Box from '@material-ui/core/Box';
import {itemDeletor, newItemCreator} from "../redux/priceReducer";

import Appform from "../components/Form";
import List from "../components/List";

const Tab = (props) => {

    const onAdd = (form) => {
            props.newItemCreator(form)
    }
    const onDelete = (names) => {
        props.itemDeletor(names)
    }

    return (<Fragment>
            <Box component="section" m={10}>
                <Appform onAdd={onAdd}/>
                <br/>
                <List onDelete={onDelete}/>
            </Box>
        </Fragment>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        newItemCreator: (form) => {
            dispatch(newItemCreator(form))
        },
        itemDeletor: (names) => {
            dispatch(itemDeletor(names))
        }
    }
}


export default connect(null, mapDispatchToProps)(Tab)
