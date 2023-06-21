        //等待从server来的数据。。
        getData();
        async function getData(){
        const response = await fetch('/api');
        const data = await response.json();



        for (item of data){
            const root = document.createElement('div');

            const mood = document.createElement('div');
            mood.textContent = `mood: ${item.mood}`;

            const date = document.createElement('div');
            //convert all theses millisecond to the actual date
            const dateString = new Date(item.timestamp).toLocaleString();
            date.textContent = dateString;

            const geo = document.createElement('div');
            geo.textContent = `${item.lat},${item.lon}`;

            const image = document.createElement('img');
            image.src = item.image64;
            image.alt = 'Dan Shiffman making silly faces.';

            //append all the things we just get to root and display
            root.append(mood, date, geo, image);
            document.body.append(root)
        }

        console.log(data);
        
        }