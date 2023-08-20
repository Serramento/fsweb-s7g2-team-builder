import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'

function App() {

  const [teamList, setTeamList] =useState([]);
  const [oldMember, setOldMember] =useState(null);

  const addMember= (newMember) => {
    newMember.id = new Date();
    setTeamList([...teamList, newMember]);
  };

  const editMember=(formData) => {
    const updatedTeamList= teamList.map((item) => {
      if(item.id === oldMember.id){
        formData.id = oldMember.id
        return formData; 
      }else{
        return item;
      }
    })
    setTeamList(updatedTeamList);
    setOldMember(null);
  };

  const handleEditClick= (member) => {
    setOldMember(member);
  };

  return (
    <div className="App">
      <div className='container'>
        <h2>Team List</h2>
        <div className='teamList'>
         {teamList.map((member) => (
            <div key= {member.id} className='teamList-row'>
              {member.isim} 
              <button onClick={()=> handleEditClick(member)}>
                Düzenle
                </button>
            </div>
         ))}
        </div>

      </div>
      <Form editMember= {editMember} addMember = {addMember} oldMember={oldMember}/>
    </div>
  );
}

export default App;
