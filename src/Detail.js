// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { removeBucket, updateBucket } from "./redux/modules/bucket";
const Detail = (props) => {
  const params = useParams();
  const bucket_index = params.index
  const bucket_list = useSelector((state) => state.bucket.list)
  const dispatch = useDispatch()
  const history = useHistory()

  const clickRemoveBucket = () => {
    dispatch(removeBucket(bucket_index))
    history.goBack()
  }
  const clickCompleteBucket = () => {
    dispatch(updateBucket(bucket_index))
    history.goBack()
  }
  console.log(bucket_list[bucket_index]);
  return (
    <>
    <h1>{bucket_list[bucket_index].text}</h1>
    <button onClick={clickCompleteBucket}>완료하기이</button>
    <button onClick={clickRemoveBucket}>삭제하기이</button>
    </>
  );
};

export default Detail;
