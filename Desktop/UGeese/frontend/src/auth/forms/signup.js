import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({ setUser, setAuthState }) {
    const navigate = useNavigate();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [studentId, setStudentId] = React.useState('');
    const [department, setDepartment] = React.useState('');

    const signUpApiCall = async ({
        firstName,
        lastName,
        email,
        password,
        studentId,
        department,
    }) => {
        try {
            const response = await fetch('http://localhost:5001/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    studentId,
                    department,
                }),
            });

            if (!response.ok) {
                // Handle error cases here
                const errorData = await response.json();
                console.error('Sign-up error:', errorData.error || 'Unknown error');
                return {
                    success: false,
                    error: errorData.error || 'Sign-up failed',
                };
            }

            const data = await response.json();
            return {
                success: true,
                userData: data,
            };
        } catch (error) {
            console.error('Error during sign-up:', error);
            return {
                success: false,
                error: 'Internal Server Error',
            };
        }
    };

    const handleSignUp = async () => {
        console.log('Handle Sign Up clicked'); // Check if this log appears

        // Await the signUpApiCall function
        const result = await signUpApiCall({
            firstName,
            lastName,
            email,
            password,
            studentId,
            department,
        });

        // Handle the result as needed
        if (result.success) {
            // User signed up successfully, you might want to perform additional actions
            console.log('Sign-up successful:', result.userData);
            navigate('/home');
        } else {
            // Handle sign-up failure
            console.error('Sign-up failed:', result.error);
        }
    };


    const handleGoogleSignUp = () => {
        console.log('Google Sign up clicked');
        window.location.href = 'http://localhost:5001/auth/google'
       // GoogleApiCall();
    };
    

    const handleLogin = () => {
        console.log('Login button clicked');
        setAuthState('login');
        navigate('/sign-in');
    };

    return (
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Create account</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Create a new account. It's quick and easy!</p>
            <div className='mt-8 grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>First Name</label>
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your first name'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Last Name</label>
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your last name'
                    />
                </div>
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
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Student ID</label>
                    <input
                        type='text'
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your student ID'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Department</label>
                    <input
                        type='text'
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your department'
                    />
                </div>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <button
                    onClick={handleSignUp}
                    className='w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-lg'
                >
                    Sign up
                </button>

            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button
                    onClick={handleGoogleSignUp}
                    className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100'
                >
                    {/* Google logo SVG */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                        <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                        <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                        <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                    </svg>
                    Sign up with Google
                </button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an account?</p>
                <button
                    onClick={handleLogin}  // Update this line to call handleLogin
                    className='ml-2 font-medium text-base text-blue-500'
                >
                    Login
                </button>
            </div>
        </div>
    );
}