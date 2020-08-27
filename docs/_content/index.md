---
title: "Tela"
---

<h2><span class="color-T">Types</span> make the developer experience better</h2>

How do I know that a class string has a valid rule defined somewhere? How do I know a particular class is actually being used? These questions being hard to answer lead to styles being hard to change — how do I know this won't break something? So we leave most CSS alone and it grows ever larger.

I want two things:

- I want to know as soon as possible if I misspell a class name.
- I want autocompletion as I author so I can discover what's available, and create faster.

Having a stricter system also unlocks the ability to generate just the styling tiles I need based on their usage. There's more to come here.

<h2>I want styles that work <span class="color-E">everywhere</span></h2>

If you have been writing React apps, you probably know there's been a *lot* of approaches for writing styles. CSS-in-JS solutions attempt to make styling more naturally aligned with a world of components. 

They also must then solve problems such as generating the styles when server rendering, how to reduce the time to initial paint, how to reduce their runtime both in terms of download time and execution time.

I don't want to solve these problems. They started with trying to make the developer experience better, and often they just make it more difficult. I want something simple that I can reason about without sweat.

CSS custom properties (aka CSS variables) allow a level of flexibility and simplification of patterns that CSS often lacked. They are part of web standards, will be around for decades, and so are worth investing quality time into.

Writing CSS-in-JS means that I write React styles, and then use React for everything even if it's not the preferable choice. I want styles that work in single page apps, server generated HTML, in static HTML, and everything in between. I don't want to worry that it won't work, requires a dependency update, or creates performance problems that wastes my time and users’.

Not that this doesn't mean we can't have fantastic components and systems for our styles native to our framework. We can write fantastic systems for say React that wrap the underlying styles. But we won't be locked into *only* that.

<h2><span class="color-L">Layout</span> in CSS still requires a lot of thinking</h2>

Flexbox and Grid are amazing. However, after all these years, concepts as justifying and aligning and primary axis and basis don't, well, align with my way of thinking. I know the layout I want to make. I know modern CSS makes it possible. But I still find myself going to  my browser’s developer tools and trying different combinations of rules until I stumble upon the solution.

Other parts of CSS generally don't cause this issue for me. I can learn and remember their system because it's logical.

Flexbox is very powerful but it's too low level for how I think about layout. I want higher level layout primitives that I can reuse. I want to be able to see a mock-up and reproduce it in as few classes as possible. I don't want to have to write custom CSS rules for every new design.

I want issues like gaps between items to be solved. Fortunately, these are pretty easy to solve. 

<h2>We ought to be developing for <span class="color-A">accessibility first</span></h2>

So often, we find ourselves using a `selected` class or similar to pass stateful information down to our styles so that the appearance changes.

Turns out there's already a system for this, and since we should all be using this system it makes sense to use it as the basis of our styles. We can use ARIA properties as the source of truth.

Instead of a `selected` class we can use `aria-selected`.

And rather than adding a `current` class to the currently visited link in the nav, we can use the `aria-current="page"` attribute.

Doing so means we will add the correct accessibility affordance, non-visual users will understand what the heck we've done, and we won't have to come up with a name for this concept every time.
