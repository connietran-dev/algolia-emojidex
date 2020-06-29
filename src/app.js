/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '5BCLUM8CFI',
  '34ed59c34e306c503186d5aaa6952a40'
);

const search = instantsearch({
  indexName: 'emojis-1',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<div class="emoji-card">
<p class="label">Emoji Name: </p><h2 class="emoji-name">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h2>
  <p>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
  <p class="emoji-image d-flex justify-content-center align-self-center" style="font-size:50px">{{#helpers.highlight}}{ "attribute": "char" }{{/helpers.highlight}}</p>
  <p class="label">Category: </p><p>{{#helpers.highlight}}{ "attribute": "category" }{{/helpers.highlight}}</p>
</div>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#filters-list',
    attribute: 'category',
    searchable: true,
    searchablePlaceholder: "Category"
  }),
]);

search.start();
