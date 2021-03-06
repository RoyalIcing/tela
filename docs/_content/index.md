---
title: "Tela"
---

```html
<nav aria-label="Primary">
  <ul class="X |-X-X-|">
    <li><a href="/" aria-current="page">Why?</a>
    <li><a href="/install">Install</a>
    <li><a href="/usage">Usage</a>
    <li><a href="/about">About</a>
  </ul>
</nav>
```

<!-- <h2>A really <span class="color-T">tiny</span> surface area, stretched far</h2> -->
<h2>A <span class="color-T">tiny</span> amount of very reusable CSS</h2>

<!--<h2><span class="color-T">Types</span> make the developer experience better</h2>-->

1. I want a minimal amount of CSS I can reuse to solve common layout and styling problems.
1. I want to use those styles everywhere, and not be locked into a JavaScript-only solution.
1. I don’t want to fight a bundler or config files.
1. It certainly doesn’t need to solve every problem. Tela can be paired with Tailwind, BEM, Bootstrap, or whatever!

<h2>I want styles that work <span class="color-E">everywhere</span></h2>

If you have been writing React apps, you probably know there's been a *lot* of approaches for writing styles. CSS-in-JS solutions attempt to make styling more naturally aligned with a world of components. 

However, this leads to then solving problems such as generating the styles when server rendering, how to reduce their runtime both in terms of download time and execution time, and not delaying the time to initial paint.

I don't want to solve these problems. They started with trying to make the developer experience better, yet often they just make it more difficult. I want something I can reason about without sweat.

CSS custom properties (aka CSS variables) allow a level of flexibility and simplification of patterns that CSS often lacked. They are part of web standards, will be around for decades, and so are worth investing quality time into.

### The problem with CSS-in-JS

Writing CSS-in-JS means that I write React-coupled styles and then use React for everything, even if it's not the preferable choice. I want styles that work in single page apps, server generated HTML, static HTML, and everything in between. I don't want to worry that it won't work, requires a dependency update, or creates performance problems that wastes my time and users’.

Note that this doesn't mean we can't have fantastic components and systems for our styles native to our framework. We can write fantastic systems for say React that enhance the underlying styles. But we won't be locked into *only* using that.

<h2><span class="color-L">Layout</span> in CSS still requires a lot of thinking</h2>

Flexbox and Grid are amazing. However, after all these years, concepts such as justifying and aligning and primary axis and basis don't, well, _align_ with my way of thinking. I know the layout I want to make. I know modern CSS makes it possible. But I still find myself going to  my browser’s developer tools to try different combinations of rules until I stumble upon the solution.

Other parts of CSS generally don't cause this issue for me. I can learn and remember their system because it's logical. Flexbox is very powerful but it's too low level for how I think about layout.

I want higher level layout primitives that I can reuse. I want to be able to see a mock-up and reproduce it in as few classes as possible. I don't want to have to write custom CSS rules for every new design.

Tela introduces `X` and `Y` classes that make common layouts a breeze. Plus, it’s layered with custom properties to allow an adjustable gap.

<h2>We ought to be developing for <span class="color-A">accessibility first</span></h2>

So often, we find ourselves using a `selected` class or similar to pass to our styles so that the appearance changes.

Turns out there's already a system for this, and since we should all ideally be using this system it makes sense to use it as the basis of our styles. We can use ARIA properties as the source of truth.

Instead of a `selected` class we can use `aria-selected`. And rather than adding a `current` class to the currently visited link in the nav, we can use the `aria-current="page"` attribute.

Doing so means we will add the correct accessibility affordance, non-visual users will understand what the heck we've done, and we won't have to come up with our own name for this concept every time.
