$(document).ready(function(){ //These are list of arrays (24) repreesenting the colors for each hour of the day
    const color = [ '#1a1521',
                    '#866584',
                    '#E9626E',
                    '#e38586',
                    '#ffae93',
                    '#efe440',
                    '#d5e06f',
                    '#d5e06f',
                    '#93d6e4',
                    '#93d6e4',
                    '#48aae8',
                    '#0382eb',
                    '#48aae8',
                    '#fbdd4b',
                    '#fca053',
                    '#c66516',
                    '#D96344',
                    '#E9626C',
                    '#E9626C',
                    '#74465b',
                    '#313651',
                    '#0c2d4c',
                    '#1E1E20',
                    '#1a1521'];
    
    //Get the current day and extract the hour
    const date = new Date(); //0-23 represetning the current hour
    let hours = date.getHours();
    //Gradient colors based on the current hour
    document.documentElement.style.setProperty('--start', color[hours]);
    document.documentElement.style.setProperty('--f_color', color[hours]);
    document.documentElement.style.setProperty('--end', color[(hours+1) % 24]);
    document.documentElement.style.setProperty('--s_color', color[(hours+1) % 24]);
    //Event listener for CSS itteration 
    document.addEventListener('animationiteration',function(e){

        if(e.animationName === 'moveBg'){
            hours++; //Increment the hours
            hours = hours % 24; //Ensure the hours stay within  the range
            //Update with new colors for the next hour 
            document.documentElement.style.setProperty('--start', color[hours]);
            document.documentElement.style.setProperty('--f_color', color[hours]);
            document.documentElement.style.setProperty('--end', color[(hours+1) % 24]);
            document.documentElement.style.setProperty('--s_color', color[(hours+1) % 24]);
            //Log the current hour
            //Log the next hour
            //Log the name of the animation
            console.log(hours);
            console.log(hours+1);
            console.log(e.animationName);
        }
    });
})