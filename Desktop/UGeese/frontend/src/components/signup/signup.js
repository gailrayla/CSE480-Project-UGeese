import * as React from 'react';

export default function SignUpForm({ setUser, setAuthState }) {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [studentId, setStudentId] = React.useState('');
    const [department, setDepartment] = React.useState('');

    const handleSignUp = () => {
        // Add your sign-up logic here
        // You may want to validate input fields and handle user creation
        // setUser(newUser); // Example: set the user after successful signup
        // setAuthState('login'); // Example: switch to the login page after signup
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
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an account?</p>
                <button
                    onClick={() => setAuthState('login')}
                    className='ml-2 font-medium text-base text-blue-500'
                >
                    Login
                </button>
            </div>
        </div>
    );
}