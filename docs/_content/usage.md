---
title: "Tela: Usage"
---

# Layout classes

The primary layout primitives in Tela are **X** and **Y**.

- The **X** class lays out a flexbox container in the row direction.
- The **Y** class lays out a flexbox container in the column direction.
- CSS custom properties can be used to adjust the spacing between child items.
- Additional classes can be added to justify and align items.

## X

Flexbox row container.

- Set `--X-spacing` CSS property to add a gap between items.
- Center justified by default.
- Add `|X-` class to justify to start (left).
- Add `-X|` class to justify to end (right).
- Add `|X-X|` class to justify to add automatic space between items.
- Add `|-X-X-|` class to justify to add automatic space around items.

### `X` *= centered by default*

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

### `X + 1rem spacing` *= centered with 1rem gap*

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

### `X |X-` *= start/left justified*

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

### `X -X|` *= end/right justified*

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

## Y

Flexbox column container

- Set `--Y-spacing` CSS property to add a vertical gap between items.
- Add `-Y-` class to vertically center.
- Add `-X-` class to horizontally center.

### `Y` *= vertically stacked*

```html
<ul class="Y" style="height: 300px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y" style="height: 300px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>

### `Y · spacing: 1rem` *= vertically stacked with 1rem gap*

```html
<ul class="Y" style="--Y-spacing: 1rem; height: 300px;">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

<div class="example">
  <ul class="Y" style="--Y-spacing: 1rem; height: 300px;">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>


### `Y -Y- · spacing: 1rem` *= vertically centered*

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

### `Y -X- · spacing: 1rem` *= horizontally centered*

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

### `Y -X- -Y- · spacing: 1rem` *= horizontally & vertically centered*

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
