import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table"

class App extends Component{

    state = { selectedFile: null }


fileChangedHandler = event => {
  this.setState({ selectedFile: event.target.files[0] })
}

  uploadHandler = () => {
        const formData = new FormData()
  formData.append(
    'myFile',
    this.state.selectedFile,
    this.state.selectedFile.name
  )

}


  render() {

  return (
      <html lang="en" className="style1">
    <div className="App">
      <div className= "logo">
      <img src={logo} alt="Logo" />;
      </div>
      <ul className ="des">
      <li className ="active"><a href=""> UPLOAD CV </a> </li>
      <li><a href=""> PREVIEW CV </a> </li>
      <li><a href=""> ABOUT US </a> </li>
      </ul>
      </div>


      <div className="hero">
      <h1> Are You Excited For Joining Us? </h1>
      <h2> Applay Now </h2>

            <body className="bodydesign1">

         <form action="/action_page.php">

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First name: <br/>
  <input type="text" name="firstname"/><br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Major:<br/>
  <input type="text" name="Major" /><br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;University:<br/>
  <input type="text" name="University" /><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last name:<br/>
  <input type="text" name="lastname" /><br/><br/>

<input type="file" onChange={this.fileChangedHandler}/>
<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.uploadHandler}>Upload!</button>

</form>

<hr/>
       <h3>Preview the uploaded CV's</h3>
<hr/>
        <h3>About us</h3>
        <div class="our-container">
         <div>
           <p> Khalda Alhrbi </p>
           <p> group leader</p>
         </div>
         <div>
           <p> Manal Almehmadi </p>
           <p> member in the group</p>
         </div>
         <div>
           <p> Arwa Ahmadi</p>
           <p> member in the group</p>
        </div>
        </div>
  </body>
  <Form
      onSubmit={submission =>
        this.setState({
        data: [...this.state.data, submission]

      })}
      />
      <Table
      data={this.state.data}
      header={[
        {
      name:  "Frist name",
      prop: "fristName"
    },
      {
        name: "Last name",
        prop:"LastName"
      },
      {
        name:  "University",
        prop:"university"
        },
        {
          name: "Major",
          prop:"major"
         },
         {
          name:  "CV",
          prop:"cv"
          },
          ]}
          />
      </div>
     </html>
  );
}
}



export default App;
