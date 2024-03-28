import '../apps/App.css';

// props: properties, props를 매개변수로 받는 Card2라는 함수형 컴포넌트를 정의
export default function Card2(props) {  
  return (
    <div className="card">   
      <h1 style={{backgroundColor:"skyblue"}}>{props.person.name}</h1>
      <hr />  
      <img src={`https://picsum.photos/200/200?q=${props.person.id}`} className="photo" />
      <br />
      
      <h3>{props.person.job}</h3>    {/* 사람의 직업정보를 표시 */}
    </div>
  );
}안녕하세요