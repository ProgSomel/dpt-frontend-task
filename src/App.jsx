import axios from "axios";
import { useState } from "react";

function App() {
  const [flights, setFlights] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("data.json");
      setFlights(response.data.flightOffer);
      console.log(flights[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Form Upper Part  */}
      <div>
        <h1 className="max-w-6xl mx-auto mt-1 font-bold text-xl">
          Master Price
        </h1>

        <hr />
        {/*! Trip Type Section  */}
        <div className="flex justify-center mt-3 mb-4 max-w-6xl mx-auto border-b py-5 border-blue-400 font-bold text-xl">
          <button className="border px-2 font-bold border-black text-xs">
            Round Trip
          </button>
          <button className="border px-2 font-bold border-black bg-blue-900 text-white text-xs ">
            One Way
          </button>
          <button className="border px-2 font-bold border-black text-xs ">
            Multi City
          </button>
        </div>

        {/* Trip Details Selection Section  */}
        <div className="max-w-6xl mx-auto mt-1 flex  gap-5 border-b py-5 border-blue-400">
          <div className="flex gap-4">
            <button className="border pl-1 pr-16 border-black py-1">LHR</button>
            <button className="border pl-1 pr-16 border-black py-1 bg-blue-100">
              CDG
            </button>
          </div>
          {/* date  */}
          <input
            className="border  border-black px-2 bg-blue-100"
            type="date"
            defaultValue="2024-05-09"
          />

          {/* day select Option  */}
          <select className="border pl-1 pr-5 border-black py-1">
            <option value="Day-">Day- </option>
          </select>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              Day+{" "}
            </option>
          </select>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              Anytime{" "}
            </option>
          </select>
          <p>+</p>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              ADT{" "}
            </option>
          </select>
          <select className="border pl-1 pr-5 border-black py-1">
            <option selected value="Day-">
              1{" "}
            </option>
          </select>
          <p>+</p>
        </div>

        {/* Serach button area  */}
        <div className="flex justify-between items-center max-w-6xl mx-auto border-b py-5 border-blue-400">
          {/* 1st part  */}
          <div className="flex gap-1 items-center font-bold text-xs">
            <input type="checkbox" value="" />
            <p>Extra Option</p>
          </div>
          {/* second part  */}
          <div className="flex gap-1 items-center font-bold text-xs">
            <h1>Environment</h1>
            <input checked type="radio" id="option1" name="options" value="option1" />
            <label>Dummy</label>
            <br />

            <input type="radio" id="option2" name="options" value="option2" />
            <label>PDT</label>
            <br />
          </div>

          {/* search Button  */}
          <div className="">
            <button
              onClick={handleSearch}
              className="btn bg-blue-950 rounded-sm px-3 text-xs font-bold text-white py-2"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Form Section  */}

      <div className=" overflow-auto max-w-6xl mx-auto my-8">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-200">
            <tr className="">
              <th className="">FLIGHT</th>
              <th>AIRCRAFT</th>
              <th>CLASS</th>
              <th>FARE</th>
              <th>ROUTE</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
              <th></th>
              <th>DURATION</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {flights?.map((flight, idx) => (
              <tr className={"border-b-2 border-red-500 "+(idx%2!==0&&"bg-gray-200")  } key={idx}>

                <td>
                  {flight?.itineraries?.map((itinerary) =>
                    itinerary?.segments?.map((segment, idx) => (
                      <tr key={idx}>
                        <span>
                          {segment?.marketingCarrier}
                          {segment?.aircraft}
                        </span>
                      </tr>
                    ))
                  )}
                </td>
                <td>
                  {flight?.itineraries?.map((itinerary) =>
                    itinerary?.segments?.map((segment, idx) => (
                      <tr key={idx}>
                        <span className="">{segment?.flightNumber}</span>
                      </tr>
                    ))
                  )}
                </td>

                <td>
                  {flight?.class?.map((cls) =>
                    cls?.map((cl, idx) => <p key={idx}>{cl}</p>)
                  )}
                </td>

                <td>
                  {flight?.fareBasis?.map((fare) =>
                    fare?.map((fr, idx) => <p key={idx}>{fr}</p>)
                  )}
                </td>

                <td>
                  {flight?.itineraries?.map((itinerary) =>
                    itinerary?.segments?.map((segment, idx) => (
                      <tr key={idx}>
                        <span>
                          {segment?.departure?.iataCode}-
                          {segment?.arrival?.iataCode}
                        </span>
                      </tr>
                    ))
                  )}
                </td>
                <td>
                  {flight?.itineraries?.map((itinerary) =>
                    itinerary?.segments?.map((segment, idx) => (
                      <tr key={idx}>
                        <span>{segment?.departure?.at}</span>
                      </tr>
                    ))
                  )}
                </td>
                <td>
                  {flight?.itineraries?.map((itinerary) =>
                    itinerary?.segments?.map((segment, idx) => (
                      <tr key={idx}>
                        <span>{segment?.arrival?.at}</span>
                      </tr>
                    ))
                  )}
                </td>
                <td className=""><span> =</span></td>
                <td>
                  {flight?.itineraries?.map((itinerary) => (
                    <tr key={idx}>
                      <span>{itinerary?.duration}</span>
                    </tr>
                  ))}
                </td>

                <td>
                  <div className="flex flex-col justify-center items-center">
                    {flight?.price}
                    <button className="btn btn-xs bg-blue-950 rounded-sm px-3 text-xs font-bold text-white py-1">
                      SELECT
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
