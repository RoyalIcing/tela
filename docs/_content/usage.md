---
title: "Tela: Usage"
---

# Layout classes

- The **X** class lays out a flexbox container in the row direction.
- The **Y** class lays out a flexbox container in the column direction.

## X

Flexbox row container.

- Set `--X-spacing` property to add a gap between items.
- Center justified by default.
- Add `|X-` class to justify to start (left).
- Add `-X|` class to justify to end (right).
- Add `|X-X|` class to justify to add automatic space between items.
- Add `|-X-X-|` class to justify to add automatic space around items.

### `X` *= center justified by default*

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

### `X + 1rem spacing` *= center justified with 1rem gap*

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

### Start (left) justified: `X |X-`

```html
<ul class="X |X-" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X |X-" style="--X-spacing: 1rem;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### End (right) justified: `X -X|`

```html
<ul class="X -X|" style="--X-spacing: 1rem;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="X -X|" style="--X-spacing: 1rem;">
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

### `X |X-X| · min spacing: 1rem`

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

### `X |-X-X-| · min spacing: 1rem`

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
<ul class="Y -X-" style="--Y-spacing: 1rem; height: 300px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y -X-" style="--Y-spacing: 1rem; height: 300px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y -Y- · spacing: 1rem`

```html
<ul class="Y -Y-" style="--Y-spacing: 1rem; height: 300px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y -Y-" style="--Y-spacing: 1rem; height: 300px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y -X- -Y- · spacing: 1rem`

```html
<ul class="Y -X- -Y-" style="--Y-spacing: 1rem; height: 300px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y -X- -Y-" style="--Y-spacing: 1rem; height: 300px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

</main>
</body>
</html>