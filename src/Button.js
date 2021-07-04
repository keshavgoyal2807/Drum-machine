const React = require("react");

class Button extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            activeState:'drum-pad-initial drum-pad'
          }
    }
    afterClick = ()=>{
        this.setState({
            activeState:'drum-pad-initial drum-pad'
        })
    }
    handleClick = ()=>{
        if(this.props.power)
        {
            const sound = document.getElementById(this.props.details.keyTrigger)
            console.log(sound)
            sound.currentTime = 0;
            sound.play();
            this.props.changeDisplay(this.props.details.id)
        }
        else{
            this.props.changeDisplay("On the Machine");
        }
        this.setState({
          activeState:'drum-pad-click drum-pad'
        })
        setTimeout(this.afterClick,100)
    }
    handleKeyPress = (e)=>{
        if(e.keyCode === this.props.details.keyCode)
        {
            this.handleClick();
        }
    }
    componentDidMount(){
        document.addEventListener('keydown',this.handleKeyPress)
    }
    render(){
        return(
            <div className={this.state.activeState} onClick={this.handleClick} id={this.props.details.id}>
                <audio src={this.props.details.url} id={this.props.text} className="clip"/>
                <p>{this.props.text}</p>
            </div>
        )
    }

}

export default Button