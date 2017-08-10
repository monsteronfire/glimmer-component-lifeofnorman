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
}
