'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function QueryProvider({children}: React.PropsWithChildren){
  const client = new QueryClient({
    defaultOptions: {
      queries:{
        refetchOnWindowFocus: false,
        staleTime: Infinity
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}