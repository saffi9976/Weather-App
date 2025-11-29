
let getPlaylist = `<h3>Paste your playlist link here:</h3>
            <div class="playlist">
                <input type="text" placeholder="Playlist Name" id="name">
                <input type="text" id="playlist" name="playlist" placeholder="Paste your playlist">
            </div>
            <div class="submit">
                
                <input type="submit" value="Fetch Playlist" id="fetch">
            </div>`;
            
$(document).ready(()=>{
    function fetch(){
        $("#fetch").on('click', function(){
            let playlistID = (document.getElementById("playlist").value).split("/")[4].split("?")[0];
            let playlistName = document.getElementById("name").value;
            localStorage.setItem(playlistName,playlistID);
            let storage = JSON.parse(localStorage.getItem("storage"));
            storage.push(playlistName);
            localStorage.setItem("storage",JSON.stringify(storage));
            playlistID = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${playlistID}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            structure.innerHTML=playlistID;
            structure.innerHTML += `<input type="submit" value="Add Playlist" id="add"></input>`;
            structure.innerHTML += `<input type="submit" value="List Playlist" id="list"></input>`;
            add();
            $("#list").on("click", ()=>{
                list();
            });
        });
    
    }

    function add(){
        $("#add").on('click', function(){
            structure.innerHTML=getPlaylist;
            fetch();
        });  
    }

    function play(bar, storage){
        $("#play").on('click', function(){
            console.log("change");
            let selected = localStorage.getItem(`${storage[bar.selectedIndex]}`);
            structure.innerHTML=`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${selected}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;;
            structure.innerHTML += `<input type="submit" value="Add Playlist" id="add"></input>`;
            structure.innerHTML += `<input type="submit" value="List Playlist" id="list"></input>`;
            $("#list").on('click', function(){
                list();
            });
        }); 
    }
    function list(){
        let storage = JSON.parse(localStorage.getItem("storage"));
        let scroll = `<select id="scroll" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>\n`;
        for(var item of storage){
            scroll += `<option id="${item}">${item}</option>\n`;
        }
        scroll +=` </select> `;
        structure.innerHTML = `<h3>Select Playlist to play</h3>`;
        structure.innerHTML += scroll;
        let bar = document.getElementById("scroll");
        bar.style.width = "150px";
        bar.style.margin = "10px";
        structure.innerHTML += `<input type="submit" value="Play Playlist" id="play"></input>`;
        structure.innerHTML += `<input type="submit" value="Add Playlist" id="add"></input>`;
        add();
        play(bar,storage);
    }
    let structure = document.querySelector('.music');
    if(localStorage.getItem("storage") === null){
        localStorage.setItem("storage",JSON.stringify([]));
        let structure = document.querySelector('.music');
        structure.innerHTML=getPlaylist;
    }else{
        list();
    }

    fetch();
    add();


});