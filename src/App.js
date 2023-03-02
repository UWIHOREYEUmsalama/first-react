
import './App.css';
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      user: [],
      company: "Solvit",
      searchs:" ",
      emen:"",
      stateString:"" 

    };
  }
  componentDidMount() {
   
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(responce => responce.json())
      .then((data => {
        console.log(data);
        this.setState({ isLoading: false, user: data })
      }))

  }

  render() {
    
    if (this.state.isLoading) {
      return <p > Is Loading.......</p>
    }
   else{
  
    return (
      <div>

      {/* <input type="text" onChange={(e)=> {console.log(e.target.value);} }></input> */}
      <input type="text" onChange={(e)=> {this.setState({stateString :e.target.value}) } }></input>
       <div className='week'>
        {/* <h1 >{this.state.stateString} </h1> */}
          {/* {this.state.user.map(data => { 
             return <p key={data.id}>{data.title}</p> })} */}
             {this.state.user.filter((sir)=> {
              return sir.title.includes(this.state.stateString)
             } ).map(data => { 
              return (
              <div className='book'>
                <p key={data.id}>{data.title}</p> 
               
              </div>);
            })}
            </div>
      </div>
    );
}

  }
}


export default App;
