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
      const showMap = document.createElement('div')

      distance.textContent =
        visit.MonitoredVehicleJourney.MonitoredCall.Extensions.Distances.PresentableDistance

      let time = visit.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
      console.log(time)

      arrival.textContent = time

      long = visit.MonitoredVehicleJourney.VehicleLocation.Longitude
      lat = visit.MonitoredVehicleJourney.VehicleLocation.Latitude
      console.log(long)
      console.log(lat)

      line.textContent = visit.MonitoredVehicleJourney.PublishedLineName
      showMap.innerHTML = `<iframe width="300" height="300" style="border:0" loading="lazy" allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBV7ZDW5e0YM3KSa2ZUdN5Q_GRVb75x42Y&center=${lat},${long}&q=${lat},${long}&zoom=16"></iframe>
          </div>`
   

 




      main.appendChild(distance)
      main.appendChild(arrival)
      main.appendChild(line)
      main.appendChild(showMap)

      

    },
  )
}




