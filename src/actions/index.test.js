import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './index';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', async () => {
    const secretWord = 'party';
    const store = storeFactory();
    
    await moxios.wait( () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord())
    
    const newState = await store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});
