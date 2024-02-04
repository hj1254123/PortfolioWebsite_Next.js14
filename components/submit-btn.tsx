import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  // useFormStatus Hook 只会返回父级 <form> 的状态信息，所以需要提取一个子组件
  const { pending } = useFormStatus();
  return (
    <button
      className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full 
            bg-gray-900 text-white outline-none transition-all hover:scale-110 
            hover:bg-gray-950 active:scale-105 disabled:scale-100 
              disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
      type='submit'
      disabled={pending}
    >
      Submit
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <FaPaperPlane
          className='text-xs opacity-70 transition-all 
                group-hover:-translate-y-1 group-hover:translate-x-1'
        />
      )}
    </button>
  );
}
