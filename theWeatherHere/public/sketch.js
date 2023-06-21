function setup(){
  let lat, lon;

  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    const mood = document.getElementById('mood').value;
    const data = { lat, lon, mood };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    //不用await response就是不对的
    // fetch("/api", options).then(response=>{
    //     console.log(response)
    // })

    //fetch到node 然后在后端得到了数据在写好response
    const response = await fetch('/api', options);

     //response到了！！在把response到console里面
    const json = await response.json();
    console.log(json);
  });


    if ('geolocation' in navigator){
        console.log("geolocation is available");

        //make it ansync to make the wait for the response back from the server..
        navigator.geolocation.getCurrentPosition(async function(position){
            console.log(position);
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            document.getElementById("lat").textContent = lat;
            document.getElementById("lon").textContent = lon;
        })
    }else{
        console.log("oppsyyy...geolocation is not available")
    }
}

