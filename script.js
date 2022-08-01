var clicker = {
    Experience:0,
    Level:1,
    Gold:0
    
   };
    function thing_clicked(thing){
        if(clicker.Experience >= 100){
            clicker['Level']+=1;
            clicker['Experience']=0;
        }
        clicker['Experience']+=1;
        clicker['Gold']+=1
    }
    function updatecount(){
        setInterval(() => {
            document.querySelector("#exp").innerHTML = "You have "+clicker.Experience+" Experience"
            document.querySelector("#lvl").innerHTML = "You are Level "+clicker.Level
            document.querySelector("#money").innerHTML = "Gold: "+clicker.Gold
        },50);
    }