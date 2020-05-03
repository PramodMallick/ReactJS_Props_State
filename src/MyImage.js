import  React , {Component} from 'react';
import './MyImage.css';
import 'tachyons';

class OneAvatar extends Component{

    constructor()
    {
        super();
        this.imgClicked_onClick = this.imgClicked_onClick.bind(this)
        
    }

    imgClicked_onClick()
    {
        console.log('image clicked')
    }

    render(){

        return(
            <div className="AvatarStyleClassName tc ma4 pa1 bg-light-purple dib grow pa3 shadow-4">
                
                <img src = {`https://joeschmoe.io/api/v1/${this.props.name}`}
                alt={this.props.name} onClick={this.imgClicked_onClick} />

                <h1>{this.props.name}</h1>
                
                <p>{this.props.work}</p>

            </div>
        )

    }  
}

export default OneAvatar