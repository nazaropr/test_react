import React, {FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface IFormProps {
    username: string;
    password: string;
}

const App = () => {
  let [formSate, setFormSate] = useState<IFormProps>({
      username: '',
      password: ''
  })

    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        let input = e.currentTarget;
        // console.log(input.value);
        setFormSate({...formSate, [input.name]: input.value});
    };

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formSate.username,
            password: formSate.password,
        }
        console.log(user)
    }

    return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" name={'username'} value={formSate.username} onChange={handleChange}/>
              <input type="text" name={'password'} value={formSate.password} onChange={handleChange}/>
              <button>submit</button>
          </form>
      </div>
  );
};

export default App;