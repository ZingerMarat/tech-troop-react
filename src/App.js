import "./styles.css";

//exercise 1
// App = () => {
//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 },
//   ];

//   const showCompany = (name, revenue) => {
//     return (
//       <div id={name}>
//         {name} makes {revenue} every year
//       </div>
//     );
//   };

//   return (
//     <div className="ex-space">
//       <h4 className="ex-title">Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map((comp) => showCompany(comp.name, comp.revenue))}
//       </div>
//     </div>
//   );
// };

//exercise 2
const App = () => {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (15 <= temperature && temperature <= 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {<div id="weatherBox" class={getClassName(19)}></div>}
      </div>
    </div>
  );
};

export default App;
