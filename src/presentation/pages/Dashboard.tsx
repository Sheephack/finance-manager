
import AddTransactionForm from '../components/AddTransactionForm';
import { useTransactionStore } from '../../store/useTransactionStore';
import {auth} from '../../config/firebase';

const Dashboard = () => {
    // const [transactions, setTransactions] = useState<Transaction[]>([]);
    const { transactions } = useTransactionStore();

    const handleLogout = async () => {
        await auth.signOut();
        console.log("Logged out");
    }
    
    // useEffect(() => {
    //     const fetchTransactions = async () => {
    //         const transactionRepo = new TransactionAPI();
    //         const fetchUseCase = new FetchTransactions(transactionRepo);
    //         const result = await fetchUseCase.execute();
    //         setTransactions(result);
    //     };
    //     fetchTransactions();
    // }, []);

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <AddTransactionForm />
            <ul className='space-y-2'>
                {transactions.map((t) => (
                    <li key={t.id} className='border p-2 rounded shadow'>
                        {t.category}: {t.amount}
                    </li>
                ))}
            </ul>
            <button onClick={handleLogout} className='mt-4 p-2 bg-red-500 text-white rounded'>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;