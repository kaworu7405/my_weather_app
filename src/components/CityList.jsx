function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;
  return (
    <div>
      <h1> CityList </h1>
      <dl className="styleForCityList">
        {cities.map((item, index) => {
          return <dl key={index}>{index+1}. {item}</dl>;
        })}
      </dl>
    </div>
  );
}
export default CityList;