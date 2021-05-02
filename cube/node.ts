// node spacing
const spacing = 200;
// get window origin
let wo_x = window.innerWidth / 2;
let wo_y = window.innerHeight / 2;
console.log("Window center: " + wo_x + ", " + wo_y );

export interface Node {
    el:string,
    x:number,
    y:number,
    z:number
}

// initial node placement based on window computations
export const nodes = [
    <Node> {
        el: 'd1',
        x: wo_x-spacing,
        y: wo_y-spacing,
        z: 0
    },
    <Node> {
        el: 'd2',
        x: wo_x,
        y: wo_y-spacing,
        z: 0
    },
    <Node> {
        el: 'd3',
        x: wo_x+spacing,
        y: wo_y-spacing,
        z: 0
    },
    <Node> {
        el: 'd4',
        x: wo_x-spacing,
        y: wo_y,
        z: 0
    },
    <Node> {
        el: 'd5',
        x: wo_x,
        y: wo_y,
        z: 0
    },
    <Node> {
        el: 'd6',
        x: wo_x+spacing,
        y: wo_y,
        z: 0
    },
    <Node> {
        el: 'd7',
        x: wo_x-spacing,
        y: wo_y+spacing,
        z: 0
    },
    <Node> {
        el: 'd8',
        x: wo_x,
        y: wo_y+spacing,
        z: 0
    },
    <Node> {
        el: 'd9',
        x: wo_x+spacing,
        y: wo_y+spacing,
        z: 0
    },
    <Node> {
        el: 'd10',
        x: wo_x-spacing,
        y: wo_y-spacing,
        z: -spacing
    },
    <Node> {
        el: 'd11',
        x: wo_x,
        y: wo_y-spacing,
        z: -spacing
    },
    <Node> {
        el: 'd12',
        x: wo_x+spacing,
        y: wo_y-spacing,
        z: -spacing
    },
    <Node> {
        el: 'd13',
        x: wo_x-spacing,
        y: wo_y,
        z: -spacing
    },
    <Node> {
        el: 'd14',
        x: wo_x,
        y: wo_y,
        z: -spacing
    },
    <Node> {
        el: 'd15',
        x: wo_x+spacing,
        y: wo_y,
        z: -spacing
    },
    <Node> {
        el: 'd16',
        x: wo_x-spacing,
        y: wo_y+spacing,
        z: -spacing
    },
    <Node> {
        el: 'd17',
        x: wo_x,
        y: wo_y+spacing,
        z: -spacing
    },
    <Node> {
        el: 'd18',
        x: wo_x+spacing,
        y: wo_y+spacing,
        z: -spacing
    },
    <Node> {
        el: 'd19',
        x: wo_x-spacing,
        y: wo_y-spacing,
        z: spacing
    },
    <Node> {
        el: 'd20',
        x: wo_x,
        y: wo_y-spacing,
        z: spacing
    },
    <Node> {
        el: 'd21',
        x: wo_x+spacing,
        y: wo_y-spacing,
        z: spacing
    },
    <Node> {
        el: 'd22',
        x: wo_x-spacing,
        y: wo_y,
        z: spacing
    },
    <Node> {
        el: 'd23',
        x: wo_x,
        y: wo_y,
        z: spacing
    },
    <Node> {
        el: 'd24',
        x: wo_x+spacing,
        y: wo_y,
        z: spacing
    },
    <Node> {
        el: 'd25',
        x: wo_x-spacing,
        y: wo_y+spacing,
        z: spacing
    },
    <Node> {
        el: 'd26',
        x: wo_x,
        y: wo_y+spacing,
        z: spacing
    },
    <Node> {
        el: 'd27',
        x: wo_x+spacing,
        y: wo_y+spacing,
        z: spacing
    }
];