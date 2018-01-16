function ListItem(props){
    return <li>{props.item}</li>
    
    
}

function ShoppingTitle(props){
     return (
            <div>
                <h1>{props.title}</h1>
                <h4>Total Number of Items is : {props.numItems}</h4>
            </div>

        ) 
    
    
}

 function ShoppingList(props){
        return (
            <div>
                <h3>{props.header}</h3>
                <ol>
                    <ListItem item = {props.items[0]}/>
                    <ListItem item = {props.items[1]}/>
                    <ListItem item = {props.items[2]}/>
                </ol>
            </div>
        )
    
}

   function ShoppingApp(props){

        return (
            <div>
                <ShoppingTitle title = "Welcome to React Transportation" subtitle = "The best place to  buy vehicle online"/>
                <ShoppingList header = "Cars" items = {["Apple","Bread","Chesse"]}/>
                <ShoppingList header = "Trucks" items = {["Shirt","Pants","Hat"]}/>
                <ShoppingList header = "Convertibles" items ={["Pen", "Paper", "Glue"]}/>
            </div>
        )
    }

   ReactDOM.render(
        <ShoppingApp/>,
        document.getElementById("root")
    )
