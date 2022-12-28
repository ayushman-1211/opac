
import Dir from "../dir/dir.component";

const Agent = () =>{
    const agents = [
        {
         name:"jett",
         id:'1',
         imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/Valorant-characters-Jett-900x506.jpg'
        },
        {
          name:"Fade",
          id:'2',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/valorant-characters-fade-900x506.jpg '
         },
         {
          name:"Neon",
          id:'3',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/valorant-characters-neon-900x506.jpg'
         },
         {
          name:"Chamber ",
          id:'4',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/valorant-characters-chamber-900x506.jpg'
         },
         {
          name:"Skye",
          id:'5',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/valorant-characters-skye-900x506.jpg'
         },
         {
          name:"Yoru",
          id:'6',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2021/01/Valorant_Yoru-900x506.jpg'
         },
         {
          name:"Astra",
          id:'7',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/valorant-characters-astra-900x506.jpg'
         },
         {
          name:"KAY/O",
          id:'8',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2021/06/kayo-valorant-900x507.jpg'
         },
         {
          name:"Phoenix",
          id:'9',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/valorant-characters-phoenix-900x506.jpg'
         },
         {
          name:"Raze",
          id:'10',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/valorant-characters-raze-900x506.jpg'
         },
         {
          name:"Brimstone",
          id:'11',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/Valorant-characters-brimstone-900x506.jpg'
         },
         {
          name:"Sage",
          id:'12',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/valorant-characters-sage-900x506.jpg'
         },
         {
          name:"Cypher",
          id:'13',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/valorant-characters-cypher-900x506.jpg'
         },
         {
          name:"Viper",
          id:'14',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/valorant-characters-viper-900x506.jpg'
         },
         {
          name:"Breach",
          id:'15',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/valorant-characters-braech-900x506.jpg'
         },
         {
          name:"Sova",
          id:'16',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2022/01/Valorant-characters-Sova-900x506.jpg'
         },
         {
          name:"Omen",
          id:'17',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/valorant-characters-omen-900x506.jpg'
         },
         {
          name:"Reyna",
          id:'18',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/05/valorant-next-agent-reyna-sabine-900x506.jpeg'
         },
         {
          name:"Killjoy",
          id:'19',
          imageUrl:'https://www.pcgamesn.com/wp-content/uploads/2020/07/Valorant_Killjoy-900x506.jpg'
         },
      ]


      return (
        <div>
      <Dir itr={agents}/>
        </div>
      );
}

export default Agent;