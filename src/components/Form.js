import React, {useState} from 'react'
import TextField from 'material-ui/TextField';
import {FlatButton} from "material-ui";
import FormControl from "@material-ui/core/FormControl";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";

export default function Form(props) {

    const [state, setState] = useState({
        firstName: '', lastName: '', phone: '', gender: true, radioValue: 'men', age: '', errors: {
            firstName: '',
            lastName: '',
            phone: '',
            gender: '',
            age: ''
        }})

    const onAdd = () => {
        let errors = {}
        if (!state.firstName) errors.firstName = 'First name can`t be empty'
        if (!state.lastName) errors.lastName = 'Last name can`t be empty'
        if (!state.phone) errors.phone = 'Phone can`t be empty'
        if (!state.radioValue) errors.gender = 'Gender can`t be empty'
        if (state.age && !/^[0-9]+$/i.test(state.age)) {
            errors.age = 'Invalid age number'
        }
        if (!state.age) errors.age = 'Age can`t be empty'


        if (errors.firstName || errors.lastName || errors.phone || errors.gender || errors.age) {
            setState({...state, errors})
            return
        }
        props.onAdd({
            firstName: state.firstName,
            lastName: state.lastName,
            phone: state.phone,
            gender: state.gender,
            age: state.age
        })
        setState({
                firstName: '',
                lastName: '',
                phone: '',
                gender: '',
                radioValue: '',
                age: '',
                errors: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    gender: '',
                    age: ''
                }
            }
        )
    }

    return (
        <div>
            <TextField
                value={state.firstName}
                hintText="First Name"
                type="string"
                floatingLabelText="First Name"
                fullWidth={true}
                errorText={state.errors.firstName}
                onChange={(event, firstName) => setState({...state,firstName})}
            />
            <TextField
                value={state.lastName}
                hintText="Last Name"
                type="string"
                floatingLabelText="Last Name"
                fullWidth={true}
                errorText={state.errors.lastName}
                onChange={(event, lastName) => setState({...state,lastName})}

            />
            <TextField
                value={state.phone}
                hintText="Phone"
                floatingLabelText="Phone"
                fullWidth={true}
                errorText={state.errors.phone}
                onChange={(event, phone) => setState({...state, phone})}
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={state.radioValue}
                            onChange={(event, gender) => {
                                setState({...state, gender: gender === 'men', radioValue: gender})
                            }}>

                    <FormControlLabel value='men' control={<Radio checked={state.radioValue === 'men'}/>}
                                      label="Male"/>
                    <FormControlLabel value='women' control={<Radio checked={state.radioValue === 'women'}/>}
                                      label="Female"/>
                </RadioGroup>
            </FormControl>
            <TextField
                value={state.age}
                hintText="Age"
                floatingLabelText="Age"
                fullWidth={true}
                errorText={state.errors.age}
                onChange={(event, age) => setState({...state,age})}

            />
            <FlatButton label="add" secondary={true}
                        onClick={onAdd.bind(this)}
            />
        </div>
    )
}


