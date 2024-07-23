
let msg = "geeks";
let ans = "";
for(let i=0;i<msg.length;i++)
{
   let c = msg.charCodeAt(i)+2;
   
   ans+=String.fromCharCode(c);
}
console.log(ans);