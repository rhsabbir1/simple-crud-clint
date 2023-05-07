import './App.css'

function App() {


  const handleAddUser = event => {
    event.preventDefault()
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;

    const user = { name, email }
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('Data added successfully')
          from.reset()
        }
      })
    console.log(user)
  }


  return (
    <>

      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Name' />
        <br />
        <input type="email" name="email" id="" placeholder='Email' />
        <br />
        <input type="submit" value="Add User" />
      </form>

    </>
  )
}

export default App
