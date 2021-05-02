import $ from 'jquery';
import { nodes, Node } from './node';

let wo_x = window.innerWidth / 2;
let wo_y = window.innerHeight / 2;
const duration = 10;

// bind jqueried DOM
var $rotate_x = $('#rotate-x');
var $input_x = $('#input-x');
var $rotate_y = $('#rotate-y');
var $input_y = $('#input-y');
var $rotate_z = $('#rotate-z');
var $input_z = $('#input-z');

window.onload = () => {
    // bind event button
    $rotate_x.on('click', anim_x);
    $rotate_y.on('click', anim_y);
    $rotate_z.on('click', anim_z);
    // initialize node positions
    nodes.forEach((node:Node) => {
        var elem = document.getElementById(node.el);
        elem.style.top = node.x + "px"; 
        elem.style.left = node.y + "px"; 
    });
};

function anim_x(e:any) {
    e.preventDefault();
    // iterate through nodes and apply transform
    let deg =$input_x.val() as number;
    // let deg = parseInt(target);
    console.log("Rotating x " + deg + " degrees");
    nodes.forEach((node:Node) => {
        let id = null;
        // degree step size as a function of the sign of the deg
        var dss = (deg/Math.abs(deg));
        // cumulative rotation counter
        var cr = 0;
        var elem = document.getElementById(node.el);
        id = setInterval(frame, duration);
        function frame() {
            // compare abs for positive and negative dss
            if ( Math.abs(cr) >= Math.abs(deg)) {
                clearInterval(id);
            } else {
                cr += dss;
                // get xy transform for this node
                rotate_x(deg_to_rad(dss),node);
                elem.style.top = node.x + "px"; 
                elem.style.left = node.y + "px";
            }
        }
    });
}

function anim_y(e:any) {
    e.preventDefault();
    // iterate through nodes and apply transform
    let deg =$input_y.val() as number;
    console.log("Rotating y " + deg + " degrees");
    nodes.forEach((node:Node) => {
        let id = null;
        // degree step size as a function of the sign of the deg
        var dss = (deg/Math.abs(deg));
        // cumulative rotation counter
        var cr = 0;
        var elem = document.getElementById(node.el);
        id = setInterval(frame, duration);
        function frame() {
            // compare abs for positive and negative dss
            if ( Math.abs(cr) >= Math.abs(deg)) {
                clearInterval(id);
            } else {
                cr += dss;
                // get xy transform for this node
                rotate_y(deg_to_rad(dss),node);
                elem.style.top = node.x + "px"; 
                elem.style.left = node.y + "px";
            }
        }
    });
}

function anim_z(e:any) {
    e.preventDefault();
    // iterate through nodes and apply transform
    let deg =$input_z.val() as number;
    console.log("Rotating z " + deg + " degrees");
    nodes.forEach((node:Node) => {
        let id = null;
        // degree step size as a function of the sign of the deg
        var dss = (deg/Math.abs(deg));
        // cumulative rotation counter
        var cr = 0;
        var elem = document.getElementById(node.el);
        id = setInterval(frame, duration);
        function frame() {
            // compare abs for positive and negative dss
            if ( Math.abs(cr) >= Math.abs(deg)) {
                clearInterval(id);
            } else {
                cr += dss;
                // get xy transform for this node
                rotate_z(deg_to_rad(dss),node);
                elem.style.top = node.x + "px"; 
                elem.style.left = node.y + "px";
            }
        }
    });
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
function rotate_gz(rss:number, x:number, y:number):[number, number] {
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

function rotate_z(rss:number, node:Node):void {
    // optimization
    let cos_theta = Math.cos(rss);
    let sin_theta = Math.sin(rss);
    let x = node.x;
    let y = node.y;
    // subtract offset
    x -= wo_x;
    y -= wo_y;
    // perform translation computation
    node.x = (x * cos_theta - y * sin_theta) + wo_x;
    node.y = (y * cos_theta + x * sin_theta) + wo_y;
}

function rotate_x(rss:number, node:Node):void {
    // optimization
    let cos_theta = Math.cos(rss);
    let sin_theta = Math.sin(rss);
    let y = node.y;
    let z = node.z;
    // subtract offset
    y -= wo_y;
    // perform translation computation
    node.y = (y * cos_theta - z * sin_theta) + wo_y;
    node.z = (z * cos_theta + y * sin_theta);
}

function rotate_y(rss:number, node:Node):void {
    // optimization
    let cos_theta = Math.cos(rss);
    let sin_theta = Math.sin(rss);
    let x = node.x;
    let z = node.z;
    // subtract offset
    x -= wo_x;
    // perform translation computation
    node.x = (x * cos_theta + z * sin_theta) + wo_x;
    node.z = (z * cos_theta - x * sin_theta);
}

