import { Link, MonitorSmartphone } from 'lucide-react';
import React from 'react';
import { Button } from './ui';

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <span>Welcome to</span>
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-grey-600">Digital Shop</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href='/products'> Go to product</Link>
      </Button>
    </div>
  );
}

export default Welcome;
