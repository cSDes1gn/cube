# Cube

Modified: 2021-04

## Quickstart
Install node packages:
```bash
npm i
```
Start the server:
```bash
npm run start
```

## Theory

Represent translation coordinates (x', y') as a function of initial coordinates (x, y) and angular rotation  <img src="https://render.githubusercontent.com/render/math?math=\color{gray}{\beta}"><br>

### Forumulation
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x = r\cdot{cos(\alpha)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y = r\cdot{sin(\alpha)}}"><br>

<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = r\cdot{cos(\alpha %2B \beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = r\cdot{cos(\alpha)cos(\beta)} - r\cdot{sin(\alpha)sin(\beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y' = r\cdot{sin(\alpha %2B \beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = r\cdot{sin(\alpha)cos(\beta)} %2B r\cdot{cos(\alpha)sin(\beta)}}"><br>

Therefore:

<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{x' = x\cdot{cos(\beta)} - y\cdot{sin(\beta)}}"><br>
<img src="https://render.githubusercontent.com/render/math?math=\color{gray}{y' = x\cdot{cos(\beta)} %2B x\cdot{sin(\beta)}}"><br>