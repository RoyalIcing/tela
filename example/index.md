<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Tela</title>
    <link rel="stylesheet" href="/main.css" />
  </head>

<body>
<main>

# Tela: layout

## Layout

## X

Flexbox row container

### `X`

```html
<ul class="X">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X · spacing: 1rem`

```html
<ul class="X" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X" style="--X-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X · spacing: auto`

```html
<ul class="X" style="--X-spacing: auto;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X" style="--X-spacing: auto;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X |X-`

```html
<ul class="X |X">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X |X">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X · spacing: 1rem, separator between 2nd & 3rd`

```html
<ul class="X" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li role="separator"></li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X" style="--X-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li role="separator"></li>
    <li>Third</li>
  </ul>
</div>

### `X · spacing: 1rem, outer: auto`

```html
<ul class="X" style="--X-spacing: 1rem; --X-outer: auto;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X" style="--X-spacing: 1rem; --X-outer: auto;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X -X- · spacing: 1rem`

```html
<ul class="X -X-" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X -X-" style="--X-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X -X- · spacing: 5vw`

```html
<ul class="X -X-" style="--X-spacing: 5vw;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X -X-" style="--X-spacing: 5vw;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `X -X- · spacing: auto`

```html
<ul class="X -X-" style="--X-spacing: auto;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X -X-" style="--X-spacing: auto;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `|X-X| · min spacing: 1rem`

```html
<ul class="X |X-X|" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X |X-X|" style="--X-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `|-X-X-| · min spacing: 1rem`

```html
<ul class="X |-X-X-|" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X |-X-X-|" style="--X-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

## Y: flexbox column container

### `Y`

```html
<ul class="Y">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y · spacing: 1rem`

```html
<ul class="Y" style="--Y-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y" style="--Y-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y · spacing: 1rem, X-spacing: auto`

```html
<ul class="Y" style="--Y-spacing: 1rem; --X-spacing: auto">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y" style="--Y-spacing: 1rem; --X-spacing: auto">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y -X- · spacing: 1rem`

```html
<ul class="Y -X-" style="--Y-spacing: 1rem; height: 200px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y -X-" style="--Y-spacing: 1rem; height: 200px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y -Y- · spacing: 1rem`

```html
<ul class="Y -Y-" style="--Y-spacing: 1rem; height: 200px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y -Y-" style="--Y-spacing: 1rem; height: 200px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y -X- -Y- · spacing: 1rem`

```html
<ul class="Y -X- -Y-" style="--Y-spacing: 1rem; height: 200px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y -X- -Y-" style="--Y-spacing: 1rem; height: 200px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

</main>
</body>
</html>
