let userLimit = 5;
let competitionId = 19521;
let teamName = "Phonk Fiends";

window.addEventListener('onEventReceived', function (obj) {
    refreshContainer();
});

window.addEventListener('onWidgetLoad', function (obj) {
    
    const fieldData = obj.detail.fieldData;
    userLimit = fieldData.userLimit;
    competitionId = fieldData.competitionId;
    teamName = fieldData.teamName;
    
  	$(".main-container h1").html(teamName + " Top " + userLimit + ":");
  
    refreshContainer();
  
});


function refreshContainer() {
    fetch(`http://localhost:5000/competition/{competitionId}`)
    .then(result=>result.json())
    .then(result => {
        console.log(result);
        $(".items").html('');
        let totalUsers = 0; 
        
        
        let team = result.data.teams[teamName];
        let members = team["members"];
        
        for (let i = 0; i < members.length; i++) {
            let member = members[i];
            let username = member["username"];
            let hours = member["xp_gained"].toFixed(2);
            totalUsers++;
            if (totalUsers > userLimit) {
                return;
            }
            $(".items").append(`
                <tr class="team-row">
                	<td class="rank">${totalUsers}</td> 
					<td class="username">${username}</td>
					<td class="hours">${hours}</td>
                </tr>`);
        }
    })
    .catch(reason=>{ console.log(reason);});
}
