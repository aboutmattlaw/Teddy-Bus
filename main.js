function getBus(stopcode) {
  fetch(
    `https://warm-harbor-67209.herokuapp.com/https://bustime.mta.info/api/siri/stop-monitoring.json?key=cb9d18ca-68e1-43d3-9f36-d49533819a07&OperatorRef=MTA&MonitoringRef=${stopcode}`,
  )
    .then((response) => response.json())
    .then((data) => showBus(data))
}

function showBus(json) {
  const main = document.querySelector('main')
  main.innerHTML = ""

  json.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.map(
    (visit) => {
      const distance = document.createElement('h2')
      const arrival = document.createElement('h2')

      distance.textContent =
        visit.MonitoredVehicleJourney.MonitoredCall.Extensions.Distances.PresentableDistance

      var time = visit.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
      // var newTime = Date(time)

      arrival.textContent = time


      main.appendChild(distance)
      main.appendChild(arrival)

    },
  )
}

// document.addEventListener('DOMContentLoaded', function () {
//   getBus()
// })
