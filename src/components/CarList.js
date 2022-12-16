import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCar = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCar}
      <hr />
    </div>
  );
};

export default CarList;
