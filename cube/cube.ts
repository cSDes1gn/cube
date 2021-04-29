import anime from 'animejs';

// get window origin
let wo_x = window.innerWidth / 2;
let wo_y = window.innerHeight / 2;
const refreshRate = 1000 / 60;
const duration = 2000;
const spacing = 200;
console.log("Window center: " + wo_x + ", " + wo_y );

interface Node {
    el:string,
    x:number,
    y:number,
    z:number
}
var nodes = [];
var nodes_next = [];
nodes.push(
    <Node> {
        el: '#d1',
        x: wo_x-spacing,
        y: wo_y-spacing,
        z: 0
    },
    <Node> {
        el: '#d2',
        x: wo_x,
        y: wo_y-spacing,
        z: 0
    },
    <Node> {
        el: '#d3',
        x: wo_x+spacing,
        y: wo_y-spacing,
        z: 0
    },
    <Node> {
        el: '#d4',
        x: wo_x-spacing,
        y: wo_y,
        z: 0
    },
    <Node> {
        el: '#d5',
        x: wo_x,
        y: wo_y,
        z: 0
    },
    <Node> {
        el: '#d6',
        x: wo_x+spacing,
        y: wo_y,
        z: 0
    },
    <Node> {
        el: '#d7',
        x: wo_x-spacing,
        y: wo_y+spacing,
        z: 0
    },
    <Node> {
        el: '#d8',
        x: wo_x,
        y: wo_y+spacing,
        z: 0
    },
    <Node> {
        el: '#d9',
        x: wo_x+spacing,
        y: wo_y+spacing,
        z: 0
    },
);


window.onload = () => {
    var play = document.querySelector('.play');
    play.addEventListener('click', function(e) {
        e.preventDefault();
        arr.forEach((el:anime.AnimeInstance) => {
            el.play()
        });
    });
    // initializer 
    nodes.forEach((node:Node) => {
        anime({
            targets: node.el,
            keyframes: [
                {translateX: node.x},
                {translateY: node.y}
            ],
            easing: 'easeInOutExpo',
            duration: duration
        });
    });
    rotate_z(Math.PI/2);
    let arr = []
    for (let i = 0; i < 9; i++) {
        var a = anime({
            targets: nodes[i].el,
            translateX: [ nodes[i].x, nodes_next[i][0]],
            translateY: [ nodes[i].y, nodes_next[i][1] ],
            easing: 'easeInOutExpo',
            duration: duration,
            autoplay: false
        });
        arr.push(a);
    }
};

// setup dots on page

// perform transforms
// x' = x * cos(B) - y * sin(B)
// y' = y * cos(B) + x * sin(B)
function rotate_z(theta:number) {
    // optimization
    let sin_theta = Math.sin(theta);
    let cos_theta = Math.cos(theta);
    // map transform over all input points
    nodes.forEach((node) => {
        // subtract offset
        node.x -= wo_x;
        node.y -= wo_y;
        // perform translation computation
        let x = (node.x * cos_theta - node.y * sin_theta) + wo_x;
        let y = (node.y * cos_theta + node.x * sin_theta) + wo_y;
        // append offset
        node.x += wo_x;
        node.y += wo_y;
        nodes_next.push([x, y])
    })
    console.log(nodes);
    console.log(nodes_next);
}





