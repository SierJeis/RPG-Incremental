var clicker = {
    Experience:0,
    Level:1,
    Gold:0,
    SlimeHP:10,
    Strength:1,
    Weapon:"Wooden Stick",
    WeaponDMG: 0,
    
   };
    function thing_clicked(thing){
        var dmg = clicker['Strength']+clicker['WeaponDMG'];
        clicker.SlimeHP-=dmg;
    }

    function changeMenu(){
    document.querySelector(".shop").style.display = 'inline';
    document.querySelector(".main").style.display = 'none';

    }

    function back(){
        document.querySelector(".shop").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
    }

    function buy_Dagger(){
        if(clicker.Gold >= 100){
            clicker['Gold']-=100;
            clicker['WeaponDMG'] = 2;
            clicker['Weapon'] = "Dagger"
            document.querySelector(".dagger").style.display = 'none';
        }
    }

    function updatecount(){
        setInterval(() => {
            document.querySelector("#exp").innerHTML = "You have "+clicker.Experience+" Experience"
            document.querySelector("#lvl").innerHTML = "You are Level "+clicker.Level
            document.querySelector("#money").innerHTML = "Gold: "+clicker.Gold
            document.querySelector("#slime").innerHTML = "Slay a Slime <br>HP: "+clicker.SlimeHP
            document.querySelector("#weapon").innerHTML = "Weapon: "+clicker.Weapon
            if(clicker.SlimeHP <= 0){
                clicker['Experience']+=1;
                clicker['Gold']+=1;
                clicker['SlimeHP'] = 10
            }
            if(clicker.Experience >= 100){
                clicker['Level']+=1;
                clicker['Experience']=0;
                clicker['Strength']+=1;
            }
        },50);
    }
    //BROUPDATE