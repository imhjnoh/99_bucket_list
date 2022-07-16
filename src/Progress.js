import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list)
    const donecnt = bucket_list.reduce((acc, x) => x.completed ? acc + 1 : acc,0)
    const percentage = (donecnt / bucket_list.length) * 100
    console.log(percentage)
  return (
    <ProgressBar>
      <HighLight width={percentage}>
        
      </HighLight>
      <Dot></Dot>
      {/* <Circle/> */}
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eeeeee;
  width: 100% auto;
  height: 20px;
  border-radius: 40px;
  display: flex;
  align-items: center;
`;
const HighLight = styled.div`
  background: #673ab7;
  width: ${(props) => props.width+"%"};
  max-width: calc(100% - 20px);
  min-width: 20px;
  height: 20px;
  /* display: inline-block; */
  border-radius: 40px;
  transition: all ease .5s;
`;
const Circle = styled.div`
width: 40px;
height: 40px;
border-radius: 40px;
background-color: #673ab7;
box-shadow: 0 0 0 5px #fff inset; 
display: inline-block;
margin-left: -20px;
`
const Dot = styled.div`
width: 40px;
height: 40px;
background-color: #fff;
border: 5px solid #673ab7;
border-radius: 40px;
margin-left: -20px;
`

export default Progress;
