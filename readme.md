# Tela

Alpha version can be loaded via jsdelivr: <https://cdn.jsdelivr.net/gh/RoyalIcing/tela@3d61f6e92daaed960b19598c6c1d851420feae4e/tela.css>

## Grid

Uses CSS grid.

### Two column grid:

```html
<ul
class="G |-+-|"
>
<li>First</li>
<li>Second</li>
<li>Third</li>
<li>Fourth</li>
</ul>
```

### Three column grid:

```html
<ul
class="G |-+-+-|"
>
<li>First</li>
<li>Second</li>
<li>Third</li>
<li>Fourth</li>
</ul>
```

### Four column grid:

```html
<ul
class="G |-+-+-+-|"
>
<li>First</li>
<li>Second</li>
<li>Third</li>
<li>Fourth</li>
</ul>
```

## X

Uses flexbox with row direction, items aligned center.

```html
<ul
  class="X"
  style="
    --X-spacing: 1rem;
  "
>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

## Y

Uses flexbox with column direction.

```html
<ul
  class="Y"
  style="
    --Y-spacing: 1rem;
  "
>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

## Text

### Centering text

```html
<div
  class="-X-"
>
  <h1>Some heading</h1>
  <p>Some descriptive text</p
</div>
```

## Responsive

```html
<ul class="Y X>=48em">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

## Getting started

You may define the following CSS variables:

```css
:root {
  --size-7: 4rem;
  --size-6: 3rem;
  --size-5: 2.25rem;
  --size-4: 1.875rem;
  --size-3: 1.5rem;
  --size-2: 1.25rem;
  --size-1: 1.125rem;
  --size-0: 1rem;
  --size--1: 0.875rem;
  --size--2: 0.75rem;
}
```
