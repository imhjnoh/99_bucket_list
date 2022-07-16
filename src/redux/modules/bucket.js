// bucket.js
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";

const initialState = {
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
    { text: "코딩하기", completed: false },
  ],
};


// Action Creators
export function loadBucket(bucket_list) {
    console.log("action: loadBucket", bucket_list);
    return { type: LOAD, bucket_list };
  }

export function createBucket(bucket) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, bucket: { text: bucket, completed: false } };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

export function removeBucket(bucket_index) {
  console.log("지울 버킷 인덱스", bucket_index);
  return { type: DELETE, bucket_index };
}

// middlewares
export const loadBucketFB = () => {
    return async function(dispatch) {
        const bucket_data = await getDocs(collection(db, "buckets"));
        let bucket_list = [];
        bucket_data.forEach((x) => {
            bucket_list.push({...x.data})
        })
        console.log("loadFB: ", bucket_list);
        dispatch(loadBucket(bucket_list))
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
        return {list: action.bucket_list}
    }
    case "bucket/CREATE": {
      console.log("이제 값을 바꿀거야!");
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case "bucket/UPDATE": {
      const new_bucket_list = [...state.list];
      new_bucket_list[action.bucket_index]["completed"] = true;
      //   console.log({ list: new_bucket_list });
      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });

      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
