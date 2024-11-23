import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTransactionStore } from '../../store/useTransactionStore';
import { format } from 'date-fns';

type FormValues = {
    category: string;
    amount: number;
    date: string;
};

const AddTransactionForm: React.FC = () => {
    const { addTransaction } = useTransactionStore();
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const newTransaction = {
            id: crypto.randomUUID(),
            category: data.category,
            amount: data.amount,
            date: new Date(data.date),
        };
        addTransaction([newTransaction]);
        console.log("New Transaction", data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='p-4 border rounded shadow'>
            <div className='mb-4'>
                <label htmlFor='category' className='block text-sm font-medium text-gray-700'>
                    Category
                </label>
                <input
                    {...register('category', { required: true })}
                    type='text'
                    placeholder='Enter category'
                    id='category'
                    name='category'
                    className='mt-1 p-2 border rounded w-full'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='amount' className='block text-sm font-medium text-gray-700'>
                    Amount
                </label>
                <input
                    {...register('amount', { required: true, valueAsNumber: true })}
                    type='number'
                    placeholder='Enter amount'
                    id='amount'
                    name='amount'
                    className='mt-1 p-2 border rounded w-full'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
                    Date
                </label>
                <input
                    {...register('date', { required: true })}
                    type='date'
                    id='date'
                    name='date'
                    className='mt-1 p-2 border rounded w-full'
                />
            </div>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
                Add Transaction
            </button>
        </form>
    );
}

export default AddTransactionForm;