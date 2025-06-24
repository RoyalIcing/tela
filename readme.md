# Tela.css

## Tightly Expressive Layout Accelerator

Tela aims to make common layouts take just a couple of CSS classes. Instead of chaining together many utility classes, use honed classes that let you express your layout in just a few keystrokes.

Use CSS grid and flexbox without having to learn all their intricacies. Tela offset an opinionated subset of these layout primitives, composing them into slightly higher level forms inspired by other layout systems like SwiftUI.

## Install

Load via jsdelivr: <https://cdn.jsdelivr.net/gh/RoyalIcing/tela@3d61f6e92daaed960b19598c6c1d851420feae4e/tela.css>

## Breakpoints

Tela has one breakpoint at `40rem`. To use it write your class with the `+` suffix. (This is equivalent to Tailwind 4’s `sm` breakpoint)

## Grid

Uses CSS grid.

### One column grid:

```html
<ul class="|1|">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
```

### Two column grid:

```html
<ul class="|2|">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
```

### One column grid, two columns on wide viewports:

```html
<ul class="|1| |2|+">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
```

### Three column grid:

```html
<ul class="|3|">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
```

### Four column grid:

```html
<ul class="|4|">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
```

### Five column grid:

```html
<ul class="|5|">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
</ul>
```

### Six column grid:

```html
<ul class="|6|">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
  <li>Sixth</li>
</ul>
```

## X

Uses flexbox with row direction, items aligned center.

```html
<ul class="x-y">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

Or alternatively use the custom element:

```html
<form>
    <x-x>
        <button>Add</button>
        <button>Remove</button>
    </x-x>
</form>
```

## Y

Uses flexbox with column direction.

```html
<ul class="Y" style="gap: 1rem">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

## Text

### Centering text

```html
<div class="-X-">
  <h1>Some heading</h1>
  <p>Some descriptive text</p
</div>
```

## Accessibility Enhancements

```html
<button>
  <svg>…</svg>
  <data-invisible>Close modal</data-invisible>
</button>
```

## Responsive

```html
<ul class="Y X>=40rem">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```
