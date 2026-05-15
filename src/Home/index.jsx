import './style.css'
import Trash from '../assets/trash-2.svg'

function Home (){

  const users = [{
    id: '01258756',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com'
  },
  {
    id: '01258757',
    name: 'Aline',
    age: 28,
    email: 'aline@email.com'
  },
  {
    id: '01258758',
    name: 'Paulo',
    age: 68,
    email: 'paulo@email.com'
  },
  ]
  
  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='Nome' type='text'/>
        <input placeholder="Idade" name='Idade' type='number'/>
        <input placeholder="E-mail" name='Email' type='email'/>
        <button type='button'>Cadastrar</button>
      </form>
      {users.map((user)=>(
        <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span> </p>
          <p>Idade: <span>{user.age}</span>  </p>
          <p>Email: <span>{user.email}</span> </p>
        </div>
        <button>
          <img src={Trash}/>
        </button>
      </div>
      )
      )}
      
    </div>
  )
  
}

export default Home
