class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
    
    handleChange=(event)=>{
   this.setState({
     input:event.target.value
   })
    }
    submitMessage=(event)=>{
      this.setState({
        input:'',
        messages:[... this.state.messages,event.target.value]
      })
    }
    render() {
      return (
        <div>
  
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
  <input value={this.state.input} onChange={this.handleChange}></input>
  <button onClick={this.submitMessage} value={this.state.input}>Submit</button>
  <ul>{this.state.messages.map(i=><li>{i}</li>)}</ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };