function getBus(stopcode) {
  fetch(
    `https://warm-harbor-67209.herokuapp.com/https://bustime.mta.info/api/siri/stop-monitoring.json?key=cb9d18ca-68e1-43d3-9f36-d49533819a07&OperatorRef=MTA&MonitoringRef=${stopcode}`,
  )
    .then((response) => response.json())
    .then((data) => showBus(data))
}

function showBus(json) {
  const main = document.querySelector('main')

  main.innerHTML = ''

  json.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.map(
    (visit) => {
      const distance = document.createElement('h1')
      const arrival = document.createElement('h2')
      const line = document.createElement('h3')
      // let long = document.createElement('h3')
      // let lat = document.createElement('h3')
      const showMap = document.createElement('button')

      distance.textContent =
        visit.MonitoredVehicleJourney.MonitoredCall.Extensions.Distances.PresentableDistance

      let time = visit.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
      console.log(time)

      arrival.textContent = time

      line.textContent = visit.MonitoredVehicleJourney.PublishedLineName
      showMap.textContent = "show map"
   

      long = visit.MonitoredVehicleJourney.VehicleLocation.Longitude
      lat = visit.MonitoredVehicleJourney.VehicleLocation.Longitude
      console.log(long)
      console.log(lat)


      main.appendChild(distance)
      main.appendChild(arrival)
      main.appendChild(line)
      main.appendChild(showMap)
    },
  )
}

