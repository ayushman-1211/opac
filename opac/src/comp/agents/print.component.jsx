const Print = ({props}) => {
   const {name, imageUrl} = props;
    return(
 

<div  className="category-container">
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
     <div className="category-body-container">
<h1>{name}</h1>
     </div>
</div>

    );
}

export default Print;