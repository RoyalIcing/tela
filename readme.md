# Tela

Alpha version can be loaded via jsdelivr: <https://cdn.jsdelivr.net/gh/RoyalIcing/tela@0d21d625a3c131a5a270c24ffb2b503f6e20bdc4/tela.css>

## Layout

### X

```html
<ul class="X">
  <li>First
  <li>Second
  <li>Third
</ul>
```

- Uses flexbox with row direction.

### Y

```html
<ul class="Y">
  <li>First
  <li>Second
  <li>Third
</ul>
```

### Responsive

```html
<ul class="Y X>=48em">
  <li>First
  <li>Second
  <li>Third
</ul>
```

- Uses flexbox with column direction.

## Getting started

You must define the following CSS variables:

```css
:root {
  --size-7: 4rem;
  --size-6: 3rem;
  --size-5: 2.25rem;
  --size-4: 1.875rem;
  --size-3: 1.5rem;
  --size-2: 1.25rem;
  --size-1: 1.125rem;
  --size-0: 1.125rem;
  --size--1: 0.875rem;
  --size--2: 0.75rem;
}
```
