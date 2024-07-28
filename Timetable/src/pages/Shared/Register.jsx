import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import signupimg from '@/assets/images/signup.svg';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    roll: '',
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.includes('admin')) {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-200'>
      <Card className="flex w-2/3 h-2/3 shadow-none rounded-lg overflow-hidden border-none">
        <div className="w-1/2 h-full p-8 bg-gray-100 flex flex-col justify-center">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl text-gray-800 pt-4">Create an Account</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="border-none bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="roll">Roll Number</Label>
                <Input
                  id="roll"
                  type="text"
                  value={form.roll}
                  onChange={handleChange}
                  className="border-none bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="user@gmail.com"
                  className="border-none bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="******"
                  className="border-none bg-white"
                  required
                />
              </div>
              <CardFooter className="pt-4">
                <Button type="submit" className="w-full bg-blue-500 text-white">Create Account</Button>
              </CardFooter>
            </form>
          </CardContent>
        </div>
        <div className="w-1/2 h-500px flex items-center">
          <img src={signupimg} alt="Login Illustration" className="h-3/4 w-full object-cover" />
        </div>
      </Card>
    </div>
  );
};

export default Register;
