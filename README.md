# Cube

<p align="center">
    <img src="docs/sample.png">
</p>

Modified: 2021-04

This is a demonstration of using 2 dimensional cartesian and trigonometric analysis to render computer graphics in 3D space.
## Quickstart
Install node packages. I am using `parcel` to render the static page and perform typescript transpilation:
```bash
npm i
```
Start the server:
```bash
npm run serve 
```

## Theory

In the 2D (x,y) plane the goal is to represent translated coordinates (x',y') as a function of initial coordinates (x,y) at any angle <img src="https://render.githubusercontent.com/render/math?math=\color{gray}{\alpha}"> after some angular rotation  <img src="https://render.githubusercontent.com/render/math?math=\color{gray}{\beta}">:<br>

![img](docs/proof.png)
### Forumulation
We start with rotation about the z axis (xy plane). From the diagram we can write x and y as a function of the angle  <img src="https://render.githubusercontent.com/render/math?math=\color{gray}{\alpha}">:<br> 
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x = r\cdot{cos(\alpha)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y = r\cdot{sin(\alpha)}}"><br>

x' and y' can also be represented in the same way except as a function of <img src="https://render.githubusercontent.com/render/math?math=\color{gray}{\alpha%2B\beta}"> which can be rewritten using known identities:<br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = r\cdot{cos(\alpha %2B \beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = r\cdot{cos(\alpha)cos(\beta)} - r\cdot{sin(\alpha)sin(\beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y' = r\cdot{sin(\alpha %2B \beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = r\cdot{sin(\alpha)cos(\beta)} %2B r\cdot{cos(\alpha)sin(\beta)}}"><br>

Finally substituting r for our x and y equations:<br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = x\cdot{cos(\beta)} - y\cdot{sin(\beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y' = x\cdot{cos(\beta)} %2B x\cdot{sin(\beta)}}"><br>

We can apply the same proof for rotating about other axis' by replacing the static coordinate.<br>
Rotation about x axis:<br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y' = y\cdot{cos(\beta)} - z\cdot{sin(\beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y' = z\cdot{cos(\beta)} %2B y\cdot{sin(\beta)}}"><br>
Rotation about y axis:<br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = x\cdot{cos(\beta)} %2B z\cdot{sin(\beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{z' = z\cdot{cos(\beta)} - x\cdot{sin(\beta)}}"><br>