import Fligths from '../../public/ficticiousFlights.json'


interface FlightSearchData {
    city1: string,
    city2: string,
    departureDate?: string,
    returnDate?: string
}

export default function useFlightSearch(searchData:FlightSearchData) {
    
    const FlightsArray = Fligths.flights

    if(searchData.returnDate){
        //API Call with all Data
    } else if (searchData.departureDate) {
        //API Call without a return trip
    }

    
    return FlightsArray.filter((flight) => {
      return (
        flight.origin == searchData.city1 &&
        flight.destination == searchData.city2
      )
    })
}