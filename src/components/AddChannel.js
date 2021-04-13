import styled from "styled-components";
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from "react";
import { db } from "../firebase";
const AddChannel = ({ changestate }) => {
    const [chan, setChan] = useState("")
    return (
        <AddChannelContainer>

            <h1>Add Channel</h1><br />
            <form action="">
                <input type="text" placeholder="Channel Name" onChange={(e) => { setChan(e.target.value) }} value={chan} /><br />
                <button onClick={(e) => {
                    e.preventDefault()
                    if (chan !== "") {
                        db.collection("rooms").add({
                            name: chan,
                        });
                    } changestate(false)

                }}>Submit</button>
                <CancelIcon onClick={() => {
                    changestate(false)
                }} />

            </form>

        </AddChannelContainer>
    )
}
const AddChannelContainer = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    width:400px !important;
    height:100hv;
    margin-left:-200px;
    margin-top:-200px;
    padding: 100px;
    text-align: center;
    align-items:center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    > form > button {
        cursor: pointer;
        position: relative;
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
        padding: 9px 27px;
        font-size:17px;
        :hover {
            opacity: 0.8;
          }
      }
      > form > input {
        position: relative; 
        width: 98%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
        font-size:20px;
      }
      >h1{
          color:black;
          margin-bottom:20px;
      }
      >form > .MuiSvgIcon-root {
          position:relative;
          top:21px;
          margin-left:60px;
        cursor: pointer;
        color:red;
        font-size:50px;
        :hover {
          opacity: 0.8;
        }
        }

`;

export default AddChannel
