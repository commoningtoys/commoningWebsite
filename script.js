let myClasses = ["team", "project", "sBlog", "moodBoard"];
let myTags = ['yano', 'micha', 'shintaro', 'selena', 'viktor', 'kayla']
/**
 * Object to store visibility and name of classes
 * @param {String} _name - name of the class
 * @param {boolean} _visible - boolean to set the visibility of the class
 */
function ClassObject(_name, _visible) {
    this.name = _name;
    this.visible = _visible;
}

let ClassObjects = [];
for (let i = 0; i < myClasses.length; i++) {
    ClassObjects.push(new ClassObject(myClasses[i], true));
}

/**
 * function that reveals only certain elements of the website
 * @param {String} className - the class that needs to be set to 'display: none;' 
 */
function reveal(className) {
    // showAll();
    console.log('imWOrking');
    for (let i = 0; i < ClassObjects.length; i++) {
        if (ClassObjects[i].name.includes(className)) {
            ClassObjects[i].visible = true;
            let thisClass = document.getElementsByClassName(ClassObjects[i].name);
            for (let j = 0; j < thisClass.length; j++) {
                thisClass[j].style.display = 'block';
            }
        } else {
            ClassObjects[i].visible = false;
            let thisClass = document.getElementsByClassName(ClassObjects[i].name);
            for (let j = 0; j < thisClass.length; j++) {
                thisClass[j].style.display = 'none';
            }
        }
    }
}
/**
 * reveals elements based on tag name
 * @param {String} tagName - name of the tag to be searched
 */
function revealTag(tagName) {
    showAll();
    for (let i = 0; i < myTags.length; i++) {
        if (myTags[i].includes(tagName)) {
            // myTags[i].visible = true;
            let thisClass = document.getElementsByTagName(myTags[i]);
            for (let j = 0; j < thisClass.length; j++) {
                thisClass[j].style.display = 'block';
            }
        } else {
            // myTags[i].visible = false;
            let thisClass = document.getElementsByTagName(myTags[i]);
            for (let j = 0; j < thisClass.length; j++) {
                thisClass[j].style.display = 'none';
            }
        }
    }
}
/**
 * function that shows all the posts of the wesite
 */
function showAll() {
    for (let i = 0; i < myClasses.length; i++) {
        let thisClass = document.getElementsByClassName(myClasses[i]);
        for (let j = 0; j < thisClass.length; j++) {
            thisClass[j].style.display = 'block';
        }
    }
}
/**
 * this function initializes the width and heights of all the divs
 */
function init() {
    for (let i = 0; i < myClasses.length; i++) {
        let thisClass = document.getElementsByClassName(myClasses[i]);
        for (let j = 0; j < thisClass.length; j++) {
            let randW = Random(20, 60);
            thisClass[j].style.width = Math.floor(randW) + '%';
            let randH = thisClass[j].style.width;//Random();
            // console.log(randH);
            let randM = Random(0.1, 2);
            thisClass[j].style.height = Math.floor(randH) + 'px';
            // thisClass[j].style.margin = randM +'%';

        }
    }
}
/**
 * stes the position of the divs
 */
function setPositionDivs() {	
    let scale = window.devicePixelRatio;
    console.log(scale);
    /**
    * testing jQuery functions
    */
   $("a").click(function (className) {
       console.log(this.innerHTML);
   });
   let menuH = $("#myMenu").height();
   console.log(menuH);
   document.getElementById("myContainer").style.top = menuH * scale * 2/3 + 'px';
   console.log('divs in position!')
   // $("myContainer").css(top, menuH);
   // console.log(menuH);
    // console.log('le madonne!')
    // let menuHeight = document.getElementById('myMenu').style.height;
    // console.log(menuHeight);
    // document.getElementById('myContainer').style.top = menuHeight;
}
/**
 * this function returns a random number between two numbers
 * @param {float} a 
 * @param {float} b 
 * @returns {float} random number between the input numbers
 */
function Random(a, b) {
    //if a is smaller than b we should swap them
    if (b < a) {
        let Swap = b;
        b = a;
        a = Swap;
    }
    let c = Math.abs(a - b);
    return a + (Math.random() * c);
}
/**
 * function to show hide the menu
 */
let menuIsShow = false;
function closeOpenMenu() {
    menuIsShow = !menuIsShow;//every click we change the status of the boolean
    let myTags = document.getElementsByTagName('a');
    for (let i = 0; i < myTags.length; i++) {
        menuIsShow == false ? myTags[i].style.display = 'none' : myTags[i].style.display = 'initial';
    }
    let menuClass = document.getElementsByClassName('menu');
    for (let i = 0; i < menuClass.length; i++) {
        menuIsShow == false ? menuClass[i].style.width = 'auto' : menuClass[i].style.width = '100%';
    }
    let button = document.getElementById('openClose');
    menuIsShow == true ? button.innerHTML = 'Close Menu' : button.innerHTML = 'Show Menu';
}

// $(".project").click(function(e){
//     let h = window.innerHeight;
//     console.log(e);
//     // e.target.style.width = '98%';
//     // e.target.style.height = h + 'px';
// });
function enlarge(e){
    console.log(e);
}
// /**
//  * testing jQuery functions
//  */
// $( "a" ).click(function () {
//     console.log("jQuery");
// });