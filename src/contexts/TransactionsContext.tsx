import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionsProps[];
  fetchTransactions: (query?:string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);


  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions')
   

    if(query) {
      url.searchParams.append('q', query);
    }

    console.log(url)

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{ 
      transactions,
      fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
