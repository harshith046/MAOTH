export async function registerUser(data) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to register user');

    const result = await response.json();
    console.log('Dummy API Response:', result);
    return result;
  } catch (err) {
    console.error('Error in API:', err);
    throw err;
  }
}
