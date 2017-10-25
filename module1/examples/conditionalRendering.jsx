    function Feature(props){
        if (props.active == true){
            return <h1>This feature is active</h1>
        }
        else{
            return <h1>This feature is not active</h1>
        }

    }
/*
function Feature(props){
        return <h1>This feature is {props.active? "active" : "not active"}</h1>
    }
    
    function Feature(props){
        if(props.active!){
            return null
        }
        else{
            return <h1>{props.message}</h1>
        }
    }
    
    function Feature(props){
        return (
            props.active && <h1>{props.message}</h1>
        )
    }
  */  
   
    ReactDOM.render(
        <Feature active = {true} />,
        document.getElementById("root")
        
        
    )