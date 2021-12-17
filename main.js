function getBus() {
  fetch(
    'https://warm-harbor-67209.herokuapp.com/https://bustime.mta.info/api/siri/stop-monitoring.json?key=cb9d18ca-68e1-43d3-9f36-d49533819a07&OperatorRef=MTA&MonitoringRef=308209&LineRef=MTA%20NYCT_B63',
  )
    .then((response) => response.json())
    .then((data) => showBus(data))
}

function showBus(json) {
  const main = document.querySelector('main')
  json.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.map(
    (visit) => {
      const distance = document.createElement('h2')
      const arrival = document.createElement('h2')

      
      distance.innerHTML =
        visit.MonitoredVehicleJourney.MonitoredCall.Extensions.Distances.PresentableDistance 
      
        arrival.innerHTML =
        visit.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime

         
                  
        

        main.appendChild(distance)
        main.appendChild(arrival)

      
    },
  )
}

document.addEventListener('DOMContentLoaded', function () {
  getBus()
})
