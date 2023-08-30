// // http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=xml&by=position&lat=40.689247&lng=-74.044502
// 
//Compete  actual URL                             :<-----------------query parameters-------------->
//https://timezone.abstractapi.com/v1/current_time/?api_key=1673042e42ac4d49b73a94e6f9e29db7&location=NY,%20US

let final,time

const queryparas =
{
  api_key:"1673042e42ac4d49b73a94e6f9e29db7",
  location:"IN"
}
let url = new URL("https://timezone.abstractapi.com/v1/current_time/")
for(k in queryparas){
                                              // api_key=1673042e42ac4d49b73a94e6f9e29db7&location=NY,%20US
    url.searchParams.append(k,queryparas[k]) // is appended  

}
fetch(url)
.then(response => response.json())
.then(response => {
      console.log(response)
    } )
.catch(err => console.error(err));

    // final=response
    // time=final.datetime
    // console.log(time)
    // console.log(time.substring(11,19))
    // console.log(typeof(time)) 