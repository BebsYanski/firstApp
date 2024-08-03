import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {

  const [name, setName] = useState('');
  const [currentData, setCurrentData] = useState(data);


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!name) return;

    const newData = {id: currentData.length+1, name: name};
    setCurrentData([...currentData, newData]);
    console.log(currentData);

    setName('');
  }

  const deleteUser = (id)=>{
    const newUsers = currentData.filter((data)=>
      data.id !== id
    );

    console.log(id,newUsers);

    setCurrentData(newUsers);
  }


  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name}
          onChange={(e)=>setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {
        currentData.map((data) => {
          const {id, name} = data;
          return (
            <div key={data.id} className='' style={{display: "flex", justifyContent:"center", gap: 20}}>
              <h4>{data.name}</h4>
              <button className="btn" onClick={()=>deleteUser(id)} style={{marginTop: 10}}>Del</button>
            </div>
          )
        })
      }
     
    </div>
  );
};
export default UserChallenge;
