import {module, test} from 'qunit';
import {visit, currentURL, find, click} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | user', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /user', async function (assert) {
    await visit('/user/alex');

    assert.equal(currentURL(), '/user/alex');
    assert.equal(find('h1').textContent.trim(), 'Hello alex!');
  });

  test('visiting /user/nickanme/postcode', async function (assert) {
    await visit('/user/alex');
    await click('#postcode-btn');
    assert.equal(currentURL(), '/user/alex/postcode');
    assert.ok(find('input#text-input'), 'input found');
  });

  test('visiting /user/nickanme/change-name', async function (assert) {
    await visit('/user/alex');
    await click('#change-name');
    assert.equal(currentURL(), '/user/alex/change-name');
    assert.ok(find('input#text-input'), 'input found');
  });
});
