import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SigninForm({ setUser, setAuthState }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSignIn = async () => {
    try {
      // Placeholder for sign-in logic
      const response = await signInApiCall({ email, password });

      // Check if the sign-in was successful (adjust according to your API response)
      if (response.success) {
        // Assuming the response includes user data
        setUser(response.userData);

        // Set authentication state to 'authenticated'
        setAuthState('authenticated');

        // Redirect to the home page
        navigate('/home');
      } else {
        // Handle sign-in failure (show error message, etc.)
        setError(response.error);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
      <h1 className='text-5xl font-semibold'>Login</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome back! Please enter your details.
      </p>
      {/* ... (your existing JSX code) */}
      <div className='mt-8'>
        <div className='flex flex-col'>
          <label className='text-lg font-medium'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your email'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='text-lg font-medium'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your password'
          />
        </div>
        {error && (
          <p className='text-red-500 mt-4 text-sm'>
            Error: {error}
          </p>
        )}
        {/* ... (your existing JSX code) */}
        <div className='mt-8 flex flex-col gap-y-4'>
          <button
            onClick={handleSignIn}
            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-lg'
          >
            Sign in
          </button>
          {/* ... (your existing JSX code) */}
        </div>
      </div>
    </div>
  );
}

// Placeholder for the sign-in API call
const signInApiCall = async ({ email, password }) => {
    // Replace this with your actual sign-in API call logic
    // Example: Make a fetch call to your authentication endpoint
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    // For simplicity, we'll assume a successful response with a mock user
    if (response.ok) {
      const userData = {
        id: 1,
        username: 'exampleUser',
        // Add other user information as needed
      };
  
      return {
        success: true,
        userData,
      };
    } else {
      // If the response is not okay, handle the error
      const errorResponse = await response.json();
      return {
        success: false,
        error: errorResponse.message || 'Sign-in failed',
      };
    }
  };
  