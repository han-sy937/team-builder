import styled from 'styled-components';

const FormStyle = styled.form`
    
    width: 50%;
    margin: 2% auto;
    height: 50vh;
    
    .form-group{
        display: flex;
        flex-direction: column;
        // align-items: flex-start;

        // border: 1px solid red;
        height: 30vh;

        label{
            
            margin: 1%;
            height: 5vh;
            padding: 3%;
            font-size: 1.6rem;
            
            // input{
            //     // border: 1px solid red;
            //     width: 50%;
            //     height: 4vh;
            //     padding-left 2%;
            //     border: none;
            //     background-color: white;
            // }

            select{
                border: 1px solid white;
                width: 50%;
                height: 4vh;
                padding-left: 2%;
                padding-right: 2%
                background-color: white;
            }
        }

        button{
            width: 20%;
            height: 5vh;
            margin: 0 auto;
            background: black;
            color: white;
        }
    }



`

export default FormStyle;

