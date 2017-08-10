# lifeofnorman

This README outlines the details of collaborating on this Glimmer application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd lifeofnorman`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [glimmerjs](http://github.com/tildeio/glimmer/)
* [ember-cli](https://ember-cli.com/)

## Walkthrough
Create a new glimmer app with the web-component flag

```zsh
ember new lifeofnorman -b @glimmer/blueprint --web-component
```


Create a new component
```zsh
ember generate glimmer-component story-list
```

Add story-list to main component
```
<story-list/>
```
Add constructor and async functions to get json data
```javascript
import Component from '@glimmer/component';

export default class Lifeofnorman extends Component {
  title = 'Life of Norman';

  constructor(options) {
    super(options);
  };

  async loadTitle() {
    let response = await fetch('https://www.reddit.com/r/lifeofnorman.json');
    let json = await response.json();
  };
};
```

Get titles of norman stories

```javascript
import Component, { tracked } from '@glimmer/component';

export default class Lifeofnorman extends Component {
  title = 'Life of Norman';
  @tracked titles = [];

  constructor(options) {
    super(options);
    this.loadTitle();
  };

  async loadTitle() {
    let response = await fetch('https://www.reddit.com/r/lifeofnorman.json');
    let json = await response.json();
    this.titles = json.data.children;
  };
};
```

In the main component template, add the list in which to generate the titles

```hbs
<div>
  <h1>{{title}}</h1>
  <ul>
    {{#each titles key="@index" as |title|}}
      <li>{{title.data.title}}</li>
    {{/each}}
  </ul>
  <story-list/>
</div>
```
