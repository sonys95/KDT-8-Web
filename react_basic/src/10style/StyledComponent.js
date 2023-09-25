import styled from "styled-components";

const _Btn = styled.button`
  background-color: ${(props) => props.color};
  padding: 10px 15px;
  border-radius: 4px;
`;

// const _BoxOne = styled.div`
//   background-color: blue;
//   width: 100px;
//   height: 100px;
// `;

// //props를 이용하는 방법
// const _BoxTwo = styled.div`
//   background-color: ${(props) => props.color};
//   width: 100px;
//   height: 100px;
// `;

// //상속받아서 이용하는 방법
// const _CircleOne = styled(_BoxTwo)`
//   /* background-color: ${(props) => props.color};
//   width: 100px;
//   height: 100px; */
//   border-radius: 50px;
// `;

// //기존태그를 이름만 바꿔서 사용하는 방법 => as라는 키워드 사용
// const _Btn = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px 15px;
//   border-radius: 4px;
// `;

// //태그 옵션 넣는 방법
// const _Input = styled.input.attrs({ required: true })``;

// //중첩
// const _BoxThree = styled.div`
//   width: 200px;
//   height: 100px;
//   background-color: aqua;
//   line-height: 100px;
//   text-align: center;

//   p {
//     color: red;
//     font-weight: 900;
//   }
// `;

export default function StyledComponent() {
  return (
    <div>
      <_Btn>색상변경!</_Btn>
      {/* <_BoxOne></_BoxOne>
      <_BoxTwo color="red"></_BoxTwo>
      <_BoxTwo color="yellow"></_BoxTwo>
      <_CircleOne color="yellow"></_CircleOne> */}
      {/* <_Btn as="a" href="https://www.naver.com">
        색상변경!
      </_Btn> */}
      {/* <_Input></_Input> */}
      <div></div>
    </div>
  );
}
