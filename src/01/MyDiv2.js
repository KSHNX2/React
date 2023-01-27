
const MyDiv2=() =>{
  const myName='고승환';
  const myGit="https://github.com/KSHNX2";

  return (
    <div>
        <p>{myName}</p>
        <p>GitHub : <a href={myGit}> {myGit}</a></p>
    </div>  
  );
}

export default MyDiv2;
