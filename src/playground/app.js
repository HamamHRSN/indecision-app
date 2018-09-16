class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    

    // method build in react for reallife component
    componentDidMount() {

        try {
          
            const json = localStorage.getItem('options');
            // console.log('Fetching Data!');
            const options = JSON.parse(json);
            
            if (options) {
            
                this.setState(() => ({ options }));     // options: options
            }

        } catch (e) {
            // Do nothing at all
        }    
        
    }

    // method build in react for reallife component
    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {
           
            const json = JSON.stringify(this.state.options);
            // console.log('Saveing Data!');
            localStorage.setItem('options', json);

        }

        
    }

     // method build in react for reallife component
     componentWillUnmount() {
        console.log('componentWillUnmount!');
        
    }

    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));  // short for up using () => ({})  because if i use cerlyprecess direct will return empty function () => {}
    }
    
    handleDeleteOption(optionToRemove) {
        // console.log('hdo', option);

        // this.setState((prevState) => ({
        //     options: prevState.options.filter((option) => {
        //         return optionToRemove !== option;
        //     })
        /* Ex. To delete number from array 
        array = [1,2,3,4] 
        array.filter((number) => { return array[0] !== number})
        */ 
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
        
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
   }

   handleAddOption(option){

    if (!option) {
        return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
    } 
        this.setState((prevState) => ( {options: prevState.options.concat(option)}));
       
   }
    render() {

        /*const title = "Indecision App";*/
        const subtitle = 'Put your live in the hand of a computer!...';
        return (
            <div>
                <Header /*title={title}*/  subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}   /*Delete All*/
                    handleDeleteOption={this.handleDeleteOption}  /*Delete one specific*/
                    />
                <Addoptions
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
          return (
              <div>
                  <h1>{props.title}</h1>
                  {props.subtitle && <h2>{props.subtitle}</h2>}
              </div>
          );
}

Header.defaultProps =  {
       title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
              <button
               onClick={props.handlePick}
               disabled={!props.hasOptions}
               >
              What should I do?
              </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {/*this.props.options.length*/}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an options to get started!</p>}
            {props.options.map((option) => (
                <Option 
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    );
}
const Option = (props) => {
        return (
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                >Remove</button>
            </div>
        );
}

class Addoptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        
        const error = this.props.handleAddOption(option);

        this.setState(() => ( { error } ));

        if (!error) {
            e.target.elements.option.value = '';   
        }
    }
    render() {
        return (
            <div>
               {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                     <input type="text" name="option" />
                     <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp /*options={['MyFirst-Item', 'MySecond-Item', 'MyThird-Item']}*/ />, document.getElementById('app'));


