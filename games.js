const imgcontainer = document.getElementById("imgcontainer")
const bannercontainer = document.getElementById("bannercontainer")
const gets = async () =>{
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
    const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    var a = Math.floor(Math.random() * result.length);
    // <div id="bannerimg">
    // <img src="${result[Object.keys(result)[a]].thumbnail}" id="imgbanner" alt="Awesomeness Loading...">
    bannercontainer.innerHTML = `
    <div id="bannerimg" style="background-image: url(${result[Object.keys(result)[a]].thumbnail});">
    <div id="info">
    <h1>${result[Object.keys(result)[a]].title}</h1>
    <h4>Genre : ${result[Object.keys(result)[a]].genre}&emsp;Platform : ${result[Object.keys(result)[a]].platform}</h4>
    <p>${result[Object.keys(result)[a]].short_description}</p>
    <div id ="btns">
    <button id="play">Play</button>
    <button id="sys">System Requirements</button>
    </div>
    </div>
</div>`;

    imgcontainer.innerHTML = `
    <h2>Games</h2>
    <div id="imgs">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
            <img src="${result[Object.keys(result)[Math.floor(Math.random() * result.length)]].thumbnail}" id="img1">
        </div>`;
}
gets()


const actioncontainer = document.getElementById("actioncontainer")
const gets2 = async () =>{
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=action`;
    const response = await fetch(url, options);
	const result1 = await response.json();
	// console.log(result1);
    actioncontainer.innerHTML = `
    <h2>Action Games</h2>
    <div id="imgs">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
        <img src="${result1[Object.keys(result1)[Math.floor(Math.random() * result1.length)]].thumbnail}" id="img1">
    </div>
`;
}
gets2()


const racingcontainer = document.getElementById("racingcontainer")
const gets3 = async () =>{
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing`;
    const response = await fetch(url, options);
	const result2 = await response.json();
	// console.log(result2);
    racingcontainer.innerHTML = `
    <h2>Racing Games</h2>
    <div id="imgs">
        <img src="${result2[Object.keys(result2)[Math.floor(Math.random() * result2.length)]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[0]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[8]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[9]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[7]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[6]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[5]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[4]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[3]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[2]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[1]].thumbnail}" id="img1">
        <img src="${result2[Object.keys(result2)[10]].thumbnail}" id="img1">
    </div>
`;
}
gets3()


const horrorcontainer = document.getElementById("horrorcontainer")
const gets4 = async () =>{
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror`;
    const response = await fetch(url, options);
	const result3 = await response.json();
	// console.log(result3);
    horrorcontainer.innerHTML = `
    <h2>Horror Games</h2>
    <div id="imgs">
        <img src="${result3[Object.keys(result3)[Math.floor(Math.random() * result3.length)]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[6]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[5]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[4]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[3]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[2]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[1]].thumbnail}" id="img1">
        <img src="${result3[Object.keys(result3)[0]].thumbnail}" id="img1">
    </div>
`;
}
gets4()


const zombiecontainer = document.getElementById("zombiecontainer")
const gets5 = async () =>{
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=zombie`;
    const response = await fetch(url, options);
	const result4 = await response.json();
	// console.log(result4);
    zombiecontainer.innerHTML = `
    <h2>Zombie Games</h2>
    <div id="imgs">
        <img src="${result4[Object.keys(result4)[Math.floor(Math.random() * result4.length)]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[0]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[1]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[2]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[3]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[4]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[5]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[6]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[7]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[8]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[9]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[10]].thumbnail}" id="img1">
        <img src="${result4[Object.keys(result4)[11]].thumbnail}" id="img1">
    </div>
`;
}
gets5()

const gets6 = async () =>{
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
    const response = await fetch(url, options);
	const result5 = await response.json();
	console.log(result5);
//     zombiecontainer.innerHTML = `
//     <h2>Zombie Games</h2>
//     <div id="imgs">
//         <img src="${result4[Object.keys(result4)[Math.floor(Math.random() * result4.length)]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[0]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[1]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[2]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[3]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[4]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[5]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[6]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[7]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[8]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[9]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[10]].thumbnail}" id="img1">
//         <img src="${result4[Object.keys(result4)[11]].thumbnail}" id="img1">
//     </div>
// `;
}
gets6()