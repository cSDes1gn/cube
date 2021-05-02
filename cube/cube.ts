import { nodes, Node } from './node';

let wo_x = window.innerWidth / 2;
let wo_y = window.innerHeight / 2;
const refreshRate = 1000 / 60;
const duration = 2000;

window.onload = () => {
    // bind event button
    document.querySelector('.play').addEventListener('click', anime);
    // initialize node positions
    nodes.forEach((node:Node) => {
        var elem = document.getElementById(node.el);
        elem.style.top = node.x + "px"; 
        elem.style.left = node.y + "px"; 
    });
};

function anime(e:any) {
    e.preventDefault();
    // iterate through nodes and apply transform
    let target =(<HTMLInputElement>document.getElementById("target")).value;
    let deg = parseInt(target);
    nodes.forEach((node:Node) => {
        let id = null;
        // degree step size
        var dss = 0.1;
        var elem = document.getElementById(node.el);
        id = setInterval(frame, 20);
        function frame() {
            if ( dss >= deg) {
                clearInterval(id);
            } else {
                dss += 2;
                // get xy transform for this node
                let xy_t = rotate_z(deg_to_rad(dss),node.x, node.y);
                elem.style.top = xy_t[0] + "px"; 
                elem.style.left = xy_t[1] + "px";
                // stateful
                // node.x = xy_t[0];
                // node.y = xy_t[1]; 
            }
        }
    })
}

function rad_to_deg(rad:number):number {
    return (rad * 180) / Math.PI;
}

function deg_to_rad(deg:number):number {
    return (deg * Math.PI) / 180;
}

// perform transforms
// x' = x * cos(B) - y * sin(B)
// y' = y * cos(B) + x * sin(B)
function rotate_z(rss:number, x:number, y:number):[number, number] {
    // optimization
    let cos_theta = Math.cos(rss);
    let sin_theta = Math.sin(rss);
    // subtract offset
    x -= wo_x;
    y -= wo_y;
    // perform translation computation
    let x_prime = (x * cos_theta - y * sin_theta) + wo_x;
    let y_prime = (y * cos_theta + x * sin_theta) + wo_y;
    return [ x_prime, y_prime ]
}





