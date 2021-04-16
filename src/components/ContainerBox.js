import styled from "styled-components"

const BoxContainer = styled.div`
    flex: 0.4;
    margin:50px;
    display: flex;
    font-size: 20px;
    align-items: center;
    padding-left: 14px;
    min-height:82px;
    max-height:82px;
    border-radius:40px;
    object-fit:contain;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    :hover {
      opacity: 0.9;
    //   background-color: #3b444b;
    }
    >img{
        background:#111;    
        padding:1px;
        object-fit:contain;
        width: 82px;
        height:82px !important;
        margin:3px;
        border-radius:50%;
        cursor: pointer;
        :hover {
            opacity: 0.8;
        }
        margin-right:28px;
    }
    >button{
        
    }
`;

const ContainerBox = ({ name, imgurl }) => {
    return (
        <div>
            <BoxContainer>
                <img src={imgurl} alt="" />
                <h3>{name}</h3>
                <button>Remove</button>
            </BoxContainer>
        </div>
    )
}

export default ContainerBox
