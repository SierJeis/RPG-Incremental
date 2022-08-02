var clicker = {
    Experience:0,
    Level:1,
    Gold:0,
    SlimeHP:10,
    GoblinHP:50,
    Weapon:"Wooden Stick",
    EXPReq: 100,
    daggercost: 100,
    swordcost: 500,
    WeaponValue: 0,
    dmg: 1,
   };

    function thing_clicked(){
        clicker.SlimeHP-=clicker.dmg;
    }

    function slay_Goblin(){
        clicker.GoblinHP-=clicker.dmg;
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
            clicker['Gold']-=clicker['daggercost'];
            clicker['Weapon'] = "Dagger"
            clicker['dmg'] +=1;
            clicker['WeaponValue'] = 1;
            document.querySelector(".dagger").style.display = 'none';
            document.querySelector(".sword").style.display = 'inline';
        }
    }

    function buy_Sword(){
        if(clicker.Gold >= 500){
            clicker['Gold']-=clicker['swordcost'];
            clicker['dmg'] += 3;
            clicker['Weapon'] = "Sword"
            clicker['WeaponValue'] = 2;
            document.querySelector(".sword").style.display = 'none';
        }
    }

    function updatecount(){
        setInterval(() => {
            document.querySelector("#exp").innerHTML = "You have "+clicker.Experience+" Experience"
            document.querySelector("#lvl").innerHTML = "You are Level "+clicker.Level
            document.querySelector("#money").innerHTML = "Gold: "+clicker.Gold
            document.querySelector("#slime").innerHTML = "Slay a Slime <br>HP: "+clicker.SlimeHP+"/10"
            document.querySelector("#Goblin").innerHTML = "Slay a Goblin <br>HP:"+clicker.GoblinHP+"/50"
            document.querySelector("#weapon").innerHTML = "Weapon: "+clicker.Weapon
            document.querySelector("#count").innerHTML = "Damage: "+clicker.dmg
            if(clicker.SlimeHP <= 0){
                clicker['Experience']+=1;
                clicker['Gold']+=1;
                clicker['SlimeHP'] = 10
            }
            if(clicker.GoblinHP <= 0){
                clicker['Experience']+=2
                clicker['Gold']+=2
                clicker['GoblinHP'] = 50
            }
            if(clicker.Experience >= clicker.EXPReq){
                clicker['Level']+=1;
                clicker['Experience']=0;
                clicker['dmg']+=1;
                clicker['EXPReq']*=1.02;
            }
        },50);
    }
    //BROUPDATE