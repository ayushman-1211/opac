import Print from "../agents/print.component";

const Dir = ({itr}) =>{
    return(
        <div className="categories-container">   
        {itr.map((props)=>(
            <Print key={props.id} props={props}/>
        )
               
               
               )}
             </div>
    );
}

export default Dir;