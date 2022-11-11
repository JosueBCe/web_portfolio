//https://www.freecodecamp.org/learn/front-end-development-libraries/react/write-a-simple-counter

// 1) Create the class (that is also a component)
class Counter extends React.Component {
    constructor(props) {
      super(props);
  
  // 2) Give it a attribute of count = 0
      this.state = {
        count: 0
      };
  // The methods that we created for doing something, add them in the Object (class)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
   }
  // This method (function) will set count again to 0
    reset() {
      this.setState({
        count: 0
      });
    }
  // This method (function) will add 1 to the count
  
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }
  
  // This method (function) will minus 1 to the count
  
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
  
  // All this stuff, send to the HTML (WHAT WILL BE RENDER)
    render() {
      return (
  // THE HTML 
        // EVENT LISTENETS "onClick"
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
  
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          
          <button className='reset' onClick={this.reset}>Reset</button>
          {/* TAKE THE VALUE OF COUNT FROM THE STATE */}  
          <h1>Current Count: {this.state.count}</h1>
        
        </div>
      );
    }
  };

