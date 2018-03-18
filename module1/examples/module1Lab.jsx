function Cars(props){


  return(
  <div>
  <Subtitle type= "Cars"/>
  <Structure index= "3" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  <Structure index= "3" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  <Structure index= "3" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  </div>
  )
}

function Trucks(props){
  return(
        <div>
  <Structure index= "3" type= "Cars" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  <Structure index= "3" type= "Cars" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  <Structure index= "3" type= "Cars" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  </div>)
}
function Convertibles(props){
  return(
       <div>
  <Structure index= "3" type= "Cars" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  <Structure index= "3" type= "Cars" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  <Structure index= "3" type= "Cars" year= {["2013","2011","2016"]} model= {["A","B","B"]} price= {["$32","$4.4","15.5"]}/>
  </div>)
}

function Subtitle(props){
    return(
        <h2>{props.type}</h2>
        )
}


function Structure(props){
  
      return( 
<div>      
  
      <table className = "table table-bordered" >
   <tr>
    <th>Year</th>
    <th>Model</th>
    <th>Price</th>
    <th>Buy</th>
  </tr>
  
  <tr>
    <td>{props.year[0]}</td>
    <td>{props.model[0]}</td>
    <td>{props.price[0]}</td>
    <td><button>Buy now</button></td>
  </tr>
  
  </table>
         
    </div>
)
       }


ReactDOM.render(
    <div>
<Cars/>
<Convertibles/>
<Trucks/>
</div>,
  document.getElementById("root")

)