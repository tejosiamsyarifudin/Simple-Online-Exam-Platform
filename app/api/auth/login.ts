export const loginUser = async (credentials: { email: string; password: string }): Promise<{ token: string }> => {
    const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
};
