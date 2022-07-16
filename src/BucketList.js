// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BucketList = (props) => {
  let history = useHistory();
  console.log(props);
  const data = useSelector((state) => state.bucket.list);
  console.log(data);
  // const my_lists = props.list;

  return (
    <ListStyle>
      {data.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            onClick={() => {
              history.push("/detail/" + index);
            }}
            done = {list.completed}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${(props) => props.done ? "#673ab7" : "aliceblue"};
  color: ${(props) => props.done ? "white" : "black"};
`;

export default BucketList;
