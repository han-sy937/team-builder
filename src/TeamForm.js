import React from 'react'
import FormStyle from './FormStyle'
import Input from './Input'

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target

        update(name, value)

    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <FormStyle className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label htmlFor='nameInput'>Name:&nbsp;
                    <Input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter first and last name'
                        maxLength='40'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label htmlFor='emailInput'>Email:&nbsp;
                    <Input 
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Enter email address'
                        maxLength='40'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onChange}>
                        <option disabled value=''>Select a role</option>
                        <option value='frontend'>Frontend Engineer</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='designer'>UX Designer</option>
                        <option value='data-science'>Data Science</option> 
                        <option value='ios'>iOS Developer</option>
                    </select>
                </label>

                <div className='form-group submit'>
                    <button disabled={ !values.name || !values.email || values.role }>Submit</button>
                </div>
            </div>
        </FormStyle>
    )
}