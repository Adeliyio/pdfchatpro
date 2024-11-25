import React from 'react';
import { AuthForm } from './AuthForm';
import { Bot } from 'lucide-react';

interface AuthPageProps {
  type: 'login' | 'signup';
}

export function AuthPage({ type }: AuthPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Bot className="h-12 w-12 text-primary" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {type === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {type === 'login' ? (
            <>
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-primary hover:text-secondary">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="/login" className="font-medium text-primary hover:text-secondary">
                Sign in
              </a>
            </>
          )}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm type={type} />
        </div>
      </div>
    </div>
  );
}