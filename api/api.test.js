import api from './api';

test('api working check', async () => {
  const users = await api.get('/1');
  expect(users.data).toBeTruthy();
});
