import Route from '@ember/routing/route';

export default class extends Route {
  async model(params) {
    const response = await fetch(
      `https://api.github.com/orgs/${params.org}/members`
    );

    const json = await response.json();
    return json;
  }
}


