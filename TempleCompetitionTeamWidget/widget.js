let teamLimit = 5;
let competitionId = 19521;

window.addEventListener('onEventReceived', function (obj) {
    refreshContainer();
});

window.addEventListener('onWidgetLoad', function (obj) {
    
    const fieldData = obj.detail.fieldData;
    teamLimit = fieldData.teamLimit;
    competitionId = fieldData.competitionId;

    refreshContainer();
  
});


function refreshContainer() {
    fetch(`http://localhost:5000/competition/{competitionId}`)
    .then(result=>result.json())
    .then(result => {
        console.log(result);
        $(".items").html('');
        let totalTeams = 0; 
        $(".main-container h1").html(result.data.info.name);
        for (element in result.data.teams){
          		let team = result.data.teams[element];
          		let team_gain = team["team_gain"].toFixed(2);
                totalTeams++;
                if (totalTeams > teamLimit) {
                    return;
                }
          $(".items").append(`
                <tr class="team-row">
                	<td class="rank">${totalTeams}</td> 
					<td class="username">${element}</td>
					<td class="hours">${team_gain}</td>
                </tr>`);
            }
    })
    .catch(reason=>{ console.log(reason);});
}
