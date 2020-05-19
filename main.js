// Restore IP Addresses


// Given a string containing only digits, restore it by returning all possible valid IP address combinations.
// A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

// Examples
// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]

// Input: "010010"
// Output: ["0.10.0.10", "0.100.1.0"]

function restoreIpAddresses(number){
  let ipList=[];
let l = number.length - 3;
for(let a = 0; a < l && a<=3; a++) {
    for(let b = 0; b < l-a && b<=3; b++){
        for(let c = 0; c <l-a-b && c<=3; c++){
            let ip = number;
            ip=insert(ip,a+1,".");
            ip=insert(ip,a+b+3,".");
            ip=insert(ip,a+b+c+5,".");
            ipList.push(ip);
        }
    }
}
return ipList.filter((e)=>ipIsValid(e));
}
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
function ipIsValid(ipAddress){
 let test=ipAddress.split('.');
 return test.every(checkChunk);
}
function checkChunk(chunk){
  return parseInt(chunk)>=0 && parseInt(chunk)<=255? (chunk[0]==='0'? chunk.length===1:true):false;
 }

 console.log(restoreIpAddresses("25525511135"));
 console.log(restoreIpAddresses("010010"));


 console.log(restoreIpAddresses("25525511135"));
 console.log(restoreIpAddresses("010010"));