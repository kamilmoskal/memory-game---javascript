const allBar = document.querySelectorAll(".bar");

const colors = [" red"," red"," blue"," blue"," green"," green"," purple"," purple"," pink"," pink"," brown"," brown"," yellow"," yellow"," violet"," violet"," black"," black"]

let click = 0; // check which click 0 or 1
let array2 = []; // empty array for 2 element to compare
let letnewclick = true; // prevent form to fast clicking
let checkwin = 0; // check how many pair you already did, 9 is game over

allBar.forEach(e => {
    //// pick random number from array and give to div as class, after pick one color remove it from array at the same time
    let number = Math.floor(Math.random() * colors.length);
    e.classList += colors[number]
    colors.splice(number, 1);

    /// after 1s, divs getting grey bg, and from now EventListener "click" works on divs
    setTimeout(function(){ 

    e.style.backgroundColor = "grey"; 
    
        e.addEventListener("click",function(){
            //if first click
            if (click == 0){
                e.removeAttribute("style");
                array2.push(e);
                click++
            // if second click
            } else if (click == 1 && letnewclick == true) {
                letnewclick = false;
                e.removeAttribute("style");
                array2.push(e); 
                // check if element 1 and 2 is same, prevent from clicking same element 2 times
                if (array2[0] === array2[1]) {
                    array2.splice(1, 1);
                    letnewclick = true;
                // if 2 picked divs has same class name do..
                } else if (array2[0].className == array2[1].className) {
                    setTimeout(function(){ 
                        array2[0].classList = "bar";
                        array2[1].classList = "bar";
                        // prevent from clicking hided elements
                        array2[0].style.pointerEvents = "none";
                        array2[1].style.pointerEvents = "none";
                        array2 = [];
                        click = 0;
                        checkwin++;
                        letnewclick = true;
                        // check pairs
                        if (checkwin == 9) {
                            alert("You Won xd")
                        }
                    }, 500);
                // if 2 div has diffrent class
                } else {
                    setTimeout(function(){ 
                        array2[0].style.backgroundColor = "grey";
                        array2[1].style.backgroundColor = "grey";
                        array2 = [];
                        click = 0;
                        letnewclick = true;
                    }, 500);
                    
                }
            }
            
        })
    }, 1000);
});

