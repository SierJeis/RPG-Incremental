var clicker = {
    Experience:0,
    Level:1,
    Gold:0,
    SlimeHP:10,
    BoarHP: 25,
    GoblinHP:65,
    WolfHP: 170,
    Weapon:"Wooden Stick",
    EXPReq: 100,
    WeaponValue: 0,
    dmg: 1,
    class: "None",
    rebirth: 0,
    multiplier: 1,
    dmgbuff: 1.30,
    classvalue: 0,
   };

   function save(){
    window.localStorage.setItem("Level", clicker.Level);
    window.localStorage.setItem("Experience", clicker.Experience);
    window.localStorage.setItem("Gold", clicker.Gold);
    window.localStorage.setItem("Weapon", clicker.Weapon);
    window.localStorage.setItem("EXPReq", clicker.EXPReq);
    window.localStorage.setItem("dmg", clicker.dmg);
    window.localStorage.setItem("Class", clicker.class);
    window.localStorage.setItem("Rebirth", clicker.rebirth);
    window.localStorage.setItem("Multiplier", clicker.multiplier);
    window.localStorage.setItem("ClassValue", clicker.classvalue);
}

function load(){
    clicker.Level = JSON.parse(window.localStorage.getItem("Level"));
    clicker.Experience = JSON.parse(window.localStorage.getItem("Experience"));
    clicker.Gold = JSON.parse(window.localStorage.getItem("Gold"));
    clicker.Weapon = window.localStorage.getItem("Weapon");
    clicker.EXPReq = JSON.parse(window.localStorage.getItem("EXPReq"));
    clicker.dmg = JSON.parse(window.localStorage.getItem("dmg"));
    clicker.class = window.localStorage.getItem("Class");
    clicker.rebirth = JSON.parse(window.localStorage.getItem("Rebirth"));
    clicker.multiplier = JSON.parse(window.localStorage.getItem("Multiplier"));
    clicker.classvalue = JSON.parse(window.localStorage.getItem("ClassValue"));
}

function loadGame(){
    if(localStorage.getItem("Level") === null){
        alert('You have no data.')
    } else {
        clicker.Level = JSON.parse(window.localStorage.getItem("Level"));
        clicker.Experience = JSON.parse(window.localStorage.getItem("Experience"));
        clicker.Gold = JSON.parse(window.localStorage.getItem("Gold"));
        clicker.Weapon = window.localStorage.getItem("Weapon");
        clicker.EXPReq = JSON.parse(window.localStorage.getItem("EXPReq"));
        clicker.dmg = JSON.parse(window.localStorage.getItem("dmg"));
        clicker.class = window.localStorage.getItem("Class");
        clicker.rebirth = JSON.parse(window.localStorage.getItem("Rebirth"));
        clicker.multiplier = JSON.parse(window.localStorage.getItem("Multiplier"));
        clicker.classvalue = JSON.parse(window.localStorage.getItem("ClassValue"));
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
    }
}

function resetData(){
    window.localStorage.clear();
    window.location.reload();
}

