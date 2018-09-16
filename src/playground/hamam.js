class Licence extends React.Component {
    constructor(props){
        super(props);
        this.handleLicence = this.handleLicence.bind(this);
        this.state = {
            licences: ['hamam', 'Salma']
        }
    }

    handleLicence(e){
        e.preventDefault();
        const licence = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';


    }

    handleAddLicence(licence){
        if (!licence) {
            return 'Enter valid value to add item';
        } else if (this.state.licences.indexOf(licence) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => {
            return {
                licences: prevState.licences.concat(licence)
            }
       });
           
       }
    render(){
        return (
            <div>
                <form onSubmit={this.handleLicence}>
                     <h1>Licence</h1>
                     <p>{this.handleAddLicence}</p>
                     <input type="text" name="licence" />
                     <button>Send</button>
                </form>
            </div>
        );
    };
}; 

ReactDOM.render(<Licence />, document.getElementById('app'));