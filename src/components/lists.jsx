// import style from "./Netflix.module.css"
// import styled from "styled-components"
// export const SeriesCard =(props) => {
//   console.log(props);
//   // eslint-disable-next-line react/prop-types
//   const {image_url, name , rating , description , genre , cast , watch_url } = props.data;
  
// // const btn_style = {
  
// //     padding: "1rem 1.3rem",
// //     fontSize: "15px",
// //     border: "none",
// //     backgroundColor: `${rating >= 8.7 ? "#7dcea0": "#f7dc6f"}`,
// //     color: "white",
// //     cursor: "pointer",
// //     borderRadius: "5px",
// // } ;

// //  css styled component
// const Buttonstyle = styled.button ({
//   padding: "1rem 1.3rem",
//   fontSize: "15px",
//   border: "none",
//   backgroundColor: `${rating >= 8.7 ? "#7dcea0": "#f7dc6f"}`,
//   color: "white",
//   cursor: "pointer",
//   borderRadius: "5px",
// })
// const ratingClass = rating >= 8.7 ? style["super-hit"]: style.avarage;

//     return (
//         <li className={style["list-items"]}>
//         <div>
//           <img src={image_url} alt={name} width="100%" height="200px"/>
//         </div>
//           <h2 style={{fontSize:"2rem"}}>Name : {name}</h2>
//           <h2 style={{fontSize:"1.5rem"}}> Rating : <span className={`${style.rating} ${ratingClass}`}>    {rating}</span></h2>
//           <p className="underline underline-offset-4" style={{fontSize:"1.2rem"}}>Summary : {description}</p>
//           <h2 style={{fontSize:"1.3rem"}}>Genre : {genre}</h2>
//           <h2 style={{fontSize:"1rem"}}>Cast : {cast}</h2>
//           <a href={watch_url} target="blank"><Buttonstyle >watch now</Buttonstyle></a>
         
//         </li>
 
//     )
// }