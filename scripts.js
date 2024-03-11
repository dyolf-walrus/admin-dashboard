let projects = [
    {
        title: "Super Cool Project",
        descrip: 'man & girl go out to drive under moonlight. they stop at on at a side of road. he turn to his girl and say: "baby, i love you very much"'
    },
    {
        title: "Less Cool Project",
        descrip: '"what is it honey?" "our car is broken down. i think the engine is broken, ill walk and get some more fuel."'
    },
    {
        title: "Impossible App",
        descrip: '"ok. ill stay here and look after our stereo. there have been news report of steres being stolen." "good idea. keep the doors locked no matter what. i love you sweaty"'
    },
    {
        title: "Easy Peasy App",
        descrip: "so the guy left to get full for the car. after two hours the girl say 'where is my baby, he was supposed to be back by now'."
    },
    {
        title: "Ad Blocker",
        descrip: "then the girl here a scratching sound and a voice say 'LET ME IN'. the girl doesn't do it and then after a while she goes to sleep. "
    },
    {
        title: "Money Maker",
        descrip: "the next morning she wakes up and finds her boyfriend still not there. she gets out to check and man door hand hook car door."
    }
]

let projectTilesContent = '';

for (const card of projects) {
    projectTilesContent = projectTilesContent + 
    `<div class="card">
    <div class="colorbar"></div>
    <div class="projectdescrip"><p>${card.title}</p>
    <br>${card.descrip}
    </div>
    <div class="cardimages"><img src="images/star-plus-outline.svg"><img src="images/eye-plus-outline.svg"><img src="images/source-fork.svg">
    </div>
    </div>`
};

const projectTiles = document.getElementById("projecttiles");
projectTiles.setHTML(projectTilesContent);