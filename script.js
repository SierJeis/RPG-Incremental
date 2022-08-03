var clicker = {
    Experience:0,
    Level:1,
    Gold:0,
    SlimeHP:10,
    BoarHP: 25,
    GoblinHP:150,
    Weapon:"Wooden Stick",
    EXPReq: 100,
    WeaponValue: 0,
    dmg: 1,
    class: "None",
    rebirth: 0,
    multiplier: 1,
   };

    function thing_clicked(){
        clicker.SlimeHP-=clicker.dmg;
    }

    function reincarnate(){
        clicker.rebirth+=1;
        clicker.multiplier+=1;
        clicker.Level = 0;
        clicker.Experience = 0;
        clicker.dmg = 1;
        clicker.EXPReq = 100;
        clicker.Gold = 0;
        clicker.Weapon = "Wooden Stick";
        document.querySelector("#counter").innerHTML = "Reincarnations: "+clicker.rebirth
        document.querySelector(".main").style.display = 'none';
        document.querySelector(".select").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'none';
    }

    function slay_Goblin(){
        clicker.GoblinHP-=clicker.dmg;
    }

    function slay_Boar(){
        clicker.BoarHP-=clicker.dmg
    }

    function cheat(){
        document.querySelector(".devgold").style.display = 'inline';
        document.querySelector(".devlevel").style.display = 'inline';
        document.querySelector(".devrein").style.display = 'inline';
    }

    function addGold(){
        clicker.Gold += 100;
    }

    function addLevel(){
        clicker.Experience += 100000000;
    }

    function addRebirth(){
        clicker.rebirth +=1;
        clicker.multiplier +=1;
        document.querySelector("#counter").innerHTML = 'Reincarnations: '+clicker.rebirth
    }

    function choose_Warrior(){
        clicker.class = "Myrmidon"
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".warriorclass").style.display = 'inline';
        document.querySelector(".woodensword").style.display = 'inline';
    }

    function choose_Assassin(){
        clicker.class = "Assassin"
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".assassinclass").style.display = 'inline';
        document.querySelector(".dagger").style.display = 'inline';
    }

    function choose_Warlock(){
        clicker.class = "Warlock"
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".mageclass").style.display = 'inline';
        document.querySelector(".orb").style.display = 'inline';
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
            clicker['Weapon'] = "Dagger"
            clicker['dmg'] +=2;
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
            clicker['Gold']-=500;
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

    function between(min, max){
        return Math.round(
            Math.random() * (max - min) + min
        )
    }
    
    function updatecount(){
        setInterval(() => {
            document.querySelector("#exp").innerHTML = "You have "+clicker.Experience+" Experience"
            document.querySelector("#lvl").innerHTML = "You are Level "+clicker.Level
            document.querySelector("#money").innerHTML = "Gold: "+clicker.Gold
            document.querySelector("#slime").innerHTML = "Slay a Slime <br>HP: "+clicker.SlimeHP+"/10"
            document.querySelector("#boar").innerHTML = "Slay a Boar <br>HP: "+clicker.BoarHP+"/25"
            document.querySelector("#Goblin").innerHTML = "Slay a Goblin <br>HP: "+clicker.GoblinHP+"/150"
            document.querySelector("#weapon").innerHTML = "Weapon: "+clicker.Weapon
            document.querySelector("#count").innerHTML = "Damage: "+clicker.dmg
            document.querySelector("#role").innerHTML = "Class: "+clicker.class
            if(clicker.SlimeHP <= 0){
                clicker['Experience'] += 1 * clicker['multiplier'];
                clicker['Gold']+=between(1, 3)
                clicker['SlimeHP'] = 10;
            }
            if(clicker.BoarHP <= 0){
                clicker['Experience'] += 2 * clicker['multiplier'];
                clicker['Gold']+=between(2, 5);
                clicker['BoarHP'] = 25;
            }
            if(clicker.GoblinHP <= 0){
                clicker['Experience'] += 5 * clicker['multiplier'];
                clicker['Gold']+=between(3, 8);
                clicker['GoblinHP'] = 150;
            }
            if(clicker.Experience >= clicker.EXPReq){
                clicker['Level']+=1;
                clicker['Experience']=0;
                clicker['dmg']+=1;
                clicker['EXPReq']*=1.02;
            }
            if(clicker.Level >= 100){
                document.querySelector(".rein").style.display = 'inline';
            } else {
                document.querySelector(".rein").style.display = 'none';
            }
        },10);
    }
    //CSSUpdate