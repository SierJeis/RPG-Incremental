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
    class: "None",
   };

    function thing_clicked(){
        clicker.SlimeHP-=clicker.dmg;
    }

    function slay_Goblin(){
        clicker.GoblinHP-=clicker.dmg;
    }

    function cheat(){
        document.querySelector(".devgold").style.display = 'inline';
        document.querySelector(".devlevel").style.display = 'inline';
    }

    function addGold(){
        clicker.Gold += 100;
    }

    function addLevel(){
        clicker.Experience += 100000000;
    }

    function choose_Warrior(){
        clicker.class = "Myrmidon"
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".warriorclass").style.display = 'inline';
    }

    function choose_Assassin(){
        clicker.class = "Assassin"
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".assassinclass").style.display = 'inline';
    }

    function choose_Warlock(){
        clicker.class = "Warlock"
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".mageclass").style.display = 'inline';
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
            clicker['dmg'] +=2;
            clicker['WeaponValue'] = 1;
            document.querySelector(".dagger").style.display = 'none';
            document.querySelector(".sharpdagger").style.display = 'inline';
        }
    }

    function buy_Sharp(){
        if(clicker.Gold >= 100){
            clicker['Gold']-=500;
            clicker['Weapon'] = "Sharpened Dagger"
            clicker['dmg'] -=2;
            clicker['dmg'] +=5;
            document.querySelector(".sharpdagger").style.display = 'none';
        }
    }

   function buy_woodSword(){
    if(clicker.Gold >= 100){
        clicker['Gold']-=100;
        clicker['dmg'] += 2;
        clicker['Weapon'] = "Wooden Sword";
        document.querySelector(".woodensword").style.display = 'none';
        document.querySelector(".sword").style.display = 'inline';
    }
   }
    
    function buy_Sword(){
        if(clicker.Gold >= 500){
            clicker['Gold']-=clicker['swordcost'];
            clicker['dmg'] -= 2;
            clicker['dmg'] += 5;
            clicker['Weapon'] = "Sword"
            clicker['WeaponValue'] = 2;
            document.querySelector(".sword").style.display = 'none';
        }
    }

    function buy_Orb(){
        if(clicker.Gold >= 100){
            clicker['Gold']-=100;
            clicker['dmg'] += 2;
            clicker['Weapon'] = "Orb";
            document.querySelector(".orb").style.display = 'none';
            document.querySelector(".woodstaff").style.display = 'inline';
        }
    }

    function buy_woodStaff(){
        if(clicker.Gold >= 100){
            clicker['Gold']-=500;
            clicker['Weapon'] = "Wooden Staff"
            clicker['dmg'] -=2;
            clicker['dmg'] +=5;
            document.querySelector(".woodstaff").style.display = 'none';
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
            document.querySelector("#role").innerHTML = "Class: "+clicker.class
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