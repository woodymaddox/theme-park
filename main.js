// XHR - XmlHttpRequest

function executeThisCodeAfterFileLoads(){
console.log('yay');
}
function executeThisCodeifXHRFails() {
    console.log('OhShit');

}
const getRidesData = () => {
    const  myRequest = new  XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error',executeThisCodeifXHRFails);
    myRequest.open('GET', './db/rides.json')
    Console.log(myRequest);


};



const init = () => {
    getRidesData();



};

init();