function openOptions(){
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".inventory").style.display = 'none';
    document.querySelector(".settings").style.display = 'inline';
}

    function thing_clicked(){
        if(clicker.classvalue == 1){
            clicker.SlimeHP-=clicker.dmg*clicker.dmgbuff;
        } else if (clicker.classvalue == 3) {
            clicker.SlimeHP-=clicker.dmg;
        } else if (clicker.classvalue == 2) {
            if(between(1, 10) <= 3){
                clicker.SlimeHP-=clicker.dmg*3;
            } else {
                clicker.SlimeHP-=clicker.dmg;
            }
        }
    }

    function slay_Wolf(){
        if(clicker.classvalue == 1){
            clicker.WolfHP-=clicker.dmg*clicker.dmgbuff;
        } else if (clicker.classvalue == 3) {
            clicker.WolfHP-=clicker.dmg;
        } else if (clicker.classvalue == 2) {
            if(between(1, 10) <= 3){
                clicker.WolfHP-=clicker.dmg*3;
            } else {
                clicker.WolfHP-=clicker.dmg;
            }
        }
    }
       
    function reincarnate(){
        clicker.rebirth+=1;
        clicker.multiplier+=1;
        clicker.Level = 0;
        clicker.Experience = 0;
        clicker.dmg = 1;
        clicker.EXPReq = 100;
        clicker.Gold = 0;
        clicker.classvalue = 0;
        clicker.Weapon = "Wooden Stick";
        document.querySelector(".main").style.display = 'none';
        document.querySelector(".select").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'none';
        document.querySelector(".dagger").disabled = false;
        document.querySelector(".sharpdagger").disabled = false;
        document.querySelector(".wolfdagger").disabled = false;
        document.querySelector(".woodensword").disabled = false;
        document.querySelector(".sword").disabled = false;
        document.querySelector(".greatsword").disabled = false;
        document.querySelector(".orb").disabled = false;
        document.querySelector(".woodstaff").disabled = false;
        document.querySelector(".metalstaff").disabled = false;
        document.querySelector(".woodensword").innerHTML = "Buy Wooden Sword <br> Cost: 100 Gold <br> Better than a wooden stick.."
        document.querySelector(".sword").innerHTML = "Buy Sword <br> Cost: 500 Gold <br> Has some length, should be pretty efficient."
        document.querySelector(".greatsword").innerHTML = "Buy GreatSword <br> Cost: 2000 Gold <br> Big sword go brrrrrr."
        document.querySelector(".dagger").innerHTML = "Buy Dagger <br> Cost: 100 Gold <br> Dinked blade, but should do good for slaying goblins."
        document.querySelector(".sharpdagger").innerHTML = "Buy Sharpened Dagger <br> Cost: 500 Gold <br> Dagger with a clean edge, Goblins arms don't stand a chance."
        document.querySelector(".wolfdagger").innerHTML = "Buy Wolf Tooth Dagger <br> Cost: 2000 Gold <br> Created from the tooth of a Wolf."
        document.querySelector(".orb").innerHTML = "Buy Orb <br> Cost: 100 <br> Enhances your magical prowess, perfect for burning Slimes."
        document.querySelector(".woodstaff").innerHTML = "Buy Wooden Staff <br> Cost: 500 <br> Place the Orb upon a magically infused staff."
        document.querySelector(".metalstaff").innerHTML = "Buy Metal Staff <br> Cost: 2000 <br> Give your orb a more significant base."
    }

    function slay_Goblin(){
        if(clicker.classvalue == 1){
            clicker.GoblinHP-=clicker.dmg*clicker.dmgbuff;
        } else if (clicker.classvalue == 3) {
            clicker.GoblinHP-=clicker.dmg;
        } else if (clicker.classvalue == 2) {
            if(between(1, 10) <= 3){
                clicker.GoblinHP-=clicker.dmg*3;
            } else {
                clicker.GoblinHP-=clicker.dmg;
            }
        }
    }

    function slay_Boar(){
        if(clicker.classvalue == 1){
            clicker.BoarHP-=clicker.dmg*clicker.dmgbuff;
        } else if (clicker.classvalue == 3) {
            clicker.BoarHP-=clicker.dmg;
        } else if (clicker.classvalue == 2) {
            if(between(1, 10) <= 3){
                clicker.BoarHP-=clicker.dmg*3;
            } else {
                clicker.BoarHP-=clicker.dmg;
            }
        }
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
        clicker.class = "Myrmidon";
        clicker.classvalue = 1;
        clicker.dmgbuff = 1.3;
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".warriorclass").style.display = 'inline';
        document.querySelector(".woodensword").style.display = 'inline';

    }

    function choose_Assassin(){
        clicker.class = "Assassin"
        clicker.classvalue = 2;
        clicker.dmgbuff = 1
        document.querySelector(".select").style.display = 'none';
        document.querySelector(".main").style.display = 'inline';
        document.querySelector(".inventory").style.display = 'inline';
        document.querySelector(".assassinclass").style.display = 'inline';
        document.querySelector(".dagger").style.display = 'inline';
    }

    function choose_Warlock(){
        clicker.class = "Warlock"
        clicker.classvalue = 3;
        clicker.dmgbuff = 1
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
        document.querySelector(".settings").style.display = 'none';
        document.querySelector(".inventory").style.display = 'inline';
    }

    function buy_Dagger(){
        if(clicker.Gold >= 100){
            clicker['Gold']-=100;
            clicker['Weapon'] = "Dagger"
            clicker['dmg'] +=2;
            document.querySelector(".dagger").disabled = true;
            document.querySelector(".dagger").innerHTML = "Dagger Bought <br> Cost: Purchased <br> Dinked blade, but should do good for slaying goblins."
        }
    }

    function buy_Sharp(){
        if(clicker.Gold >= 100){
            clicker['Gold']-=500;
            clicker['Weapon'] = "Sharpened Dagger"
            clicker['dmg'] -=2;
            clicker['dmg'] +=5;
            document.querySelector(".sharpdagger").disabled = true;
            document.querySelector(".sharpdagger").innerHTML = "Sharpened Dagger Bought <br> Cost: Purchased <br> Dagger with a clean edge, Goblins arms don't stand a chance."
        }
    }

    function buy_Wolf(){
        if(clicker.Gold >= 2000){
            clicker['Gold']-=2000;
            clicker['dmg'] -= 5;
            clicker['dmg'] += 20;
            clicker['Weapon'] = "Wolf Dagger"
            document.querySelector(".wolfdagger").disabled = true;
            document.querySelector(".wolfdagger").innerHTML = "Wolf Dagger Bought <br> Cost: Purchased <br> Created from the tooth of a Wolf."
        }
    }

   function buy_woodSword(){
    if(clicker.Gold >= 100){
        clicker['Gold']-=100;
        clicker['dmg'] += 2;
        clicker['Weapon'] = "Wooden Sword";
        document.querySelector(".woodensword").disabled = true;
        document.querySelector(".woodensword").innerHTML = "Wooden Sword Bought <br> Cost: Purchased <br> Better than a wooden stick.."
    }
   }
    
    function buy_Sword(){
        if(clicker.Gold >= 500){
            clicker['Gold']-=500;
            clicker['dmg'] -= 2;
            clicker['dmg'] += 5;
            clicker['Weapon'] = "Sword"
            document.querySelector(".sword").disabled = true;
            document.querySelector(".sword").innerHTML = "Sword Bought <br> Cost: Purchased <br> Has some length, should be pretty efficient."
        }
    }

    function buy_GreatSword(){
        if(clicker.Gold >= 2000){
            clicker['Gold']-=2000;
            clicker['dmg'] -= 5;
            clicker['dmg'] += 20;
            clicker['Weapon'] = "GreatSword"
            document.querySelector(".greatsword").disabled = true;
            document.querySelector(".greatsword").innerHTML = "GreatSword Bought <br> Cost: Purchased <br> Big sword go brrrrrr."
        }
    }

    function buy_Orb(){
         if(clicker.Gold >= 100){
            clicker['Gold']-=100;
            clicker['dmg'] += 2;
            clicker['Weapon'] = "Orb";
            document.querySelector(".orb").disabled = true;
            document.querySelector(".orb").innerHTML = "Orb Bought <br> Cost: Purchased <br> Enhances your magical prowess, perfect for burning Slimes."
        }
}

    function buy_woodStaff(){
        if(clicker.Gold >= 500){
            clicker['Gold']-=500;
            clicker['Weapon'] = "Wooden Staff"
            clicker['dmg'] -=2;
            clicker['dmg'] +=5;
            document.querySelector(".woodstaff").disabled = true;
            document.querySelector(".woodstaff").innerHTML = "Wooden Staff Bought <br> Cost: Purchased <br> Place the Orb upon a magically infused staff."
        }
    }

    function buy_Staff(){
        if(clicker.Gold >= 2000){
            clicker['Gold']-=2000;
            clicker['dmg'] -= 5;
            clicker['dmg'] += 20;
            clicker['Weapon'] = "Metal Staff"
            document.querySelector(".metalstaff").disabled = true;
            document.querySelector(".metalstaff").innerHTML = "Metal Staff Bought <br> Cost: Purchased <br> Give your orb a more significant base."
        }
    }

    function between(min, max){
        return Math.round(
            Math.random() * (max - min) + min
        )
    }

    function updatecount(){
        clicker.class = window.localStorage.getItem("Class");
        if(clicker.class = "None"){
            document.querySelector(".select").style.display = 'inline';
        } else {
            document.querySelector(".main").style.display = 'inline';
        }
       
        setInterval(() => {
            document.querySelector("#exp").innerHTML = "You have "+clicker.Experience+" Experience"
            document.querySelector("#lvl").innerHTML = "You are Level "+clicker.Level
            document.querySelector("#money").innerHTML = "Gold: "+clicker.Gold
            document.querySelector("#slime").innerHTML = "Slay a Slime <br>HP: "+clicker.SlimeHP.toFixed(1)+"/10.0"
            document.querySelector("#boar").innerHTML = "Slay a Boar <br>HP: "+clicker.BoarHP.toFixed(1)+"/25.0"
            document.querySelector("#Goblin").innerHTML = "Slay a Goblin <br>HP: "+clicker.GoblinHP.toFixed(1)+"/65.0"
            document.querySelector(".wolfcss").innerHTML = "Slay a Wolf <br>HP: "+clicker.WolfHP.toFixed(1)+"/170.0"
            document.querySelector("#weapon").innerHTML = "Weapon: "+clicker.Weapon
            document.querySelector("#count").innerHTML = "Damage: "+Math.round((clicker.dmg)*(clicker.dmgbuff) * 100) / 100;
            document.querySelector("#role").innerHTML = "Class: "+clicker.class
            document.querySelector("#counter").innerHTML = "Reincarnations: "+clicker.rebirth
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
                clicker['GoblinHP'] = 65;
            }
            if(clicker.WolfHP <= 0){
                clicker['Experience'] += 15 * clicker['multiplier'];
                clicker['Gold']+=between(5, 13);
                clicker['WolfHP'] = 170;
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
            if(clicker.classvalue == 1){
                document.querySelector(".warriorclass").style.display = 'inline';
                document.querySelector(".assassinclass").style.display = 'none';
                document.querySelector(".mageclass").style.display = 'none';
            } else if(clicker.classvalue == 2) {
                document.querySelector(".assassinclass").style.display = 'inline';
                document.querySelector(".warriorclass").style.display = 'none';
                document.querySelector(".mageclass").style.display = 'none';
            } else if(clicker.classvalue == 3) {
                document.querySelector(".mageclass").style.display = 'inline';
                document.querySelector(".assassinclass").style.display = 'none';
                document.querySelector(".warriorclass").style.display = 'none';
            }
        },10);
        setInterval(() => {
            save();
        }, 10000);
    }
    //CSSUpdate