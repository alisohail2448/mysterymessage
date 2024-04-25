'use client';
import React, { useState } from 'react'
import * as zod from 'zod';
import { useDebounceValue } from 'usehooks-ts';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

function page() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver()
  });

  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const debouncedUsername = useDebounceValue(username, 300);

  return (
    <div>page</div>
  )
}

export default page